const $animalForm = document.querySelector('#animal-form');
const $zookeeperForm = document.querySelector('#zookeeper-form');

const handleZookeeperFormSubmit = event => {
  event.preventDefault();

  // get zookeeper data and organize it
  const name = $zookeeperForm.querySelector('[name="zookeeper-name"]').value;
  const age = parseInt($zookeeperForm.querySelector('[name="age"]').value);
  const favoriteAnimal = $zookeeperForm.querySelector('[name="favorite-animal"]').value;

  const zookeeperObj = { name, age, favoriteAnimal };
  console.log(zookeeperObj);
  fetch('api/zookeepers', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(zookeeperObj)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding a zookeeper!');
    });
};

$zookeeperForm.addEventListener('submit', handleZookeeperFormSubmit);

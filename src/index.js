document.addEventListener('DOMContentLoaded', function() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let ceoImageContainer = document.getElementById('dog-image-container');

      for (const element of json.message) {
        let img = document.createElement('img');
        img.src = element;
        ceoImageContainer.appendChild(img);
      }
    });
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        breedContainer = document.getElementById('dog-breeds');
        breeds = Object.keys(json.message)

        for (const element of breeds) {
          let li = document.createElement('li');
          li.innerHTML = element;
          breedContainer.appendChild(li);
        }
      });
});

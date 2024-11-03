// get referacnes
const  animalSelect = document.getElementById('animal-select');
const selectAnimal = document.getElementById('animla-image')

// function update for iamge selected
function updateAnimalImage(){
    const selectAnimal=animalSelect.value;
    const animalImage = {
        dog: '/AnimalNames/animal/dog.jpeg',
        cat: '/AnimalNames/animal/cat.jpeg',
        elephant: '/AnimalNames/animal/elephant.jpeg',
        lion: '/AnimalNames/animal/lion.jpeg'
    }

    animalImage.src = animalImage[selectAnimal];
    animalImage.alt = selectAnimal.charAt(0).toUpperCase() + selectAnimal.slice(1);

}
animalSelect.addEventListener('change', updateAnimalImage);


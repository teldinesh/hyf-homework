const spiritAnimal = ['Achak', 'Adalwolf', 'Alaska', 'Amarok', 'Artic', 'Aspen', 'Aura', 'Barwolf', 'Bardalph', 'Beowulf', 'Borris', 'Czar', 'Dakota', 'Dash', 'Dire', 'Duke', 'Eskimo', 'Harou' , 'Inuit', 'Leto', 'Loki'];
document.getElementById("inputVal").innerHTML = "Enter";

 const btn=document.querySelector('.btn1');
 const spiritName=document.querySelector('h3'); 
 
 function spiritNamesGenerator(inputName){
    return `${inputName} - ${spiritAnimal[parseInt(Math.random()*10)]}`;
 }
function changebtn() {
    const spiritAnimalName = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
    const inputName = document.getElementById("inputVal").value;
    if(inputName!==""){
    spiritName.innerHTML = spiritNamesGenerator(inputName);
    }
    else {
        spiritName.innerHTML = 'Please enter your values';
    }
    btn.disabled = true;
};

btn.addEventListener('click',changebtn);
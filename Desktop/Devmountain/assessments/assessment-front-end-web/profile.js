let myFavoriteColor = document.querySelector('#color')
let myFavoritePlace = document.getElementById('place')
let myFavoriteRitual = document.querySelector('#ritual')



myFavoriteColor.addEventListener('click',()=> alert('My favorite color is navy blue'))

myFavoritePlace.addEventListener('click',()=> {
    alert('My favorite place is my home')
})

function myRitual (event){
    event.preventDefault();

    alert('My favorite ritual is making my own coffee in the morning')
}

myFavoriteRitual.addEventListener('click',myRitual)
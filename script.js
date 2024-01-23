const button = document.querySelector('#btn');
const profileImg = document.querySelector('#profileimg');
const profileName = document.querySelector('#name');
const mail = document.querySelector('#mail');
const contact = document.querySelector('#contact');
const age = document.querySelector('#age');
const country = document.querySelector('#country');
const gender = document.querySelector('#gender');

function generateUser(result) {
    // console.log(result)
    const data = result.results[0];
    profileImg.src = data.picture.medium;
    const firstName = data.name.first;
    const lastName = data.name.last;
    profileName.textContent = firstName + " " + lastName;
    gender.textContent = data.gender;
    mail.textContent = data.email;
    contact.textContent = data.phone;
    age.textContent = data.dob.age;
    country.textContent = data.location.country;
}

function errorFunction (error) {
  console.log(error, 'this is an error')
}

function fetchData() {
    fetch('https://randomuser.me/api/')
    .then(function(resp) {

        return resp.json()
    })
    .then(generateUser)
    .catch(errorFunction)
}


button.addEventListener('click', fetchData)
document.addEventListener('DOMContentLoaded', fetchData)


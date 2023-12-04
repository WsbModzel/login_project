const loginForm = document.getElementById("login-form"); //przypisanie do zmiennej elementu login-form
const loginButton = document.getElementById("login-form-submit"); //przypisanie do zmiennej elementu login-form-submit
const loginErrorMsg = document.getElementById("login-error-msg"); //przypisanie do zmiennej elementu login-error-msg

loginButton.addEventListener("click", (e) => { //odpalanie funkcji po wciśnieciu przycisku login
    e.preventDefault();
    const username = loginForm.username.value; //przypisanie wartosci username z formularza do zmiennej
    const password = loginForm.password.value; //przypisanie wartosci password z formularza do zmiennej

    //porownanie czy wartosci username i password sa puste, jesli tak wyskoczy powiadomienie o udanym logowaniu. Jesli nie, zmieni sie wartosci wiadomosci bledu
    //i pojawi sie informacje o bledzie
    
    if (username === "" && password === "") { 
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert('Username or password incorrect. Please try again.');
               
    }
})
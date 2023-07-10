async function validateForm(){
    const formulaireLogin = document.getElementById("login");

    const response = await fetch('http://localhost:5678/api/users/login')
    const userId = await response.json();

    formulaireLogin.addEventListener("submit", function (event){
        event.preventDefault();

        const identifiant = document.getElementById("email");
        console.log(identifiant.value);
        const password = document.getElementById("password");
        console.log(password.value);

        if (identifiant.value === userId.email &&
            password.value === userId.password){
                window.location.href = "../index.html";
        } else {
        }
    });
}

async function validateForm(){

    const formLogin = document.getElementById("form-login");
    formLogin.addEventListener("submit", async function connexion(event){
        event.preventDefault() 
            
        const identifiant = document.getElementById("email");
        console.log(identifiant.value);
        const password = document.getElementById("password");
        console.log(password.value);
        const response = await fetch("http://localhost:5678/api/users/login", {
            method: 'POST',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json" },
            body: JSON.stringify({
                email: identifiant.value,
                password: password.value
            })
        })
        
        if (response.ok) {
            let res = await response.json();
            console.log("co");
            console.log(`${res}`)
            window.location.href = "index.html";
        } else {
            console.log("Erreur lors de la requête :", response.status);
            //errorMessageElement.textContent = "Erreur dans l'identifiant ou le mot de passe.";
        }
        
    })
    
}

validateForm();
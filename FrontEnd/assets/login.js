async function validateForm(){

    const formLogin = document.getElementById("form-login");
    formLogin.addEventListener("submit", async function connexion(event){
        event.preventDefault() 
            
        const identifiant = document.getElementById("email");
        console.log(identifiant.value);
        const password = document.getElementById("password");
        console.log(password.value);
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4";

        const response = await fetch("http://localhost:5678/api/users/login", {
            method: 'POST',
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                email: identifiant.value,
                password: password.value
            }) 
        })
        response.then((res) => {
            if (res.ok) {
                console.log("co");
                console.log(`${res}`)
                window.location.href = "./index.html";
            } else {
                console.log("Erreur lors de la requête :", res.status);
                //errorMessageElement.textContent = "Erreur dans l'identifiant ou le mot de passe.";
            }
        }).catch((error) => {
            console.error("Erreur lors de la requête :", error);
        });
        
    })
    
}

validateForm();
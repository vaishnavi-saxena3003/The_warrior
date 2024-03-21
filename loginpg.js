


function loading() {


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    

    const storedDataJSON = localStorage.getItem('newdata');

    if (storedDataJSON) {
        const storedData = JSON.parse(storedDataJSON);

        if (email === storedData.email && password === storedData.password) {
            
            window.location.href = 'index.html';
         
        } else {
         
            document.getElementById('errorvalidation').innerHTML = "Please enter correct email and password !!"

        }
    } else {
        alert("No user data found. Please sign up.");
    }
}


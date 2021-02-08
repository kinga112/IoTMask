const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    alert("login button clicked");
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const users = db.collection('users').doc();
    const doc = users.get();

    if (!doc.exists) {
        alert("Failed");
        console.log('Document Not Found!');
    } else {
        if (username === doc.username && password === doc.username.password) {
            alert("You have successfully logged in.");
            location.reload();
        } else {
            alert("Failed");
        }
    }
})
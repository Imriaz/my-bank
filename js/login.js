document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    //user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    //check validity

    if (userEmail == 'imriaz@gmail.com' && userPassword == 'imriaz') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Invalied Email, Password!!');
    }

});

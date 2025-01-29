document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

   
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });


    document.getElementById('signUpButton').addEventListener('click', function (event) {
        event.preventDefault();

       
        const name = document.getElementById('signUpName').value.trim();
        const email = document.getElementById('signUpEmail').value.trim();
        const password = document.getElementById('signUpPassword').value.trim();

        
        if (!name || !email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'Please fill in all fields to sign up.'
            });
            return;
        }

        if (!email.includes('@')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.'
            });
            return;
        }

       
        Swal.fire({
            icon: 'success',
            title: 'Account Created',
            text: 'Welcome! Redirecting you...',
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = 'VV.html';  
        }, 1500);
    });

    document.getElementById('logInButton').addEventListener('click', function (event) {
        event.preventDefault();

        const email = document.getElementById('signInEmail').value.trim();
        const password = document.getElementById('signInPassword').value.trim();


        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'Please enter both email and password.'
            });
            return;
        }

        if (!email.includes('@')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.'
            });
            return;
        }


        Swal.fire({
            icon: 'success',
            title: 'Logged In',
            text: 'Redirecting you...',
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = 'VV.html';  
        }, 1500);
    });
});

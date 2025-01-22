document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // Toggle between Sign In and Sign Up panels
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    // Sign Up Validation and SweetAlert
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
            // Redirect to another page (update as needed)
            window.location.href = './index2.html';
        }, 1500);
    });

    // Log In Validation and SweetAlert
    document.getElementById('logInButton').addEventListener('click', function (event) {
        event.preventDefault();

        const email = document.getElementById('signInEmail').value.trim();

        if (!email.includes('@')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email to log in.'
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
            // Redirect to another page (update as needed)
            window.location.href = './index2.html';
        }, 1500);
    });
});
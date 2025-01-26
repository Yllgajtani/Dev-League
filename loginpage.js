document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // Switch between Sign Up and Log In views
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    // Handle Sign Up button click
    document.getElementById('signUpButton').addEventListener('click', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('signUpName').value.trim();
        const email = document.getElementById('signUpEmail').value.trim();
        const password = document.getElementById('signUpPassword').value.trim();

        // Basic validation
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

        // Show success message and redirect
        Swal.fire({
            icon: 'success',
            title: 'Account Created',
            text: 'Welcome! Redirecting you...',
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = 'candidates.html';  // Redirect to the candidates page after successful sign-up
        }, 1500);
    });

    // Handle Log In button click
    document.getElementById('logInButton').addEventListener('click', function (event) {
        event.preventDefault();

        // Get form values
        const email = document.getElementById('signInEmail').value.trim();
        const password = document.getElementById('signInPassword').value.trim();

        // Basic validation
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

        // Show success message and redirect
        Swal.fire({
            icon: 'success',
            title: 'Logged In',
            text: 'Redirecting you...',
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = 'candidates.html';  // Redirect to the candidates page after successful login
        }, 1500);
    });
});

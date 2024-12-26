const container = document.getElementById('container');
const signInButton = document.getElementById('login');
const signUpButton = document.getElementById('register');

// Toggle to Sign-Up form
signUpButton.addEventListener('click', () => {
    container.classList.add('active');
});

// Toggle to Sign-In form
signInButton.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle Sign-Up Form Submission
document.querySelector('.sign-up form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = e.target.querySelector('input[placeholder="name"]').value.trim();
    const email = e.target.querySelector('input[placeholder="Email"]').value.trim();
    const password = e.target.querySelector('input[placeholder="Password"]').value.trim();

    if (!name || !email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert(result.message);
        }
    } catch (err) {
        alert('Error during sign-up. Please try again.');
    }
});

// Handle Sign-In Form Submission
document.querySelector('.sign-In form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.querySelector('input[placeholder="Email"]').value.trim();
    const password = e.target.querySelector('input[placeholder="Password"]').value.trim();

    if (!email || !password) {
        alert('Please fill out both fields.');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(`Welcome back, ${result.user.name}!`);
            window.location.href='calc.html';
        } else {
            alert(result.message);
        }
    } catch (err) {
        alert('Error during sign-in. Please try again.');
    }
});

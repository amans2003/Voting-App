document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const errorDiv = document.getElementById('loginFormError');
    errorDiv.textContent = '';

    const form = e.target;
    const data = {
        aadharCardNumber: form.aadharCardNumber.value,
        password: form.password.value
    };

    try {
        const res = await fetch('/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (!res.ok) {
            errorDiv.textContent = result.error || 'Login failed.';
            return;
        }
        // Store JWT token for future requests
        localStorage.setItem('token', result.token);
        window.location.href = 'profile.html';
    } catch (err) {
        errorDiv.textContent = 'Network error. Please try again.';
    }
}); 
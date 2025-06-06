document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const errorDiv = document.getElementById('userFormError');
    errorDiv.textContent = '';

    const form = e.target;
    const data = {
        name: form.name.value,
        age: form.age.value,
        email: form.email.value,
        mobile: form.mobile.value,
        address: form.address.value,
        aadharCardNumber: form.aadharCardNumber.value,
        password: form.password.value,
        role: 'voter'
    };

    try {
        const res = await fetch('/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (!res.ok) {
            errorDiv.textContent = result.error || 'Registration failed.';
            return;
        }
        // Store JWT token for future requests
        localStorage.setItem('token', result.token);
        window.location.href = 'vote.html';
    } catch (err) {
        errorDiv.textContent = 'Network error. Please try again.';
    }
}); 
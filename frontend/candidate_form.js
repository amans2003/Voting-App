document.getElementById('candidateForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const errorDiv = document.getElementById('candidateFormError');
    if (errorDiv) errorDiv.textContent = '';

    const data = {
        name: form.name.value,
        party: form.party.value,
        age: form.age.value
    };

    // Get JWT token from localStorage
    const token = localStorage.getItem('token');

    try {
        const res = await fetch('/candidate/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (!res.ok) {
            if (errorDiv) errorDiv.textContent = result.error || 'Failed to add candidate.';
            return;
        }
        alert('Candidate registered successfully!');
        window.location.href = 'results.html';
    } catch (err) {
        if (errorDiv) errorDiv.textContent = 'Network error. Please try again.';
    }
}); 
async function loadCandidates() {
    const candidatesList = document.getElementById('candidatesList');
    candidatesList.innerHTML = 'Loading candidates...';
    try {
        const res = await fetch('/candidate/');
        const candidates = await res.json();
        candidatesList.innerHTML = '';
        if (!candidates.length) {
            candidatesList.innerHTML = '<div>No candidates available.</div>';
            return;
        }
        const group = document.createElement('div');
        group.className = 'candidates-list-group';
        candidates.forEach(candidate => {
            const label = document.createElement('label');
            label.className = 'candidate-radio-label';
            label.innerHTML = `<input type="radio" name="candidate" value="${candidate._id}" required> ${candidate.name} (${candidate.party})`;
            group.appendChild(label);
        });
        candidatesList.appendChild(group);
    } catch (err) {
        candidatesList.innerHTML = '<div class="form-error">Failed to load candidates.</div>';
    }
}

window.onload = loadCandidates;

document.getElementById('voteForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="candidate"]:checked');
    if (!selected) return;
    const candidateID = selected.value;
    const token = localStorage.getItem('token');
    try {
        const res = await fetch(`/candidate/vote/${candidateID}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const result = await res.json();
        if (!res.ok) {
            alert(result.message || 'Failed to vote.');
            return;
        }
        alert('Thank you for voting!');
        window.location.href = 'results.html';
    } catch (err) {
        alert('Network error. Please try again.');
    }
}); 
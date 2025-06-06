// Placeholder: Load results dynamically
const results = [
    { name: 'Alice', votes: 10 },
    { name: 'Bob', votes: 7 },
    { name: 'Charlie', votes: 15 }
];

const resultsList = document.getElementById('resultsList');
results.forEach(candidate => {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.textContent = `${candidate.name}: ${candidate.votes} votes`;
    resultsList.appendChild(div);
});

async function loadResults() {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '<div>Loading results...</div>';
    try {
        const res = await fetch('/candidate/vote/count');
        const results = await res.json();
        resultsList.innerHTML = '';
        if (results.length === 0) {
            resultsList.innerHTML = '<div>No results yet.</div>';
            return;
        }
        results.forEach(candidate => {
            const div = document.createElement('div');
            div.className = 'result-item-pro';
            div.innerHTML = `<strong>Party:</strong> ${candidate.party} <span class='votes'>Votes: ${candidate.count}</span>`;
            resultsList.appendChild(div);
        });
    } catch (err) {
        resultsList.innerHTML = '<div class="form-error">Failed to load results.</div>';
    }
}

window.onload = loadResults; 
async function loadProfile() {
    const token = localStorage.getItem('token');
    const profileDiv = document.getElementById('profileDetails');
    if (!token) {
        window.location.href = 'login.html';
        return;
    }
    try {
        const res = await fetch('/user/profile', {
            headers: { 'Authorization': 'Bearer ' + token }
        });
        if (!res.ok) {
            window.location.href = 'login.html';
            return;
        }
        const data = await res.json();
<<<<<<< HEAD
=======
        console.log("User data from backend:" ,data);
>>>>>>> c23b58f (Initial commit or project update)
        const user = data.user;
        let votedForHtml = '<div><strong>Voted For:</strong> Not voted yet</div>';
        if (user.isVoted && user.votedFor && user.votedFor.name) {
            votedForHtml = `<div><strong>Voted For:</strong> ${user.votedFor.name} (${user.votedFor.party})</div>`;
        }
        profileDiv.innerHTML = `
            <div><strong>Name:</strong> ${user.name}</div>
            <div><strong>Age:</strong> ${user.age}</div>
            <div><strong>Email:</strong> ${user.email || '-'}</div>
            <div><strong>Mobile:</strong> ${user.mobile || '-'}</div>
            <div><strong>Address:</strong> ${user.address}</div>
            <div><strong>Aadhar Card Number:</strong> ${user.aadharCardNumber}</div>
            ${votedForHtml}
        `;
    } catch (err) {
        profileDiv.innerHTML = '<div class="form-error">Failed to load profile.</div>';
    }
}
window.onload = loadProfile; 
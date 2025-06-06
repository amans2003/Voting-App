// Replace with your Google OAuth2 client ID and backend endpoint
const CLIENT_ID = '592955621644-6i84u22v1u1ma1e0fm35cbhbgiitken0.apps.googleusercontent.com';
const REDIRECT_URI = 'http://localhost:3000/role.html'; // After Google login, go to role selection

const googleSignInBtn = document.getElementById('googleSignInBtn');
googleSignInBtn.addEventListener('click', () => {
    // Google OAuth2 endpoint
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        response_type: 'token',
        scope: 'profile email',
        include_granted_scopes: 'true',
        state: 'voting_app_signup'
    });
    window.location = `${oauth2Endpoint}?${params.toString()}`;
});

// Note: In production, you should handle the OAuth2 callback in your backend to verify the token and create/login the user. 
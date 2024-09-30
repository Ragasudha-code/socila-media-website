document.addEventListener('DOMContentLoaded', () => {
    const editProfileBtn = document.getElementById('edit-profile-btn');

    // Event listener to handle editing profile
    editProfileBtn.addEventListener('click', () => {
        const newUserName = prompt('Enter new name:', document.getElementById('user-name').innerText);
        const newUserBio = prompt('Enter new bio:', document.getElementById('user-bio').innerText);

        if (newUserName && newUserBio) {
            document.getElementById('user-name').innerText = newUserName;
            document.getElementById('user-bio').innerText = newUserBio;
        }
    });
});


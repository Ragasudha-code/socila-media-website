document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('new-posts-container');

    // Event listener to handle post submission
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const postContent = document.getElementById('post-content').value;

        // Create a new post element
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>You</h3>
            <p>${postContent}</p>
        `;

        // Append the new post to the feed
        postsContainer.prepend(postElement);

        // Clear the textarea after submission
        document.getElementById('post-content').value = '';
    });
});


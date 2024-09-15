// Get blog posts from localStorage
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const postsContainer = document.getElementById('postsContainer');

// Display each post
blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>Author:</strong> ${post.username}</p>
    `;
    postsContainer.appendChild(postElement);
});

// Toggle Light/Dark Mode
const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

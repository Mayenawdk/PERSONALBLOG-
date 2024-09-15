document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete all fields.');
        return;
    }

    const blogPost = {
        username: username,
        title: title,
        content: content
    };

    // Get existing blog posts from localStorage or create an empty array if none exist
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);

    // Save back to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Redirect to the posts page
    window.location.href = 'blog.html';
});

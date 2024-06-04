const btn = document.querySelector('#get-posts-btn')
const output = document.querySelector('#output')
const form = document.querySelector('#add-post-form')

btn.addEventListener('click', showPosts);
form.addEventListener('submit', addPost);

async function showPosts() {
    try {
        const res = await fetch('http://localhost:8080/api/posts')
        if(!res.ok) {
            console.log(res);
            throw new Error('Failed to fetch posts');
        }
        const posts = await res.json()
        output.innerHTML = '';

        posts.forEach(post => {
            const postEle = document.createElement('div');
            postEle.textContent = post.title;
            output.appendChild(postEle);
        });
    } catch (error) {
        console.log('error while fetching posts!');
    }
    
}

// Add new post
async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');
    try {
        const res = await fetch('http://localhost:8080/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title})
        })
        console.log(res);
        if(!res.ok) {
            throw new Error('Failed to add post!');
        }
        // const newPost = await res.json();
        // const postEle = document.createElement('div');
        // postEle.textContent = newPost.title;
        //     output.appendChild(postEle);
        showPosts();
    } catch (error) {
        console.log('error while adding post!');
    }
}
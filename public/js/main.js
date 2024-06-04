const btn = document.querySelector('#get-posts-btn')
const output = document.querySelector('#output')

console.log(btn);

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

btn.addEventListener('click', showPosts);
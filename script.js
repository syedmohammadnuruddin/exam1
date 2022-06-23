function loadPosts(){
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(posts => displayPost(posts))
}
loadPosts()

function displayPost(posts){
    let postsContainer = document.getElementById("posts");
    for(let post of posts){
        singlePost = document.createElement("div");
        singlePost.classList.add('post');
        singlePost.innerHTML = `
            <h3> ${post.name.common}</h3>
            <h3> ${post.population}</h3>
            <h3> Flag :<img src="${post.flags.svg}" /> </h3>
        `;
        postsContainer.appendChild(singlePost);
    }
}
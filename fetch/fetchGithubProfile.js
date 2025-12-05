fetch(`https://api.github.com/users/nebilabdo`)
  // Load the response as json
  .then(response => response.json())
  // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
   return img;
  }).then(img=>setTimeout(() => img.remove(), 3000) // (*)
)

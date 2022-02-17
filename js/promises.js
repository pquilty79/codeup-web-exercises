const githubPromise = fetch('https://api.github.com/repos/pquilty79/codeup-web-exercises/commits',{headers: {'Authorization': `token ${MY_GITHUB_TOKEN}`}} )
    .then(response => response.json())
    .catch(error => console.error(error));
    console.log(githubPromise)




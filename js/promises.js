let username = ""
function getUserName() {
    $('#submit').click(function () {
        username = $('#username').val()
        getPromise(username)
    })
}
getUserName()

function getPromise(username) {
    const githubPromise = fetch(`https://api.github.com/repos/${username}/codeup-web-exercises/commits/main`, {headers: {'Authorization': `token ${MY_GITHUB_TOKEN}`}})
        .then(response => response.json())
        .then(response => {
            let date = response.commit.author.date;
            console.log(convertDate(date))
        })
        .catch(error => console.error(error));
    console.log(githubPromise)
}

function convertDate (date_to_convert_str) {
        let date_to_convert = new Date(date_to_convert_str);
        return date_to_convert.toString();
    }



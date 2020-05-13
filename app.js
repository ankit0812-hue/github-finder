let button = document.getElementById('sbtn');
let username = document.getElementById('username').value;
console.log(username);
button.addEventListener('click',function(){
    findrepo(username);
});
function findrepo(user)
{
    var request = new XMLHttpRequest();
    var url = `https://api.github.com/users/${user}/repos`;

    request.open('GET',url,true);
    request.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);


    for(let i in data)
    {
        let ul = document.getElementById('userrepo');
        let li = document.createElement('li');
            li.innerHTML = (`
                <p>Repo: ${data[i].name}</p>
                <p>Description: ${data[i].description}</p>
                <p>URL: <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            `);
            ul.appendChild(li);
    }
    }
    request.send();
}

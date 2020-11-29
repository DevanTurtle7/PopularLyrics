var url = "https://api.genius.com/songs/378195?access_token=" + token

async function funcName(){

    console.log(token)
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
}

$(document).ready(funcName);
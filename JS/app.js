const SportsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a9d3afa1e1a444ff92ddce370befbace`;

window
.fetch(SportsApiUrl)
.then(data => {
    data.json()
    .then(sportsnews => {
        console.log(sportsnews);
        let sportsData = sportsnews.articles;
        let output = "";

        for(let sports of sportsData) {
            output += `
            <h1 class="h1Title"><a herf="${sports.url}" target=_blank>${sports.title}</a></h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publisedAt}</p>


            `;
        }

        document.getElementById("left").innerHTML=output;

    }).catch(err => console.log(err));
})
.catch(err => console.log(err));

//time javascript
setInterval(() => {

    var time = new Date().toLocaleTimeString();
document.getElementById("time").innerHTML=time;


},1000);


const EntUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=761ac15f7f1f4ef6a9aa599e5f57e32e`;
window
.fetch(EntUrl)
.then(data => {
    data.json()
    .then(ent => {
        
        let entData = ent.articles;
        let output = "";

        for(let ent of entData) {
            output += `
            <h1 class="h1Title"><a href="${ent.url}" target=_blank>${ent.title}</a></h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publisedAt}</p>
            `;
        }

        document.getElementById("right").innerHTML=output;

    }).catch(err => console.log(err));
})
.catch(err => console.log(err));

//top news headlines
const midUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=761ac15f7f1f4ef6a9aa599e5f57e32e`;
window
.fetch(midUrl)
.then(data => {
    data.json()
    .then(ent => {
        
        let entData = ent.articles;
        let output = "";

        for(let ent of entData) {
            output += `
            <h1 class="h1Title"><a href="${ent.url}" target=_blank>${ent.title}</a></h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publisedAt}</p>
            `;
        }

        document.getElementById("middle").innerHTML=output;

    }).catch(err => console.log(err));
})
.catch(err => console.log(err));
var david = "";
var jasen = "";
var dead = "";
var brian = "";
var darwin = "";
var allStatus = "";

async function getDave(buildPage, getJasen, getDead, getBrian, getDarwin, getStatus){
    await fetch("./david.txt")
        .then(response => response.text()).catch((e) => { console.log("fetch Dave", e); })
        .then(function (text) {
            david = text;
            getJasen(buildPage, getDead, getBrian, getDarwin, getStatus);
        }).catch((e) => { console.log("set Dave", e); });
}

async function getJasen(buildPage, getDead, getBrian, getDarwin, getStatus){
    await fetch("./jasen.txt")
        .then(response => response.text()).catch((e) => { console.log("fetch Jasen", e); })
        .then(function(text){
            jasen = text;
            getDead(buildPage, getBrian, getDarwin, getStatus);
        }).catch((e) => { console.log("set Jasen", e); });
}

async function getDead(buildPage, getBrian, getDarwin, getStatus){
    await fetch("./dead.txt")
        .then(response => response.text()).catch((e) => { console.log("fetch dead", e); })
        .then(function(text){
            dead = text;
            getBrian(buildPage, getDarwin, getStatus);
        }).catch((e) => { console.log("set Dead", e); });
}

async function getBrian(buildPage, getDarwin, getStatus){
    await fetch("./brian.txt")
        .then(response => response.text()).catch((e) => { console.log("fetch brian", e); })
        .then(function(text){
            brian = text;
            getDarwin(buildPage, getStatus);
        }).catch((e) => { console.log("set brian", e); });
}

async function getDarwin(buildPage, getStatus){
    await fetch("./darwin.txt")
        .then(response => response.text()).catch((e) => { console.log("fetch darwin", e); })
        .then(function(text){
            darwin = text;
            getStatus(buildPage);
        }).catch((e) => { console.log("set darwin", e); });
}

async function getStatus(buildPage) {
    await fetch("./allStatus.txt")
        .then(response => response.text()).catch((e) => { console.log("fetch Status", e); })
        .then(function (text) {
            allStatus = text;
            buildPage();
        }).catch((e) => { console.log("set Status", e); });
}

function buildPage(){
    let contentDiv = document.querySelector('#content');
    let pageContent = document.createElement('div');
    let asDiv = document.querySelector('#AllStatus');
    let asContent = document.createElement('div');

    var paras = document.getElementsByClassName('container');
    while(paras[0]){
        paras[0].parentNode.removeChild(paras[0]);
    }

    pageContent.innerHTML = `<div class="container">
        <div class="CenterDiv">
            <h1>${david}</h1>
            <h1>${dead}</h1>
            <h1>${jasen}</h1>
            <h1>${brian}</h1>
            <h1>${darwin}</h1>
        </div>
    </div>
    `;
    asContent.innerHTML = `<h1 class="container" style="color:red;"> ${allStatus}</h1>`;
    contentDiv.appendChild(pageContent);
    asDiv.appendChild(asContent);
}

function getAll(){
    getDave(buildPage, getJasen, getDead, getBrian, getDarwin, getStatus);
}

setInterval(getAll, 10000);

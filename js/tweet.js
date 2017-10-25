var alltweets = [
    {"name":"James Bond", "tweetContent":"Blabla bla..."},
    {"name":"Albert Einstein", "tweetContent":"Bond, James bond"},
    {"name":"Bill Gates", "tweetContent":"E=mc^2"},
    {"name":"James Bond", "tweetContent":"I think 64 bytes should be enough for everyone"},
    {"name":"Frodo", "tweetContent":"My Precious"}
];

function ready() {
    alltweets.forEach(displayTweet);
}
window.onload = ready;

function getTweet() {
    var tweet = document.getElementById("tweet-content").value;
    var newtweet = {"name":"roei" + " says:", "tweetContent":tweet};
    displayTweet(newtweet);
    alltweets.push(newtweet);
}

function displayTweet(newtweet) {
    var tweetBlock = createDiv("col-xs-12 tweet");
    var newDiv = document.getElementById("tweets-block").appendChild(tweetBlock);

    var avatarImg = createImg("pull-left avatar-icon", "img/useravatar.png");
    newDiv.appendChild(avatarImg);

    var name = createParagraph("authorName");
    name.innerHTML = newtweet.name.toString();
    newDiv.appendChild(name);
    var displaytweet = createSpan();
    displaytweet.innerHTML = newtweet.tweetContent.toString();
    newDiv.appendChild(displaytweet);
}


/* Image creation */
function createImg(className, src) {
    var img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("width", "48");
    img.setAttribute("height", "48");
    img.setAttribute("alt", "User Avatar");
    img.className = className;

    return img;
}

/* Div creation */
function createDiv(className) {
    var div = document.createElement("div");
    div.className = className;

    return div;
}

/* Paragraph creation */
function createParagraph(className) {
    var p = document.createElement("p");
    p.className = className;

    return p;
}
/* Span creation */
function createSpan() {
    var span = document.createElement("span");

    return span;
}

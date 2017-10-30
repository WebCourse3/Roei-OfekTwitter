var alltweets = [
    {"name":"James Bond", "tweetContent":"Blabla bla..."},
    {"name":"Albert Einstein", "tweetContent":"Bond, James bond"},
    {"name":"Bill Gates", "tweetContent":"E=mc^2"},
    {"name":"James Bond", "tweetContent":"I think 64 bytes should be enough for everyone"},
    {"name":"Frodo", "tweetContent":"My Precious"}
];

/* Display all tweets */
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

/* Display tweet block */
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

/* Paragraph creation */
function createParagraph(className) {
    var p = document.createElement("p");
    p.className = className;

    return p;
}


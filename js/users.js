var users = [
    {"name":"Marty McFly", "status":"follow"},
    {"name":"Janis Joplin", "status":"follow"},
    {"name":"Albert Einstien", "status":"follow"},
    {"name":"Genghis Khan", "status":"follow"},
    {"name":"Dracula", "status":"unfollow"},
    {"name":"Forest Gump", "status":"follow"},
    {"name":"Callgula", "status":"follow"},
    {"name":"Winnie Pooh", "status":"follow"},
    {"name":"Obama", "status":"follow"},
    {"name":"Henry the 8th", "status":"unfollow"}
];

function ready() {
    users.forEach(displayUser);
}
window.onload = ready;

function displayUser(newUser) {
    var leftBlock = document.getElementById("leftBlock");
    var usersBlock = createDiv("col-md-2 col-xs-6");
    var userBlock = createDiv("panel panel-default");
    var userBodyBlock = createDiv("panel-body text-center");
    var avatarImg = createImg("avatar-icon", "img/useravatar.png");
    var followButton = createButton(newUser);
    followButton.setAttribute("id", newUser.name.toString().replace(/\s/g,''));
    followButton.onclick = checkStatus;
    var name = createParagraph();
    name.innerHTML = newUser.name.toString();

    userBodyBlock.appendChild(avatarImg);
    userBodyBlock.appendChild(followButton);
    userBodyBlock.appendChild(name);
    userBlock.appendChild(userBodyBlock);
    usersBlock.appendChild(userBlock);
    leftBlock.appendChild(usersBlock);

    if (newUser.status.toString() == "unfollow") {
        followeesCreate(newUser);
    }
}

function followeesCreate(newUser) {
    var followeesBlock = document.getElementById("followees-block");
    var userBlock = createDiv("panel panel-default " + newUser.name.toString().replace(/\s/g,''));
    var userBodyBlock = createDiv("panel-body text-center");
    var avatarImg = createImg("avatar-icon", "img/useravatar.png");
    var followButton = createButton(newUser);
    followButton.onclick = checkStatus;
    var name = createParagraph();
    name.innerHTML = newUser.name.toString();

    userBodyBlock.appendChild(avatarImg);
    userBodyBlock.appendChild(followButton);
    userBodyBlock.appendChild(name);
    userBlock.appendChild(userBodyBlock);
    followeesBlock.appendChild(userBlock);
}

/* Paragraph creation */
function createParagraph() {
    var p = document.createElement("p");

    return p;
}

/* Button creation */
function createButton(newUser) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("name", newUser.name.toString());
    var text = document.createTextNode(newUser.status.toString());
    if (newUser.status.toString() == "follow") {
        btn.className = "btn btn-primary";
    } else {
        btn.className = "btn btn-danger";
    }
    btn.appendChild(text);
    return btn;
}

function checkStatus() {
    var btn = this;
    if (btn.innerHTML === "follow") {
        btn.className = "btn btn-danger";
        btn.innerHTML = "unfollow";
        var newFellow = {"name":this.name, "status":"unfollow"};
        followeesCreate(newFellow);
    } else {
        btn.className = "btn btn-primary";
        btn.innerHTML = "follow";
        var newFellow = {"name":this.name, "status":"follow"};
        DeleteFollow(newFellow);
    }
}

function DeleteFollow(newFellow) {
    var followees = document.getElementById("followees-block");
    var x = document.getElementsByClassName(newFellow.name.toString().replace(/\s/g,''));
    followees.removeChild(x[0]);
    var buttonFromAll = document.getElementById(newFellow.name.toString().replace(/\s/g,''));
    buttonFromAll.innerHTML = "follow";
    buttonFromAll.setAttribute("class","btn btn-primary");
}

function filter() {
    var input = document.getElementById("searchUserName");
    var filter = input.value.toUpperCase();
    var usersList = document.getElementById("leftBlock");
    var length = usersList.childElementCount;
    for (i=0; i<length; i++) {
        usersList.childNodes = userList[0].getElementsByTagName(usersList.childNodes)[0];
        if (usersList.childNodes) {
            if (usersList.childNodes.innerHTML.toUpperCase().indexOf(filter) > -1) {
                userList[i].style.display = "";
            } else {
                userList[i].style.display = "none";
            }
        }
    }
}

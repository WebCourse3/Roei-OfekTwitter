/* Image creation. */
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

/* Span creation */
function createSpan() {
    var span = document.createElement("span");

    return span;
}

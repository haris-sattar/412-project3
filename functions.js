function light_mode() {
    var links = document.getElementsByClassName("page_style");
    for (var i = 0; i < links.length; ++i) {
        links[i].setAttribute("href", "./light.css");
    }
}
function dark_mode() {
    var links = document.getElementsByClassName("page_style");
    for (var i = 0; i < links.length; ++i) {
        links[i].setAttribute("href", "./dark.css");
    }
}

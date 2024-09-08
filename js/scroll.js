let bottomOfPage = false;

window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
        var body = document.body,
        html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        if(window.scrollY + window.innerHeight >= height -200) {
            if(bottomOfPage === false) {
                document.documentElement.classList.toggle("bottom");
                bottomOfPage = true;
            }
        } else {
            if(bottomOfPage === true) {
                document.documentElement.classList.toggle("bottom");
                bottomOfPage = false;
            }
        }
    })
});
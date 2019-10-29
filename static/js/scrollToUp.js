const btn = document.querySelector("#btnScrollToTop");

btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
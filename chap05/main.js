window.onload = function() {
    const moreBtn = document.querySelector(".info .metadata .moreBtn");
    const title = document.querySelector(".info .metadata .title");
    const service = document.querySelector(".service");
    const errorDiv = document.querySelector(".errorDiv");

    if (window.innerWidth >= 1000) {
        service.style.display = 'none';
        errorDiv.style.display = 'block';
    } else {

        service.style.display = 'block';
        errorDiv.style.display = 'none';
    }
    window.onresize = function(e) {
        if (window.innerWidth >= 1000) {
            service.style.display = 'none';
            errorDiv.style.display = 'block';
        } else {

            service.style.display = 'block';
            errorDiv.style.display = 'none';
        }
    }
    moreBtn.addEventListener('click', () => {
        moreBtn.classList.toggle("clicked");
        title.classList.toggle("clamp");
    })


}
// update message in 4s after opening
const updateBannerCont = document.querySelector("[data-update]")
// const updateBannerContNoIN = document.querySelector("[data-update-o]")
const closeUpdateBanner = document.querySelector("[data-close-update]")
// const closeUpdateBannerIn = document.querySelector("[data-close-update-o]")

function updateBanner(){
        updateBannerCont.classList.add("active");
}
function updateBannerClose(){
        updateBannerCont.classList.remove("active");
        setTimeout(() =>{
            updateBannerCont.remove()
        }, 300)
}

setInterval(updateBanner, 3000)
setTimeout(updateBannerClose, 17000)

closeUpdateBanner.addEventListener("click", function() {
    updateBannerCont.classList.remove("active")
    setTimeout(() =>{
        updateBannerCont.remove();
    }, 300)
})

// =============================

// End
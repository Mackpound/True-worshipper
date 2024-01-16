'use strict';
// for menu bar translate down as a drop down menu
const menuBar = document.querySelector("[data-menu]")
      menuBar.addEventListener("click", () => {
        const menuCont = document.querySelector("[data-menu-container]")
              menuCont.classList.add("active");
        const body = document.querySelector("body");
              body.style.overflow = "hidden";
              menuBar.style.opacity = "0";
      })

// for ending menu bar.. drop up menu bar
const closeMenuBar = document.querySelector("[data-close-menu]")
      closeMenuBar.addEventListener("click", () => {
        const menuCont = document.querySelector("[data-menu-container]")
        menuCont.classList.remove("active");
        const body = document.querySelector("body");
                body.style.overflow = "auto";
                menuBar.style.opacity = "1";
      })

//  for mouseovering? display the menu-nav-list to none
function mouseOver(){
    const minWidth = window.innerWidth;
    const menuGlobalOver = document.querySelector("[data-menu-global]")
    const navList = document.querySelector("[data-nav-list]")
    const roomCont = document.querySelector("[data-room]")
           if(minWidth < 998){
                  menuGlobalOver.addEventListener("mouseover", () =>{
                        roomCont.style.opacity = "1";
                        navList.style.opacity = "0";
                        menuGlobalOver.parentElement.style.borderBottom = "0";
                  })
                  menuGlobalOver.addEventListener("mouseout", () => {
                             roomCont.style.opacity = "1";
                              navList.style.opacity = "1";
                              menuGlobalOver.parentElement.style.borderBottom = "2px solid var(--light-white)";
                  })
   }
    if(minWidth > 998){
                menuGlobalOver.addEventListener("mouseover", () => {
                          roomCont.style.opacity = "0";
                            navList.style.opacity = "0";
                            menuGlobalOver.parentElement.style.borderBottom = "0";
                })
                menuGlobalOver.addEventListener("mouseout", () => {
                        roomCont.style.opacity = "1";
                        navList.style.opacity = "1";
                        menuGlobalOver.parentElement.style.borderBottom = "2px solid var(--light-white)";
                })
   }
}

// window on resize, change set of mouseover

document.onload = mouseOver;
window.onresize = mouseOver;
window.onload = mouseOver;

// on scroll, disable the logo text bar for mininum obstruction

window.addEventListener("scroll", function() {
    let logoText = document.querySelector("[data-logo-text]")
    let logoGlobalText = document.querySelector("[data-global]")
    let logoSection = document.querySelector("[data-logo-section]")
    let navUl = document.querySelector("[data-ul-main]")
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                logoText.classList.add("active");
                logoGlobalText.classList.add("active");
                logoSection.classList.add("active")
                navUl.classList.add("active")
        }else{
                logoText.classList.remove("active");
                logoGlobalText.classList.remove("active");
                logoSection.classList.remove("active")
                navUl.classList.remove("active")
        }
})

// update message in 4s after opening
const updateBannerCont = document.querySelector("[data-update]")
const closeUpdateBanner = document.querySelector("[data-close-update]")

function updateBanner(){
        updateBannerCont.classList.add("active");
}

setInterval(updateBanner, 4000)

    closeUpdateBanner.addEventListener("click", function() {
        updateBannerCont.classList.remove("active")
        setTimeout(() =>{
            updateBannerCont.remove();
        }, 300)
    })

// on hover in worshp 
const dataClin = document.querySelector("[data-clin1]")
const dataClin2 = document.querySelector("[data-clin2]")
const dataClin3 = document.querySelector("[data-clin3]")
const dataClin4 = document.querySelector("[data-clin4]")
const dataDisplayWorship = document.querySelector("[data-display-worship]")
        dataClin.addEventListener("mouseover", function(){
            dataDisplayWorship.classList.add("clin1");
        })
        dataClin.addEventListener("mouseout", function(){
            dataDisplayWorship.classList.remove("clin1");
        })
        // dataClin2
        dataClin2.addEventListener("mouseover", function(){
            dataDisplayWorship.classList.add("clin2");
        })
        dataClin2.addEventListener("mouseout", function(){
            dataDisplayWorship.classList.remove("clin2");
        })
        // dataClin3
        dataClin3.addEventListener("mouseover", function(){
            dataDisplayWorship.classList.add("clin3");
        })
        dataClin3.addEventListener("mouseout", function(){
            dataDisplayWorship.classList.remove("clin3");
        })
        // dataClin4
        dataClin4.addEventListener("mouseover", function(){
            dataDisplayWorship.classList.add("clin4");
        })
        dataClin4.addEventListener("mouseout", function(){
            dataDisplayWorship.classList.remove("clin4");
        })


        // // scrolling with btn on #FIND YOUR PLACE AT TRUE WORSHIPPER CHURCH
        // const slideLeft = document.querySelector("[btn-scrollLeft]")
        // const slideRight = document.querySelector("[btn-scrollRight]")
        // // const mandatoryScroll = document.querySelector("[data-mandatory-scroll]")

        // slideLeft.onclick = function(){
        //     document.querySelector("[data-mandatory-scroll]").scrollLeft += 50;
        // }
        // slideRight.onclick = function(){
        //     document.querySelector("[data-mandatory-scroll]").scrollLeft -= 50;
        // }
        const scroollbar = document.querySelector("#scroll-div")
        var buttonR = document.querySelector('#next');
        var buttonL = document.querySelector('#prev');
            buttonR.onclick = function(){
                // scroollbar = function(){
                //    scroollbar.style.transform = `transLateX(-20%)`;
                //    s--;
                }
            buttonL.onclick = function(){
                // scroollbar = function(){
                   let n = scroollbar.scrollLeft = 50;
                   n++;
                }
                    
                // }
           



        // buttons.forEach(btn => {
        // btn.addEventListener("click", function(){
        // // var id = button.attr('id');
        // // if(id=="next"){
        //     console.log("r")
        // // $('#scroll-div').stop().animate({scrollRight:40},400,'swing',function(){
        // //     $(this).scrollRight(0).find('div:last').after($('div:first', this));
        // //   });
        // // }
        // // else {
        // // $('#scroll-div').stop().animate({scrollLeft:40},400,'swing',function(){
        // //    $(this).scrollLeft(40).find(' div:first').before($(' div:last', this));
        // //   });
        // // }
        // })
        // })
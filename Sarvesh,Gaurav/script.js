








// === menu-btn ===

let menuBtn = document.getElementsByClassName('menu-btn')[0]
let menuItem = document.getElementsByClassName("nav")[0]

menuBtn.addEventListener("click", function () {

    console.log('clicked');
    if (menuItem.style.height == "0px") {
        menuItem.style.height = "300px"
    }
    else {
        menuItem.style.height = "0px"
    }
})




// menuItem.classList.toggle("height")

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

window.onscroll = function () {
    if (count1 == 0 && count2 == 0 && count3 == 0 && count4 == 0 && document.documentElement.scrollTop >= 2100) {

        let counter = document.getElementsByClassName("count")



        let counter1 = setInterval(function () {
            count1++
            counter[0].innerHTML = count1

            if (count1 == 25) {
                clearInterval(counter1)
            }
        }, 200)

        let counter2 = setInterval(function () {
            count2++
            counter[1].innerHTML = count2

            if (count2 == 350) {
                clearInterval(counter2)
            }
        }, 14)


        let counter3 = setInterval(function () {
            count3 += 5
            counter[2].innerHTML = count3

            if (count3 == 1500) {
                clearInterval(counter3)
            }
        }, 16)


        let counter4 = setInterval(function () {
            count4 += 10
            counter[3].innerHTML = count4

            if (count4 == 5000) {
                clearInterval(counter4)
            }
        }, 10)

    }

    if (document.documentElement.scrollTop >= 100) {
        document.getElementsByTagName("nav")[0].style.position = "fixed"
        document.getElementsByTagName("nav")[0].style.width = "100%"

        document.getElementsByTagName("nav")[0].style.top = "0"
        document.getElementsByTagName("nav")[0].style.zIndex = "20"
    }
    else {
        document.getElementsByTagName("nav")[0].style.position = ""

    }
}


document.getElementsByClassName("top")[0].addEventListener("click", function () {
    window.scrollTo(0, 0)
})


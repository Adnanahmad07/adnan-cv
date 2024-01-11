$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });


    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coder", "Developer", "Programmer", "UI Desing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Coder", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });






    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});








// 1 project code
document.getElementById("opanarrow1").onclick = () => {

    document.getElementById("imginfo").style.right = "0px";

    document.getElementById("closecross1").style.opacity = "1";

    document.getElementById("opanarrow1").style.opacity = "0";


}

document.getElementById("closecross1").onclick = () => {

    document.getElementById("imginfo").style.right = "-90%";

    document.getElementById("closecross1").style.opacity = "0";

    document.getElementById("opanarrow1").style.opacity = "1";
}



// 2 project code
document.getElementById("opanarrow2").onclick = () => {

    document.getElementById("imginfo2").style.right = "0px";

    document.getElementById("closecross2").style.opacity = "1";

    document.getElementById("opanarrow2").style.opacity = "0";


}

document.getElementById("closecross2").onclick = () => {

    document.getElementById("imginfo2").style.right = "-90%";

    document.getElementById("closecross2").style.opacity = "0";

    document.getElementById("opanarrow2").style.opacity = "1";
}



// 3 project code
document.getElementById("opanarrow3").onclick = () => {

    document.getElementById("imginfo3").style.right = "0px";

    document.getElementById("closecross3").style.opacity = "1";

    document.getElementById("opanarrow3").style.opacity = "0";


}

document.getElementById("closecross3").onclick = () => {

    document.getElementById("imginfo3").style.right = "-90%";

    document.getElementById("closecross3").style.opacity = "0";

    document.getElementById("opanarrow3").style.opacity = "1";
}





// 4 project code
document.getElementById("opanarrow4").onclick = () => {

    document.getElementById("imginfo4").style.right = "0px";

    document.getElementById("closecross4").style.opacity = "1";

    document.getElementById("opanarrow4").style.opacity = "0";


}

document.getElementById("closecross4").onclick = () => {

    document.getElementById("imginfo4").style.right = "-90%";

    document.getElementById("closecross4").style.opacity = "0";

    document.getElementById("opanarrow4").style.opacity = "1";
}




// 5 project code
document.getElementById("opanarrow5").onclick = () => {

    document.getElementById("imginfo5").style.right = "0px";

    document.getElementById("closecross5").style.opacity = "1";

    document.getElementById("opanarrow5").style.opacity = "0";


}

document.getElementById("closecross5").onclick = () => {

    document.getElementById("imginfo5").style.right = "-90%";

    document.getElementById("closecross5").style.opacity = "0";

    document.getElementById("opanarrow5").style.opacity = "1";
}






document.getElementById("opanarrow6").onclick = () => {

    document.getElementById("imginfo6").style.right = "0px";

    document.getElementById("closecross6").style.opacity = "1";

    document.getElementById("opanarrow6").style.opacity = "0";


}

document.getElementById("closecross6").onclick = () => {

    document.getElementById("imginfo6").style.right = "-90%";

    document.getElementById("closecross6").style.opacity = "0";

    document.getElementById("opanarrow6").style.opacity = "1";
}





let sections = document.querySelectorAll('section');


console.log(sections);
console.log(typeof sections);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;

        if (top >= offset && top < offset + hight) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');

        }

    })
}





setTimeout(() => {
    document.getElementById("sidebarmenu").style.left = "20px";
}, 4000)



document.getElementById("se-opan-btn").onclick = () => {
    let menu = document.getElementById("sidebarmenu");
    menu.style.left = "20px";
}

document.getElementById("closebtn").onclick = () => {
    let menu = document.getElementById("sidebarmenu");
    menu.style.left = "-2000px";
}

















// background change (a image slidder)


var f = 0;
var slidImage = [];
var slidTime = 3000;


slidImage[0] = 'slid/4.jpg';
slidImage[1] = 'slid/2.jpg';
slidImage[2] = 'slid/3.jpg';
slidImage[3] = 'slid/1.jpg';


function Changebackground() {
    document.imgslide.src = slidImage[f];

    if (f < slidImage.length - 1) {
        f++;
    } else {
        f = 0;
    }

    setTimeout(Changebackground, slidTime);

}
window.onload = Changebackground;




// auto mate see description 

let cal = document.getElementById("calculator");
let oncalculator = false;
cal.addEventListener('mouseenter', () => {
    if (!oncalculator) {
        document.getElementById("imginfo").style.right = "0px";

        document.getElementById("closecross1").style.opacity = "1";

        document.getElementById("opanarrow1").style.opacity = "0";

        oncalculator = true;
    }
})





let dashbord = document.getElementById("deashbord");
let ondeashbord = false;

dashbord.addEventListener('mouseenter', () => {
    if (!ondeashbord) {
        document.getElementById("imginfo2").style.right = "0px";

        document.getElementById("closecross2").style.opacity = "1";

        document.getElementById("opanarrow2").style.opacity = "0";

        ondeashbord = true;
    }
})





let freshmeal = document.getElementById("freshmeal");
let onfreshmeal = false;

freshmeal.addEventListener('mouseenter', () => {
    if (!onfreshmeal) {
        document.getElementById("imginfo3").style.right = "0px";

        document.getElementById("closecross3").style.opacity = "1";

        document.getElementById("opanarrow3").style.opacity = "0";

        onfreshmeal = true;
    }
})




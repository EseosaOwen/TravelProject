
//==== Toogle for my Navigation
// Bars toogle
let $ = x => document.querySelector(x), nav = $(".nav-section"), icon = $(".top-icon");
let $$ = x => document.querySelector(x), nav2 = $(".nav-section"), icon2 = $(".top-sec");
icon.addEventListener("click", e => {
    nav.classList.toggle("active");
    icon2.style.scale = "1";
})

// Times toogle
icon2.addEventListener("click", e => {
    nav.classList.toggle("active");
    icon2.style.scale = "0";
})

// // if you set top, left, right, bottom to 0 that particular element will cover the whole screen
// // pointer events: all; is good when you dont want any clicks, this is perfect for my pop up login page, so when the login button is clicked then we want the overlay to cover the background and we should not be able to click anything outside the pop up login page 
// // Also for the display of the login pop up i set a class called active, also for the overlay, this is done because of my java script, anyway if i dont want an image to show its best to use scale and set the scale to 0



// ///////////////////////// eedProject second page ///////////////////////////
// //  let desImage1 = document.querySelector("#des-img1"); let desImage2 = document.querySelector("#des-img2"); let desImage3 = document.querySelector("#des-img3"); let desImage4 = document.querySelector("#des-img4"); let  desImage5 = document.querySelector("#des-img5"); let desImage6 = document.querySelector("#des-img6")


// listOfPlaces = ["maldives", "venice", "new york", "macchu picchu", "paris", "rome"]

// searchBox.addEventListener("input", (e) => {
//     console.log("1")
//     let searchBtn = document.querySelector(".search-btn");
//     searchBtn.addEventListener("click", () => {
//     listOfPlaces.forEach(place => {
//         if(e.toLowerCase == listOfPlaces[0]){
//             window.location.href = "backup_travel.html";
//         }
//         else if(e.toLowerCase = listOfPlaces[1]){
//             window.location.href = "backup_travel2.html";
//         }
//         else if(e.toLowerCase == listOfPlaces[2]){
//             window.location.href = "basic_web3.html";
//         }
//         else if(e.toLowerCase == listOfPlaces[3]){
//             window.location.href = "basic_web2.html";
//         }
//         else if(e.toLowerCase == listOfPlaces[4]){
//             window.location.href = "basic_web.html";
//         }
//         else if(e.toLowerCase == listOfPlaces[5]){
//             window.location.href = "backup_travel.html";
//         }
        
//     })
// })
// })



// // my current issue is that i have been able to create a button that will allow me to go to the sign up modal, and when i close the sign up modal and come back it should be reverted back to the login modal, the issue now is when i do that i am not able to click the sign up button again

// // I solved the issue by removing the button from the element/div that i was manipulating, so i said anytime click on the button and then it takes me to the sign up page the "Do you want to sign Up?" should be set to scale 0, but when the cancel or overlay is clicked the scale should be set back to 1;


let moveBack = document.querySelector(".scroll-top");
// $(window).scroll(() => {
//     if($(window).scrollTop() + window.height() > $(document).height() - 100){
//         moveBack.classList.add("active");
//     };  
// });

window.addEventListener("scroll", () => {
    // this is saying that the page has scrolled 100% from the top
    if(window.pageYOffset > 100){
        moveBack.classList.add("active");
    }

    else{
        moveBack.classList.remove("active");
    }
});

let angleDown1 = document.querySelectorAll(".asked-angle-downs1");
let askedQuest = document.querySelector("#quest1");
angleDown1.forEach(angle => {
    angle.addEventListener("click", () => {
        let contents = document.querySelector(".asked-contents1");
        // let angleUp4 = document.querySelector(".asked-angle-up4");
            contents.classList.toggle("active");
            angleUp1.classList.add("active")
            askedQuest.style.color = "red";
    })
});
let angleDown2 = document.querySelectorAll(".asked-angle-downs2");
angleDown2.forEach(angle => {
    angle.addEventListener("click", () => {
        let contents = document.querySelector(".asked-contents2");
        // let angleUp4 = document.querySelector(".asked-angle-up2");
            contents.classList.toggle("active");
    })
});

let angleDown3 = document.querySelectorAll(".asked-angle-downs3");
angleDown3.forEach(angle => {
    angle.addEventListener("click", () => {
        let contents = document.querySelector(".asked-contents3");
        // let angleUp4 = document.querySelector(".asked-angle-up3");
            contents.classList.toggle("active");
            // angleUp4.classList.add("active");
    })
});

let angleDown4 = document.querySelectorAll(".asked-angle-downs4");
angleDown4.forEach(angle => {
    angle.addEventListener("click", () => {
        let contents = document.querySelector(".asked-contents4");
        // let angleUp4 = document.querySelector(".asked-angle-up4");
            contents.classList.toggle("active");
            // angleUp4.classList.add("active");
    })
});
// let content1 = document.querySelectorAll(".asked-content1");
// let content2 = document.querySelectorAll(".asked-content2");
// let content3 = document.querySelectorAll(".asked-content3");
// let content4 = document.querySelectorAll(".asked-content4");
// let contents = [content1, content2, content3, content4]

// Contact Page Submit Button

let formPage = document.querySelector(".form");
formPage.addEventListener("submit", (e) => {
    e.preventDefault();
    window.alert("Message has been sent")
})


//  Current issues
// The current issue on the nav passing through the image
// When i click on the password hide and show it only works once
// And how to make my modal have a scroll bar
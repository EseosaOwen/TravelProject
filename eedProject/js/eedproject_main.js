
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

// if you set top, left, right, bottom to 0 that particular element will cover the whole screen
// pointer events: all; is good when you dont want any clicks, this is perfect for my pop up login page, so when the login button is clicked then we want the overlay to cover the background and we should not be able to click anything outside the pop up login page 
// Also for the display of the login pop up i set a class called active, also for the overlay, this is done because of my java script, anyway if i dont want an image to show its best to use scale and set the scale to 0

let openLoginButtons = document.querySelectorAll("[data-modal-target]")
let closeLoginButtons = document.querySelectorAll("[data-close-button]")
let overlay = document.getElementById("overlay");
let swap = document.querySelector(".login-signup");
let originalLogin = swap.innerHTML


// ===for my login display to show
openLoginButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("yowa");
        let login = document.querySelector(".login")
        openLogin(login)
    })
})

// ===for my login display to disappear/close
closeLoginButtons.forEach(button => {
    button.addEventListener("click", () => {
        let login = button.closest(".login")
        closeLogin(login)
        // Changing the innerHTML back to it old state before the sign-upBtn was clicked 
        swap.innerHTML = originalLogin
        // making the sign-entry button visibke again since it was set to 0 before
        signEntry.style.scale = "1";
        // Changing the headchoice back to login since it was changed to sign up
        headChoice.innerText = "Login";
        // Setting the response for the login back to an empty string
        response.innerHTML = "";
    })
})

// ===for the overlay to permit closing of the login Page
overlay.addEventListener("click", function(){
    let login = document.querySelector(".login")
    closeLogin(login)
    // Changing the innerHTML back to it old state before the sign-upBtn was clicked 
    swap.innerHTML = originalLogin
    // making the sign-entry button visibke again since it was set to 0 before
    signEntry.style.scale = "1";
    // Changing the headchoice back to login since it was changed to sign up
    headChoice.innerText = "Login";
    // Setting the response for the login back to an empty string
    response.innerHTML = "";

})


// ===Function that makes the login page visible
function openLogin(login){
    // if for any reason the login page gets called without a modal(click)
    if(login == null) return 
    // This classList.add adds to a class, that if the button is clicked and then it runs this function the active class which we created should be added to the list
    login.classList.add("active");
    // we are also adding for our overlay meaning that any time we clicked the button we also want our overlay to be open
    overlay.classList.add("active");
}

// ===function that makes it non-visible
function closeLogin(login){
    // if for any reason the login page gets called without a modal(click)
    if(login == null) return 
    // This classList.remove removes to a class, that if the close button is clicked and then it runs this function the active class which we created should be removes from the list
    login.classList.remove("active");
    // we are also removing for our overlay meaning that any time we clicked the button we also want our overlay to be removed
    overlay.classList.remove("active"); z
}

let signEntry = document.querySelector(".signup-btn-entry");
let headChoice = document.querySelector(".head-choice");
// ==== Swapping the login to a sign up modal when clicked
signEntry.addEventListener("click", () => {
    headChoice.innerText = "Register"
    swap.innerHTML = `<form action="" class="form-login2">
                <div class="login-body">
                    <input type="text" class="username-box" placeholder="Username" required>
                    <input type="email" class="email-box" placeholder="Email" required>
                    <div class="pass-eye">
                    <div class="passwordMainBox">
                        <input type="password" class="password-box" placeholder="Password" required>
                    </div>
                    <div class="svg-pass">
                        <i class="fa-regular fa-eye-slash pass-slash"></i>
                    </div>
                </div>
                </div>
                    <button class="login-btn" type="submit">Register</button>
                </form>`
                
    // Changing the scale of the sign up btn to 0 so that it wont be saying "Dont have an account? Sign up" even when the user is already of the sign up page.
    signEntry.style.scale = "0";

    // ====Validating the sign Up Page
    let formBtn2 = document.querySelector(".form-login2");
    formBtn2.addEventListener("submit", (e) => {
        console.log("i am king")
        e.preventDefault();
        let UsernameBox = document.querySelector(".username-box").value.toLowerCase;
        let emailBox = document.querySelector(".email-box").value.toLowerCase;
        let passwordBox = document.querySelector(".password-box").value;
        if(passwordBox.length === 6){
            response.innerHTML = `<div class="success">Sign Up Successful. Please wait...</div>`
            let userDetails = {
                username: UsernameBox,
                email: emailBox,
                password: passwordBox,
                }

                let saveDetails = localStorage.setItem("user", JSON.stringify(userDetails));
                window.setTimeout( () => {
                    window.location.href = "eedrift2_project.html"
                }, 2000)
        }
        else{
            response.innerHTML = `<div class="error">Password must 6 characters</div>`
        }
    })
    })

        
//==== The Login validation
let validUsername = "owen@gmail.com";
let validPassword = "Owen123";
let response = document.querySelector(".response");
let formBtn = document.querySelector(".form-login");
formBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailBox = document.querySelector(".email-box").value;
    let password = document.querySelector(".password-box").value;
    console.log(password);
    console.log(emailBox)
    if(emailBox == validUsername && password == validPassword ){
        response.innerHTML = `<div class="success">Login Successful. Please wait...</div>`
        window.setTimeout( () => {
            window.location.href = "eedrift2_project.html"
        }, 2000)
    }
    else{
        response.innerHTML = `<div class="error">Invalid Password or Email</div>`
    }
})


// my current issue is that i have been able to create a button that will allow me to go to the sign up modal, and when i close the sign up modal and come back it should be reverted back to the login modal, the issue now is when i do that i am not able to click the sign up button again

// I solved the issue by removing the button from the element/div that i was manipulating, so i said anytime click on the button and then it takes me to the sign up page the "Do you want to sign Up?" should be set to scale 0, but when the cancel or overlay is clicked the scale should be set back to 1;


let moveBack = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    // this is saying that the page has scrolled 100% from the top
    if(window.pageYOffset > 100){
        moveBack.classList.add("active");
    }

    else{
        moveBack.classList.remove("active");
    }
});

// toogle asked Questions
let angleBottom1 = document.querySelector(".asked-angle-down1");
let angleBottom2 = document.querySelector(".asked-angle-down2");
let angleBottom3 = document.querySelector(".asked-angle-down3");
let angleBottom4 = document.querySelector(".asked-angle-down4");

let angleTop1 = document.querySelector(".asked-angle-up1");
let angleTop2 = document.querySelector(".asked-angle-up2");
let angleTop3 = document.querySelector(".asked-angle-up3");
let angleTop4 = document.querySelector(".asked-angle-up4");

let askedQuest = document.querySelector("#quest1");
angleBottom1.addEventListener("click", () => {
    let contents = document.querySelector(".asked-content1");
    const quest1 = document.querySelector(".quest1");
    contents.classList.toggle("active");
    angleTop1.classList.add("active");
    angleBottom1.classList.remove("active");
})

angleBottom2.addEventListener("click", () => {
    let contents = document.querySelector(".asked-content2");
    contents.classList.toggle("active");
    angleTop2.classList.add("active");
    angleBottom2.classList.remove("active");
})

angleBottom3.addEventListener("click", () => {
    let contents = document.querySelector(".asked-content3");
    contents.classList.toggle("active");
    angleTop3.classList.add("active");
    angleBottom3.classList.remove("active");
})

angleBottom4.addEventListener("click", () => {
    let contents = document.querySelector(".asked-content4");
    contents.classList.toggle("active");
    angleTop4.classList.add("active");
    angleBottom4.classList.remove("active");
})

angleTop1.addEventListener("click", () => {
    let contents = document.querySelector(".asked-content1");
    contents.classList.toggle("active");
    angleBottom1.classList.add("active");
    angleTop1.classList.remove("active");
})

angleTop2.addEventListener("click", () => {
    let contents = document.querySelector(".asked-content2");
    const quest2 = document.querySelector(".quest2");
    contents.classList.toggle("active");
    angleBottom2.classList.add("active");
    angleTop2.classList.remove("active");
})

angleTop3.addEventListener("click", () => {
    let contents = document.querySelector(".asked-content3");
    const quest3 = document.querySelector(".quest3");
    contents.classList.toggle("active");
    angleBottom3.classList.add("active");
    angleTop3.classList.remove("active");
})

angleTop4.addEventListener("click", () => {
    let contents = document.querySelector(".asked-content4");
    const quest4 = document.querySelector(".quest4");
    contents.classList.toggle("active");
    angleBottom4.classList.add("active");
    angleTop4.classList.remove("active");
})

// angleDown1.addEventListener("click", () => {

//         let angleUp1 = document.querySelector(".asked-angle-up1");
//         // let angleUp4 = document.querySelector(".asked-angle-up4");
//             
//             angleUp1.classList.add("active");
//             angle.classList.remove("active");
//             askedQuest.style.color = "red";
//     })


// let angleDown2 = document.querySelectorAll(".asked-angle-down2");
// angleDown2.forEach(angle => {
//     angle.addEventListener("click", () => {
//         let contents = document.querySelector(".asked-content2");
//         // let angleUp4 = document.querySelector(".asked-angle-up2");
//             contents.classList.toggle("active");
//     })
// });

// let angleDown3 = document.querySelectorAll(".asked-angle-down3");
// angleDown3.forEach(angle => {
//     angle.addEventListener("click", () => {
//         let contents = document.querySelector(".asked-content3");
//         // let angleUp4 = document.querySelector(".asked-angle-up3");
//             contents.classList.toggle("active");
//             // angleUp4.classList.add("active");
//     })
// });

// let angleDown4 = document.querySelectorAll(".asked-angle-down4");
// angleDown4.forEach(angle => {
//     angle.addEventListener("click", () => {
//         let contents = document.querySelector(".asked-content4");
//         // let angleUp4 = document.querySelector(".asked-angle-up4");
//             contents.classList.toggle("active");
//             // angleUp4.classList.add("active");
//     })
// });

// let angleUp1 = document.querySelector(".asked-angle-up1");
// angleUp1.forEach(angle => {
//     angle.addEventListener("click", () => {
//         let contents = document.querySelector(".asked-content1");
//         // let angleUp4 = document.querySelector(".asked-angle-up4");
//             contents.classList.remove("active");
//             angle.classList.remove("active");
//             // angleDown1.classList.add("active");
//             askedQuest.style.color = "red";
//     })
// });

// let angleUp2 = document.querySelectorAll(".asked-angle-up2");
// angleUp2.forEach(angle => {
//     angle.addEventListener("click", () => {
//         let contents = document.querySelector(".asked-content2");
//         // let angleUp4 = document.querySelector(".asked-angle-up2");
//             contents.classList.toggle("active");
//     })
// });

// let angleUp3 = document.querySelectorAll(".asked-angle-up3");
// angleUp3.forEach(angle => {
//     angle.addEventListener("click", () => {
//         let contents = document.querySelector(".asked-content3");
//         // let angleUp4 = document.querySelector(".asked-angle-up3");
//             contents.classList.toggle("active");
//             // angleUp4.classList.add("active");
//     })
// });

// let angleUp4 = document.querySelectorAll(".asked-angle-up4");
// angleUp4.forEach(angle => {
//     angle.addEventListener("click", () => {
//         let contents = document.querySelector(".asked-content4");
//         // let angleUp4 = document.querySelector(".asked-angle-up4");
//             contents.classList.toggle("active");
//             // angleUp4.classList.add("active");
//     })
// });


// ====== Toggling the password box from type of password to type of text

const svgPass = document.querySelector(".svg-pass");
svgPass.addEventListener("click", () => {
    const passBox = document.querySelector(".password-box");
    if(passBox.getAttribute("type") === "password"){
        passBox.type = "text";
    }
    else{
        passBox.type = "password";
    }
})


// //////////////// QUESTION I MUST GET ANSWERED
// Why is it that any click, which alters an element, i do within the login/signup modal works just once, when i close and come back it doesnt work for the second time
// For example my view password text toggle
//  i need to find a way to make the code shorter

const elon = 200000000000;
const day = 1000000;
const year = day * 365;
const bankrupt = 257 * year
console.log(bankrupt) 
if(93805000000 > elon){
    console.log("I am greater")
}
else{
    console.log("Elon is greater")
}




function loadi() {

reload.style.display="none";

}



document.getElementById("cross").addEventListener("click", () => {

    first.classList.toggle("toogle")
    first.classList.toggle("pebo")
    cross.classList.add("icon-sphere")
    cross.classList.toggle("icon-cross")
    moveyl.classList.toggle("Whuy")
    moveyl.classList.remove("lelo")

})

var zed;
var zoe;
var joy;



async function category() {

    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    let responsive = await api.json()

    zed = responsive
    console.log(zed.categories);
    display()
    loadi()
}
category()

function display() {


    let temp = ``

    for (let i = 0; i < zed.categories.length; i++) {
        temp += `

<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">

<div class="boxico">

<img src="${zed.categories[i].strCategoryThumb}" class="w-100 rounded" alt="">

<div class="tran seso">

<h3 class="text-dark">${zed.categories[i].strCategory}</h3>
<p class="text-dark">${zed.categories[i].strCategoryDescription.split(" ").slice(0,19).join(" ")}</p>

</div>



</div>
</div>`

    }

    document.getElementById("categories").innerHTML = temp

}




async function area() {

    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

    let responsive = await api.json()

    zoe = responsive
    console.log(zoe.meals);
    displayarea()
    loadi()
}
area()

function displayarea() {


    let temp = ``

    for (let i = 0; i < zoe.meals.length; i++) {
        temp += `

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4 text-center hello">


        <span class="icon-home mx-auto house"></span>
        
        <h3 class="text-white">${zoe.meals[i].strArea}</h3>
        
        
        </div>`

    }

    document.getElementById("area").innerHTML = temp

}





async function Ingredients() {

    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)

    let responsive = await api.json()
    responsive = responsive.meals.slice(0,20)
    joy = responsive
    console.log(joy);
    displayIngredients()
    loadi()
}
Ingredients()

function displayIngredients() {


    let temp = ``

    for (let i = 0; i < joy.length; i++) {
        temp += `

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4 text-center hello">
    
    
        <span class="icon-download2 mx-auto house"></span>
        
        <h3 class="text-white">${joy[i].strIngredient}</h3>
    
        <p>${joy[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
        
        
        </div>
        
        `

    }

    document.getElementById("Ingredients").innerHTML = temp

}

























//      bettweeeeeeen pages      //


document.getElementById("li1").addEventListener("click", () => {
    loadi()
sec1.style.display = "block"
sec2.style.display = "none"
sec3.style.display = "none"
sec4.style.display = "none"
sec5.style.display = "none"
sec7.style.display = "none"

})

document.getElementById("li2").addEventListener("click", () => {

sec1.style.display = "none"
sec2.style.display = "block"
sec3.style.display = "none"
sec4.style.display = "none"
sec5.style.display = "none"
sec7.style.display = "none"

})

document.getElementById("li3").addEventListener("click", () => {

sec1.style.display = "none"
sec2.style.display = "none"
sec3.style.display = "block"
sec4.style.display = "none"
sec5.style.display = "none"
sec7.style.display = "none"

})

document.getElementById("li4").addEventListener("click", () => {

sec1.style.display = "none"
sec2.style.display = "none"
sec3.style.display = "none"
sec4.style.display = "block"
sec5.style.display = "none"
sec7.style.display = "none"

})


document.getElementById("li5").addEventListener("click", () => {

sec1.style.display = "none"
sec2.style.display = "none"
sec3.style.display = "none"
sec4.style.display = "none"
sec5.style.display = "flex"
sec7.style.display = "none"

})


$(document).ready(() => {
    searchByName("").then(() => {
        $(".loading-screen").fadeOut(500)
        $("body").css("overflow", "visible")

    })
})
let dates = document.getElementById("dates");
function closeSideNav() {
    let boxWidth = $(".side-nav-menu .nav-tab").outerWidth()
    $(".side-nav-menu").animate({
        left: -boxWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
    loadi()
}
function displayMeals(oml) {
    let tools = "";

    for (let i = 0; i < oml.length; i++) {
        tools += `
        <div class="col-md-3 mb-4">
                <div onclick="getMealDetails('${oml[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer boxico">
                    <img class="w-100" src="${oml[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 tran">
                        <h3>${oml[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }
    
    dates.innerHTML = tools
    owner.innerHTML = tools
    loadi()
}
async function searchByName(quo) {
    closeSideNav()
    dates.innerHTML = ""


    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quo}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])

    loadi()
}
async function searchByFLetter(quo) {
    closeSideNav()
    dates.innerHTML = ""


    quo == "" ? quo = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${quo}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])

    loadi()

}


//         Regax         //


const regname =
    /^[a-zA-Z ]+$/;

const regemail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regphone =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const regage =
    /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

const regPassword =
    /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;




    document.getElementById("suouby").disabled = true;


function allofyou() {



    inpu1.addEventListener("keyup", (e) => {
        if (regname.test(inpu1.value)) {
            inpu1.classList.remove("error");
            inpu1.classList.add("success");
            p1.style.display = "none"
        } else {
            inpu1.classList.remove("success");
            inpu1.classList.add("error");
            p1.style.display = "block"

        }
    });


    inpu2.addEventListener("keyup", (e) => {
        if (regemail.test(inpu2.value)) {
            inpu2.classList.remove("error");
            inpu2.classList.add("success");
            p2.style.display = "none"
        } else {
            inpu2.classList.remove("success");
            inpu2.classList.add("error");
            p2.style.display = "block"

        }
    });


    inpu3.addEventListener("keyup", (e) => {
        if (regphone.test(inpu3.value)) {
            inpu3.classList.remove("error");
            inpu3.classList.add("success");
            p3.style.display = "none"
        } else {
            inpu3.classList.remove("success");
            inpu3.classList.add("error");
            p3.style.display = "block"

        }
    });


    inpu4.addEventListener("keyup", (e) => {
        if (regage.test(inpu4.value)) {
            inpu4.classList.remove("error");
            inpu4.classList.add("success");
            p4.style.display = "none"
        } else {
            inpu4.classList.remove("success");
            inpu4.classList.add("error");
            p4.style.display = "block"

        }
    });


    inpu5.addEventListener("keyup", (e) => {
        if (regPassword.test(inpu5.value)) {
            inpu5.classList.remove("error");
            inpu5.classList.add("success");
            p5.style.display = "none"
        } else {
            inpu5.classList.remove("success");
            inpu5.classList.add("error");
            p5.style.display = "block"

        }
    });


    inpu6.addEventListener("keyup", (e) => {
        if (inpu5.value == inpu6.value) {
            inpu6.classList.remove("error");
            inpu6.classList.add("success");
            p6.style.display = "none"
            if (inpu5.value == inpu6.value) {

                document.getElementById("suouby").disabled = false;

            } else {


                document.getElementById("suouby").disabled = true;

            }
        } else {
            inpu6.classList.remove("success");
            inpu6.classList.add("error");
            p6.style.display = "block"

        }
    });

}

allofyou()



import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click", function (e) {
//     alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!



//whell

const whellColor = document.querySelector(".main-navigation");
const bodyStyle = () => (whellColor.style.backgroundColor = "whitesmoke");
document.querySelector("body").addEventListener("wheel", bodyStyle);


//dblclick

document
    .querySelector(".content-destination img")
    .addEventListener("dblclick", (event) => {
        if (event.target.style.borderRadius === "100%") {
            event.target.style.borderRadius = "";
        } else {
            event.target.style.borderRadius = "100%";
        }
    });

// mousemove

const rota = document.querySelectorAll("h4");
rota.forEach((h4) => {
    h4.addEventListener("mousemove", () => {
        h4.style.color = "orange";
    });
});


// focus 

const form = document.querySelectorAll(".nav-link");
const formArr = Array.from(form);
formArr.forEach((element) => {
    element.addEventListener(
        "focus",
        (event) => {
            event.target.style.background = "blue";
        },
        true
    );
    element.addEventListener(
        "blur",
        (event) => {
            event.target.style.background = "gray";
        },
        true
    );
});

// keydown 

document.addEventListener("keydown", (event) => {
    if (event.shiftKey) {
        const baslik = document.querySelector("h1");
        baslik.style.color = "#c6e2ff";
    }
});

// scroll

const header = document.querySelector("header");
document.addEventListener("scroll", (event) => {
    header.style.backgroundColor = "#008080";
});



// load 

const loading = document.querySelectorAll("img");
loading[1].addEventListener("load", (event) => {
    alert("Yüklendi.");
});


//click 

const clickButton = document.querySelectorAll(".btn");
clickButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        button.style.backgroundColor = "#8b8989";
    });
});


//mouseover

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#79cdcd";
  });
});
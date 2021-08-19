let elements = document.querySelectorAll(".controls input");
let img = document.querySelector("img");
let js = document.querySelector(".hl");

elements[0].addEventListener("change", event => {
    img.style.padding = `${event.target.value}px`;
})

elements[0].addEventListener("mousemove", event=>{
    img.style.padding = `${event.target.value}px`;
})
elements[1].addEventListener("change", event => {
    img.style.filter = `blur(${event.target.value}px)`;
})
elements[1].addEventListener("mousemove", event => {
    img.style.filter = `blur(${event.target.value}px)`;
})

elements[2].addEventListener("change", event => {
    img.style.background = `${event.target.value}`;
    js.style.color = `${event.target.value}`;
})
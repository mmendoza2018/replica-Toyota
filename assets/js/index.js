const navBar = () => {
    console.log("entre");
    const d = document;
    window.addEventListener("scroll", () => {
        let btn = d.querySelector("#barra");
        let btnScroll = d.querySelector("#collapse");
        console.log(window.scrollY);
        let letra = d.querySelectorAll(".textNav");
        if (window.scrollY >0) {
            btn.classList.remove("bg-transparent")
            btnScroll.classList.remove("d-none")
            btn.classList.add("bg-dark")
            letra.forEach(element => {
                element.classList.add("text-light")
                element.classList.remove("text-dark")
            });
        } else {
            btn.classList.add("bg-transparent")
            btnScroll.classList.add("d-none")
            letra.forEach(element => {
                element.classList.remove("text-light")
                element.classList.add("text-dark")
            });
        }
    })
}
document.addEventListener("DOMContentLoaded", () =>{
    navBar()
})
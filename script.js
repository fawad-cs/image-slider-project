// const scroolContainer = document.querySelector(".gallery");
// const Next = document.getElementById("next");
// const Back = document.getElementById("back");

// scroolContainer.addEventListener("wheel", (evt) =>{
//     evt.preventDefault;
//     scroolContainer.scrollLeft += evt.deltaY;
//     scroolContainer.style.scrollBehavior = "auto";
// });
// Next.addEventListener("click", () =>{
//     scroolContainer.scrollLeft += 900;
//      scroolContainer.style.scrollBehavior = "smooth";

// })
// Back.addEventListener("click", () =>{
//     scroolContainer.scrollLeft -= 900;
//     scroolContainer.style.scrollBehavior = "smooth";

// })


const scroolContainer = document.querySelector(".gallery");
const Next = document.getElementById("next");
const Back = document.getElementById("back");
scroolContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault;
    scroolContainer.scrollLeft += evt.deltaY;
    scroolContainer.style.scrollBehavior = "auto";
});
Next.addEventListener("click", () =>{
    scroolContainer.scrollLeft += 900;
    scroolContainer.style.scrollBehavior = "smooth";
    
});

Back.addEventListener("click", () =>{
    scroolContainer.scrollLeft -= "smooth";
    scroolContainer.style.scrollBehavior = "smooth";


})
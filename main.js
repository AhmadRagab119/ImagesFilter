let btns =document.querySelectorAll(".btn")
let images =document.querySelectorAll(".image")
let showImage =document.querySelector(".showImage")
console.log(showImage)
let hide =document.querySelector(".hide")
let img =document.querySelector(".showImage img")

btns.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        btns.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        images.forEach((ele)=>{
            ele.style.display ="none"
            if(ele.classList.item(1).toLocaleLowerCase() ===  el.textContent.toLocaleLowerCase() ){
                ele.style.display ="block"
            }
            if(el.textContent.toLocaleLowerCase() == "all"){
                ele.style.display ="block"
            }
        })
    })
})

images.forEach((element)=>{
    element.addEventListener("click",()=>{
    showImage.style.display="flex"
    img.src = element.src
    })
})

hide.addEventListener("click",()=>{
    showImage.style.display="none"
})

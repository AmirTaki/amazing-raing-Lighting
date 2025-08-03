const rain = () => {
    const cloud = document.querySelector(".cloud")
    const e = document.createElement("div")
    const left = Math.floor(Math.random() * 310)

    e.classList.add("drop");
    cloud.append(e)
    e.style.left = left + "px"

    setTimeout(()=> {
        cloud.removeChild(e)
    }, 2000)

}
setInterval(()=>{
    rain()
}, 20)
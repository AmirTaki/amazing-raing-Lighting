const rain = () => {
    const cloud = document.querySelector(".cloud")
    const e = document.createElement("div")
    const left = Math.floor(Math.random() * 310)
    let width =  Math.random() * 5
    let height = Math.random() * 50

    e.classList.add("drop");
    cloud.append(e)
    e.style.left = left + "px"
    e.style.width = .5 + width + "px"
    e.style.height = .5 + height + "px"

    setTimeout(()=> {
        cloud.removeChild(e)
    }, 2000)

}
setInterval(()=>{
    rain()
}, 20)
const rain = () => {
    const cloud = document.querySelector(".cloud")
    const e = document.createElement("div")

    e.classList.add("drop");
    cloud.append(e)

    setTimeout(()=> {
        cloud.removeChild(e)
    }, 2000)

}
setInterval(()=>{
    rain()
}, 20)
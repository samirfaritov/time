setInterval(() => {
    const h = document.querySelector('.h')
    const m = document.querySelector('.m')
    const s = document.querySelector('.s')
    const anim = document.querySelectorAll('.anim')
    
    for (let i = 0; i < anim.length; i++) {
        anim[i].classList.add('active')
    }

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let a = h.innerHTML = hours
    let b = m.innerHTML = minutes
    let c = s.innerHTML = seconds
    
    if (a <= 9) {
        h.innerHTML = `0${a}`
    }
    if (b <= 9) {
        m.innerHTML = `0${b}`
    }
    if (c <= 9) {
        s.innerHTML = `0${c}`
    }
    
})
function backToHome() {
    let delay = 3000
    let loader = document.querySelector('.loader')
    let backToHomeBtn = document.querySelector('#back-to-home-btn')
    backToHomeBtn.style.display = 'none'
    loader.style.display = 'block'
    setTimeout(function() {
        window.location.href = 'https://predatorpoachers432.netlify.app/'
    }, delay)
}
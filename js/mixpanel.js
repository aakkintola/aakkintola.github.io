let tutorial_button = document.querySelector("div.card-body a.btn")

tutorial_button.forEach(function(button){
    button.addEventListener('click', (event) =>
    mixpanel.track(
        "Clicked Start Free Tutorial"
    ))
})

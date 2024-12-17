const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(form);

    fetch(url, {
        method: 'post',
        body: formData,
        mode: 'no-cors'
    }).then(() => {
        window.location.href = '/public_html/thanks.html'
    })
})
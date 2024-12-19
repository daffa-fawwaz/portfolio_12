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

document.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", () => {
          const filter = button.getAttribute("data-filter");

          document
            .querySelectorAll(".filter-btn")
            .forEach((btn) => btn.classList.remove("btn-primary"));
          button.classList.add("btn-primary");

          document.querySelectorAll(".task-item").forEach((item) => {
            if (
              filter === "all" ||
              item.getAttribute("data-category") === filter
            ) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        });
      });
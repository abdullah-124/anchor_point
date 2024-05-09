const form = document.querySelector("#userinfo");

async function sendData(event) {
    const formData = new FormData(form);
    console.log(formData)
  try {
    const response = await fetch("https://anchor-point-drf.onrender.com/users/registration/", {
      method: "POST",
      body: formData,
    });
    let msg = await response.json();
    console.log(msg)
    alert('register successfull please login')
    window.location.href = 'login.html'
  } catch (e) {
    console.log(e);
  }
  event.preventDefault()
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData(event);
});
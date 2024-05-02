const form = document.querySelector("#userinfo");

async function sendData() {
    const formData = new FormData(form);
    console.log(formData)
  try {
    const response = await fetch("https://anchor-point-drf.onrender.com/users/registration/", {
      method: "POST",
      body: formData,
    });
    let msg = await response.json();
    console.log(msg)
    alert(msg.username[0])
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
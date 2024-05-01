const form = document.querySelector("#userinfo");

async function sendData() {
  // Associate the FormData object with the form element
    const formData = new FormData(form);
    console.log(formData)
  try {
    const response = await fetch("http://127.0.0.1:8000/users/registration/", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
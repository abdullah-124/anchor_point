const form = document.querySelector("#userinfo");

async function sendData(e) {
  e.preventDefault()
    const username = document.getElementById('login_username').value
    const password = document.getElementById('login_password').value
    // console.log(username,password)
    
    // fetch("https://anchor-point-drf.onrender.com/users/login/", {
    fetch("https://anchor-point-drf.onrender.com/users/login/", {
        method: "POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify({username,password}),
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      localStorage.setItem("user_id",data.user)
      localStorage.setItem("login", true)
      window.location.href = 'index.html'
    })
}

// Take over form submission
form.addEventListener("submit", (event) => {
  sendData(event);
  event.preventDefault();
});
function register_handle(e){
  e.preventDefault()
  username = document.getElementById('username').value
  email = document.getElementById('email').value
  first_name = document.getElementById('fname').value
  last_name = document.getElementById('lname').value
  password = document.getElementById('password').value
  confirm_password = document.getElementById('password1').value
  // console.log(username,email,first_name,last_name,password,confirm_password)
  data = JSON.stringify({username,email,first_name,last_name,password,confirm_password})
  fetch("https://anchor-point-drf.onrender.com/users/registration/",{
      method: "POST",
      headers:{"content-type":"application/json"},
      body: data,
  }).then(res => res.json())
  .then(data => {
    alert('Confirm your mail')
  })
  .catch(er => console.log(er))
}
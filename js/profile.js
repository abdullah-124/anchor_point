user_id = localStorage.getItem("user_id")
user_banner = document.getElementById('user_banner')
console.log(user_id)
function load_user_info(){
    fetch(`https://anchor-point-drf.onrender.com/users/list/${user_id}/`)
    .then(res => res.json())
    .then(data => show_banner(data))
}
load_user_info()
function show_banner(data){
    user_banner.innerHTML = `
        <div class="mx-lg-5 shadow-lg p-4 mt-5">
            <div class="d-flex justify-content-around align-items-center">
                <div class="col-2">
                    <img src="css/img/blank_profile.png" alt="profile" class="img-fluid rounded-circle">
                </div>
                <div class="p-2">
                    <div class="col-10">
                        <h4 class="text-primary">${data.username}</h4>
                        <p>${data.email}</p>
                        <small>${data.first_name} ${data.last_name}</small>
                    </div>
                </div>
            </div>
        </div>
    
    `
}

function handle_logout(){
    console.log('logut')
    localStorage.clear()
    window.location.href = 'index.html'
}
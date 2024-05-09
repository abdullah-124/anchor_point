function navbar(){
    user = localStorage.getItem('user_id')
    nav_item = document.getElementById('auth_view')
    if(user){
        nav_item.innerHTML = '<a class="nav-link" href="profile.html">Profile</a>' 
    }
}
navbar()
let cat_box = document.getElementById('trending_category_box')
function load_category(){
    fetch('https://anchor-point-drf.onrender.com/course/category/')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        show_category_data(data)
        
    })
}
load_category()
function show_category_data(data){
    cat_box.innerHTML = ""
    for(i of data){
        cat_box.innerHTML += `
        <div class="col-lg-2 col-md-3 col-4 m-auto">
            <div class="text-center p-3">
                <img src="${i.image}" alt="" class="img-fluid">
                <small class="text-primary-emphasis">${i.category_name}</small>
            </div>
        </div>
        
        `
    }
}

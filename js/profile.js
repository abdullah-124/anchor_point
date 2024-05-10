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
        <div class="mx-lg-5 shadow-lg rounded p-4 mt-5">
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
// http://127.0.0.1:8000/course/enroll/?student_id=5
function load_profile_course(){
    student_id = localStorage.getItem('student_id')
    if(!student_id){
        return
    }
    fetch(`https://anchor-point-drf.onrender.com/course/enroll/?student_id=${student_id}`)
    .then(res=>res.json())
    .then(data => show_courses(data))
}
load_profile_course()
function show_courses(data){
    courses = JSON.parse(localStorage.getItem('courses'))
    course_box = document.getElementById('courses_box')
    course_box.innerHTML = ""
    for(let i of data){
        // console.log(data)
        let x = courses.find(a => i.course==a.id)
        // console.log(x)
        course_box.innerHTML += `
            <div class="col">
            <div class="p-2 rounded border ">
            <article class="p-3">
            <img class="course_banner img-fluid rounded" src="${x.image}" alt="">
            <div class="d-flex justify-content-between">
            <p class="text-muted">${x.category}</p>
            <p>⭐ Reviews</p>
            </div>
            <h6>${x.name}</h6>
            <p>by ${x.teacher_name}</p>
            <div class="d-flex justify-content-between align-item-center">
            <p><button onclick="course_info(${x.id})" class="btn btn-warning btn-sm fw-bold">Show Classes</button></p>
            <p class="text-danger fw-bold">Enrolled</p>
            </div>
            </article>
            </div>
            </div>
        `
    }
}

function course_info(id){
    // console.log(id)
    localStorage.setItem('course_id',id)
    window.location.href = 'course_info.html'
}

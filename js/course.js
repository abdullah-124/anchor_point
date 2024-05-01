console.log("HEllo")
let course_box = document.getElementById('courses_box')
let total_course = document.getElementById('total_course')
let category_box = document.getElementById('category_box')
let courses = []
let category = []
function load_category(){
    fetch('https://anchor-point-drf.onrender.com/course/category/')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        category = data
        for(i of data){
            category_box.innerHTML += `<button onclick="filter_data('${i.category_name}')" class="mx-2 btn btn-warning btn-sm">${i.category_name}</button>`
        }
    })
}
load_category()

// filter by category
function filter_data(category_name){
    filter_courses = courses.filter(d => d.category == category_name)
    // console.log()
    show_courses(filter_courses)
}

function load_data(){
    fetch('https://anchor-point-drf.onrender.com/course/list/')
    .then(res => res.json())
    .then(data =>{
        courses = data 
        total_course.innerText = data.length
        show_courses(data)
    })
    .catch(er=>console.log(er))
}
load_data()
function show_courses(data){
    // console.log(data)
    course_box.innerHTML = ""
    for(let i of data){
        // console.log(x.category_name)
        course_box.innerHTML += `
            <div class="col">
            <div class="p-2 rounded border ">
            <article class="p-3">
            <img class="course_banner img-fluid rounded" src="${i.image}" alt="">
            <div class="d-flex justify-content-between">
            <p class="text-muted">${i.category}</p>
            <p>⭐ Reviews</p>
            </div>
            <h6>${i.name}</h6>
            <p>by ${i.teacher_name}</p>
            <div class="d-flex justify-content-between align-item-center">
            <p><button class="btn btn-warning btn-sm fw-bold">Enroll now</button></p>
            <p class="text-danger fw-bold">${i.fee} $</p>
            </div>
            </article>
            </div>
            </div>
        `
    }
}
// console.log(courses.length)


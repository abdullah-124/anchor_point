console.log("HEllo")
let course_box = document.getElementById('courses_box')
let total_course = document.getElementById('total_course')
let courses = ""
function load_data(){
    fetch('http://127.0.0.1:8000/course/list/')
    .then(res => res.json())
    .then(data =>{
        courses = data 
        total_course.innerText = data.length
        show_courses(data)
    })
    .catch(er=>console.log(er))
}
function show_courses(data){
    console.log(data)
    for(let i of data){
        course_box.innerHTML += `
            <div class="col rounded border ">
            <article class="p-3">
            <img class="img-fluid rounded" src="${i.image}" alt="">
            <div class="d-flex justify-content-between">
            <p>Keyword</p>
            <p>⭐ Reviews</p>
            </div>
            <h6>Name</h6>
            <p>by Name</p>
            <div class="d-flex justify-content-between">
            <button class="btn btn-warning fw-bold">Enroll now</button>
            <p>Price</p>
            </div>
            </article>
            </div>
        `
    }
}
load_data()
console.log(courses.length)


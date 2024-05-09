course_id = window.localStorage.getItem('course_id')
course_name = document.getElementById('course_name')
container = document.getElementById('course_info_container')

function load_course_info(){
    fetch(`https://anchor-point-drf.onrender.com/course/list/${course_id}/`)
    .then(res => res.json())
    .then(data => show_info(data))
}
load_course_info()



function show_info(data){
    console.log(data)
    container.innerHTML = `
        <div class="row">
            <div class="col-12 col-lg-9 mx-auto">
                <img src="${data.image}" alt="" class="course_info_banner">
                <div class="d-flex mt-1">
                    <small class="border p-1 rounded">${data.category}</small>
                    <span> ⭐(4.7 Reviews)</span>
                </div>
                <h4 class="text-success-emphasis">${data.name}</h4>
                <p>By ${data.teacher_name}</p>
                <div class="">
                    <button class="btn btn-sm btn-primary">Overview</button>
                    <button class="btn btn-sm btn-secondary">Instructor</button>
                    <button class="btn btn-sm btn-secondary">Review</button>
                </div>
                <div class="border mt-4 p-4 rounded">
                    <h5 class="text-primary-emphasis">Course Description</h5>
                    <p class="text-light-emphasis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
                        animi, ipsam odit cupiditate ab magni praesentium rerum asperiores consequatur. Velit placeat
                        nesciunt cum dolor facere voluptatem illum ipsa soluta impedit?</p>
                    <h5 class="text-primary-emphasis mt-4">What you'll learn in this course?</h5>
                    <p class="text-light-emphasis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
                        animi, ipsam odit cupiditate ab magni praesentium rerum asperiores consequatur. Velit placeat
                        nesciunt cum dolor facere voluptatem illum ipsa soluta impedit?</p>
                    <h5 class="text-primary-emphasis mt-4">Any Query</h5>
                    <p class="text-light-emphasis">${data.mobile_num}</p>

                </div>
            </div>
            <div class="col-2 border rounded mx-auto">
                <div class="col-12 bg-primary p-1 mt-3 rounded text-light text-center">
                    <small>This course fee: <br></small>
                    <h5>${data.fee} $</h5>
                </div>
                <div class="text-secondary-emphasis">
                    <p class="text-success fw-bold mt-2">Course Includes:</p>
                    <div class="d-flex justify-content-between">
                        <p>Level</p>
                        <p>Expert</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Duration</p>
                        <p>${data.duration} month</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Lesson</p>
                        <p>${data.duration*10}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Cerfication</p>
                        <p>No</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Total Enroll</p>
                        <p>100</p>
                    </div>
                    <img src="css/img/payment.png.png" alt="" class="img-fluid">
                </div>
            </div>
    </div>
    `
}
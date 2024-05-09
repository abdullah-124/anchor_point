teacher_container = document.getElementById('teacher')

function load_teacher(){
    fetch('https://anchor-point-drf.onrender.com/teacher/')
    .then(res => res.json())
    .then(data => show_teacher(data))
    .catch(er => console.log(er))
}

load_teacher()
function show_teacher(data){
    teacher_container.innerHTML = ''
    for(i of data){
        teacher_container.innerHTML += `
        <div class="col-10 col-lg-2 col-md-5 m-auto">
            <div class="d-flex justify-content-between align-items-center">
                <img src="${i.image}" alt="" class="img-fluid">
                <div>
                    <h5>${i.user}</h5>
                    <p>ratings</p>
                </div>
            </div>
        </div>
        `
    }
}

load_user()
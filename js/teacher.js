teacher_container = document.getElementById('teacher')
let all_users = []
const load_user = (id) =>{
    fetch(`https://anchor-point-drf.onrender.com/users/list/${id}/`)
    .then(res => 
        res.json()
    )
    .then(data => {
        return data
    }).catch(er => console.log(er))
}
console.log(all_users)
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
        let x = load_user(i.user)
        console.log(x)
        teacher_container.innerHTML += `
        <div class="col-10 col-lg-2 col-md-5 m-auto">
            <div class="d-flex justify-content-between align-items-center">
                <img src="${i.image}" alt="" class="img-fluid">
                <div>
                    <h5>${x}</h5>
                    <p>ratings</p>
                </div>
            </div>
        </div>
        `
    }
}

load_user()
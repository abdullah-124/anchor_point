teacher_container = document.getElementById('teacher')
let all_users = []
async function load_user() {
    try {
        const response = await fetch(`https://anchor-point-drf.onrender.com/users/list/`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error; // rethrow the error for handling at a higher level
    }
}
all_users = load_user()
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
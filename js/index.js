let cat_box = document.getElementById('trending_category_box')
function show_category_data(data){
    cat_box.innerHTML = ""
    for(i of data){
        cat_box.innerHTML += `
        <div class="col-lg-1 col-md-2 col-3 m-auto">
            <div class="text-center">
                <img src="${i.image}" alt="" class="img-fluid">
                <small class="text-primary-emphasis">${i.category_name}</small>
            </div>
        </div>
        
        `
    }
}

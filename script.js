document.addEventListener('DOMContentLoaded', function() {

    var title= document.getElementById('title')

    title.addEventListener('click', function(){
        title.classList.toggle('active')
    });
});


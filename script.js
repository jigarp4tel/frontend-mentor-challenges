var accordian = document.querySelectorAll('.accordian')


for(var i = 0; i < accordian.length; i++){
    accordian[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("hidden");
    })
}


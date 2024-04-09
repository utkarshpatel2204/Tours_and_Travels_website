function menuToggle() {
    var menuIcon = document.getElementById('toggle')
    const navbar = document.getElementById('toggler')
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        navbar.style.display = 'flex';
    }
    else {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
        navbar.style.display = 'none';
    }

    const nav = document.getElementsByClassName('nav-link')
    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', () => {
            if (navbar.style.display == 'flex') {
                navbar.style.display = 'none';
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-xmark');
            }
        })
    }

}


function validateform(){ 
    var tel=document.getElementById("phonenum").value;  

    if(tel.length<10){  
        alert("Phone number must be of atleast 10 digits!");  
        return false;  
    } else if(isNaN(tel)){
        alert("Phone number should not include character!");
        return false;
    }
    return true;
}
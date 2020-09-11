const prevProfiles = document.querySelectorAll("#prev-icon");
const nextProfiles = document.querySelectorAll("#next-icon");


let active = true;

function toggleClass(){
    const tanyaProfile = document.querySelector(".container-first-testimonial");

    const johnProfile = document.querySelector(".container-second-testimonial");

    if(active == true){
        tanyaProfile.style.display = 'none';
        johnProfile.style.display = 'flex';
        active = false;
        console.log(active)
    }
    else{
        tanyaProfile.style.display = 'flex';
        johnProfile.style.display = 'none';
        active = true;
        console.log(active)
    }
    
}


prevProfiles.forEach(prevProfile => {
    
    prevProfile.addEventListener('click', toggleClass)

})
  
nextProfiles.forEach(nextProfile => {
    
    nextProfile.addEventListener('click', toggleClass)

})

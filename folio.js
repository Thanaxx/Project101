const getsidebar = document.querySelector('.sidebar');
const closesidebar = document.querySelector(".closeBar");
const openbar = document.querySelector('#hamburger');

openbar.addEventListener("click", () =>{
    getsidebar.style.width = "330px";
    home.style.opacity = "0.6";
    about.style.opacity = "0.6";
    activity.style.opacity = "0.6";
    module.style.opacity = "0.6";
});

closesidebar.addEventListener("click", () =>{
    getsidebar.style.width = "0px";
    home.style.opacity = "1";
    about.style.opacity = "1";
    activity.style.opacity = "1";
    module.style.opacity = "1";
});


/*modal learnmore*/
const openmore = document.querySelector(".learnmore");
const kbtn = document.querySelector(".ok");
const view = document.querySelector(".overview");

view.addEventListener("click", () =>{
    openmore.style.display = "block";
})

kbtn.addEventListener("click", () =>{
    openmore.style.display = "none";
})

/*Open about*/
const openabout = document.querySelector(".openbout");
const home = document.querySelector(".coverpage");
const about = document.querySelector(".aboutpage");
const openhome = document.querySelector(".openhome");
const openacts = document.querySelector(".openact");
const activity = document.querySelector(".activitypage");
const openomodules = document.querySelector(".openmodule");
const module = document.querySelector(".modulespage");


openabout.addEventListener("click", () =>{
    home.style.display = "none";
    about.style.display = "block";
    getsidebar.style.width = "0px";
    activity.style.display = "none";
    module.style.display = "none";
    about.style.opacity = "1";
})
openhome.addEventListener("click", () =>{
    home.style.display = "flex";
    about.style.display = "none";
    getsidebar.style.width = "0px";
    activity.style.display = "none";
    module.style.display = "none";
    home.style.opacity = "1";
})
openacts.addEventListener("click", () =>{
    home.style.display = "none";
    about.style.display = "none";
    getsidebar.style.width = "0px";
    activity.style.display = "block";
    module.style.display = "none";
    activity.style.opacity = "1";
})
openomodules.addEventListener("click", () =>{
    home.style.display = "none";
    about.style.display = "none";
    getsidebar.style.width = "0px";
    activity.style.display = "none";
    module.style.display = "block";
    module.style.opacity = "1";
})
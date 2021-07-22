
// hover --> fade in/out
const menuButton = document.querySelector(".menuButton");
const menu =  document.querySelector(".menu");
const ul = document.querySelector('ul');
// functions
moveOver = ()=>{
    menu.classList.remove('fadeOut');   
};
moveOut = ()=>{
    menu.classList.add('fadeOut');  
};
// events
menuButton.addEventListener("mouseover", moveOver);
menuButton.addEventListener("mouseout", moveOut);
ul.addEventListener("mouseover", moveOver);
ul.addEventListener("mouseout", moveOut);


//click button --> change color 
const body =  document.querySelector("body");
const selectBtn = document.querySelectorAll('li');
const selectTxt = document.querySelector('#text');
// function:
const changeColor = (i)=>{
    const color = i.classList[0];
    body.classList.replace (body.classList[0] ,color);
    document.getElementById("text").innerHTML= color;
    // set checkbox
    Array.from(selectBtn).forEach(i => {
    i.firstElementChild.firstElementChild.removeAttribute('checked')
    })
    i.firstElementChild.firstElementChild.setAttribute('checked','checked')
    // close menu
    moveOut(); 
}
// events: 
selectBtn.forEach(i=> {
    i.addEventListener('click', () => {
        changeColor(i)
    })
})


//event key down
document.addEventListener("keydown", (event)=> {
    let key = event.keyCode;
    // console.log(key);
    selectBtn.forEach(item => {
    let dataKey = item.getAttribute('data-key');
    // console.log(dataKey);
    if (key == dataKey){
        changeColor(item);
        }
    })
})


'use strict'

const panelSelected = document.getElementsByClassName('accordion');
const len = panelSelected.length;
let i;


function displayPanel(){
    const activePanels = document.querySelector('.active');
    if(activePanels != null && activePanels != this){
        activePanels.classList.remove("active");
        let panel = activePanels.nextElementSibling;
        panel.style.maxHeight = null;
    }
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = '300px';
    }
}

function closePanels(){
    const activePanels = document.querySelector('.active');
    if(activePanels != null){
        activePanels.classList.remove("active");
    }
}

for (i = 0; i < len; i++){
    panelSelected[i].addEventListener('click', displayPanel);
}
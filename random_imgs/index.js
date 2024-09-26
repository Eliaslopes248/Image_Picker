
let charlist = []
class Character{


    constructor(name,url,bgcolor1,bgcolor2){
        this.name = name;
        this.url = url;
        this.bgcolor1 = bgcolor1;
        this.bgcolor2 = bgcolor2;
    }

}

let clownChar = new Character('Clown','clown.webp', 'rgb(33, 33, 33)','rgb(120, 59, 59)')
let janeChar = new Character('Jane','jane.jpg', 'grey','blue')
let studyChar = new Character('Study Anime','study.jpg', 'grey','blue')
let dragChar = new Character('Dragon','drag.jpg', 'grey','blue')
let mouseChar = new Character('Mouse','mouse.jpg', 'grey','blue')
let spaceChar = new Character('Spaceman','space.jpg', 'grey','blue')
let boxChar = new Character('Boxer','box.jpg', 'grey','blue')



function addChar(character){

    charlist.push(character) // add to character list
   

    let tabcon = document.getElementById("tabcon")//tab holder

    let tab = document.createElement('div')// create tab element
    tab.classList.add('tabbox')
    tab.id = 'tab'
    tab.textContent = character.name;

    tabcon.appendChild(tab)// add to DOM

}

addChar(clownChar)// adding tabs
addChar(janeChar)// adding tabs
addChar(studyChar)
addChar(dragChar)
addChar(mouseChar)
addChar(spaceChar)
addChar(boxChar)




let tab = document.querySelectorAll('.tabbox');

if(tab){

    tab.forEach(i => {
        i.addEventListener('click',()=>{
           // console.log(i.textContent)

            let tabName = i.textContent

            changeChar(tabName)
        })
    });
}




function changeChar(charname){

let Selected = charlist.find((i)=>{
    return i.name === charname;
})

//console.log(Selected)  //test

    let stageimg = document.getElementById('stageimg');
    stageimg.src = Selected.url;

        let backImg = document.getElementById('bgimg')
        backImg.src = Selected.url;

        let color1 = Selected.color1;
        let color2 = Selected.color2;

        document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;


}
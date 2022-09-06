let activeArr = []
let selectArr = []
let displayArr = []
let goBackBtn = ""
let imgList = ""
let selectionOpen = false

const colorArr = ["./images/colours/img1.png",
"./images/colours/img2.png", 
"./images/colours/img3.png", 
"./images/colours/img4.png", 
"./images/colours/img5.png", 
"./images/colours/img6.png", 
"./images/colours/img7.png", 
"./images/colours/img8.png"]
const sportsArr = ["./images/sports/img1.png",
"./images/sports/img2.png", 
"./images/sports/img3.png", 
"./images/sports/img4.png", 
"./images/sports/img5.png", 
"./images/sports/img6.png", 
"./images/sports/img7.png", 
"./images/sports/img8.png"]

const colorsBtn = document.getElementById("colors")
const sportsBtn = document.getElementById("sports")
const clearBtn = document.getElementById("clear")
const renderBtn = document.getElementById("render-btn")

renderBtn.addEventListener("click", function(){
    renderGame("cards-container", activeArr)
})

colorsBtn.addEventListener("click",function(){
    if (selectionOpen === false) {
    renderSelect("select-container", colorArr) 
    selectionOpen = true
    }
})

sportsBtn.addEventListener("click",function() {
    if (selectionOpen === false) {
        renderSelect("select-container", sportsArr)
        selectionOpen = true
    } 
})

function renderGame(targetDiv, arr){
    displayArr = arr.sort( () => { return 0.5 - Math.random() } )
    displayArr = displayArr.slice(0, 6)
    displayArr = displayArr.concat(displayArr)
    displayArr = displayArr.sort( () => { return 0.5 - Math.random() } )
    let currentDiv = document.getElementById(targetDiv)
    currentDiv.innerHTML = ""
    for ( let i = 0; i < displayArr.length; i++) {
        currentDiv.innerHTML += `
        <div class="flip-card">
          <div class="flip-card-inner unflipped">
            <div class="flip-card-front">
              <img src="./images/cards-back.png">
            </div>
            <div class="flip-card-back">
              <img src="${displayArr[i]}">
            </div>
          </div>
        </div>`
    }
    let reverser = document.querySelectorAll(".flip-card-inner")
    reverser.forEach( (card) => {
        card.addEventListener("click", function(){
            if ( card.classList.contains("unflipped") ) {
              card.style.transform = "rotatey(180deg)"
              card.classList.remove("unflipped")
              card.classList.add("flipped")
            } else {
              card.style.transform = "rotatey(0deg)"
              card.classList.remove("flipped")
              card.classList.add("unflipped")
        }
        })
    })
}

function renderSelect(targetDiv, arr){
    let currentDiv = document.getElementById(targetDiv)
    currentDiv.innerHTML = `<div class="inner-btn-menu"><button id="allcolors" onClick="selectAll()">Select All</button><button id="clearselection">Clear Selection</button><button id="closewindow" onClick="passSelect()">Go Back</button></div>`
    for ( let i = 0; i < arr.length; i++) {
    currentDiv.innerHTML += `<div class="img-box"><img class="select-img unselected" src="${arr[i]}"></div>`
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        img.addEventListener("click",function() {
            let currentImg = img.getAttribute("src")
            if ( img.classList.contains("unselected") ) {
                currentImg = img.getAttribute("src")
                selectArr.push(currentImg)
                img.classList.add("selected")
                img.classList.remove("unselected")
            } else {
                currentImg = img.getAttribute("src")
                let deselectNum = selectArr.indexOf(currentImg)
                let deselector = selectArr.splice( deselectNum, 1)
                img.classList.remove("selected")
                img.classList.add("unselected")
            }
        }) 
    })
    }
}

function selectAll() {
    selectArr = []
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let currentImg = img.getAttribute("src")
        selectArr.push(currentImg)
        img.classList.add("selected")
        img.classList.remove("unselected")
    })
}

function passSelect() {
    activeArr = activeArr.concat(selectArr)
    selectArr = []
    console.log(activeArr)
    let currenterDiv = document.getElementById("select-container")
    currenterDiv.innerHTML = ""
    selectionOpen = false
}

clearBtn.addEventListener("click",function(){
    let currentDiv = document.getElementById("cards-container")
    currentDiv.innerHTML = ""
    let currenterDiv = document.getElementById("select-container")
    currenterDiv.innerHTML = ""
    activeArr = []
    displayArr = []
    selectArr = []
    document.querySelectorAll(`.toggleOn`).forEach( (x) => {
    x.className = "toggleOff"
    })
})


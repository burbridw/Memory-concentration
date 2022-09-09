let activeArr = []
let selectArr = []
let displayArr = []
let goBackBtn = ""
let imgList = ""
let selectionOpen = false

const gameBtnDisplay = document.getElementById("game-btn-container")
const topicBtnDisplay = document.getElementById("topic-btn-container")

const numbersArr = ["./images/numbers/img1.png","./images/numbers/img2.png", "./images/numbers/img3.png", "./images/numbers/img4.png", "./images/numbers/img5.png", "./images/numbers/img6.png", "./images/numbers/img7.png", "./images/numbers/img8.png", "./images/numbers/img9.png", "./images/numbers/img10.png", "./images/numbers/img11.png", "./images/numbers/img12.png"]
const feelingsArr = ["./images/feelings/img1.png","./images/feelings/img2.png", "./images/feelings/img3.png", "./images/feelings/img4.png", "./images/feelings/img5.png", "./images/feelings/img6.png", "./images/feelings/img7.png", "./images/feelings/img8.png", "./images/feelings/img9.png","./images/feelings/img10.png"]
const weatherArr = ["./images/weather/img1.png","./images/weather/img2.png", "./images/weather/img3.png", "./images/weather/img4.png", "./images/weather/img5.png", "./images/weather/img6.png"]
const colorArr = ["./images/colours/img1.png","./images/colours/img2.png", "./images/colours/img3.png", "./images/colours/img4.png", "./images/colours/img5.png", "./images/colours/img6.png", "./images/colours/img7.png", "./images/colours/img8.png", "./images/colours/img9.png","./images/colours/img10.png"]
const sportsArr = ["./images/sports/img1.png","./images/sports/img2.png", "./images/sports/img3.png", "./images/sports/img4.png", "./images/sports/img5.png", "./images/sports/img6.png", "./images/sports/img7.png", "./images/sports/img8.png","./images/sports/img9.png","./images/sports/img10.png","./images/sports/img11.png","./images/sports/img12.png","./images/sports/img13.png"]
const shapesArr = ["./images/shapes/img1.png","./images/shapes/img2.png", "./images/shapes/img3.png", "./images/shapes/img4.png", "./images/shapes/img5.png", "./images/shapes/img6.png", "./images/shapes/img7.png", "./images/shapes/img8.png"]
const instrumentsArr = ["./images/instruments/img1.png","./images/instruments/img2.png", "./images/instruments/img3.png", "./images/instruments/img4.png", "./images/instruments/img5.png", "./images/instruments/img6.png", "./images/instruments/img7.png", "./images/instruments/img8.png"]
const foodsArr = ["./images/foods/img1.png","./images/foods/img2.png", "./images/foods/img3.png", "./images/foods/img4.png", "./images/foods/img5.png", "./images/foods/img6.png", "./images/foods/img7.png", "./images/foods/img8.png", "./images/foods/img9.png", "./images/foods/img10.png", "./images/foods/img11.png", "./images/foods/img12.png", "./images/foods/img13.png", "./images/foods/img14.png", "./images/foods/img15.png", "./images/foods/img16.png", "./images/foods/img17.png", "./images/foods/img18.png", "./images/foods/img19.png"]
const dessertsArr = ["./images/desserts/img1.png","./images/desserts/img2.png", "./images/desserts/img3.png", "./images/desserts/img4.png", "./images/desserts/img5.png", "./images/desserts/img6.png", "./images/desserts/img7.png", "./images/desserts/img8.png"]
const drinksArr = ["./images/drinks/img1.png","./images/drinks/img2.png", "./images/drinks/img3.png", "./images/drinks/img4.png", "./images/drinks/img5.png", "./images/drinks/img6.png", "./images/drinks/img7.png", "./images/drinks/img8.png"]

const feelingsBtn = document.getElementById("feelings")
const weatherBtn = document.getElementById("weather")
const colorsBtn = document.getElementById("colors")
const sportsBtn = document.getElementById("sports")
const shapesBtn = document.getElementById("shapes")
const foodsBtn = document.getElementById("foods")
const drinksBtn = document.getElementById("drinks")
const dessertsBtn = document.getElementById("desserts")
const instrumentsBtn = document.getElementById("instruments")

const quickStart = document.getElementById("quick-start")
const clearBtn = document.getElementById("clear")
const renderBtn = document.getElementById("render-btn")

feelingsBtn.addEventListener("click",() => beginSelection(feelingsArr))
weatherBtn.addEventListener("click",() => beginSelection(weatherArr))
colorsBtn.addEventListener("click",() => beginSelection(colorArr))
sportsBtn.addEventListener("click",() => beginSelection(sportsArr))
shapesBtn.addEventListener("click",() => beginSelection(shapesArr))
instrumentsBtn.addEventListener("click",() => beginSelection(instrumentsArr))
foodsBtn.addEventListener("click",() => beginSelection(foodsArr))
dessertsBtn.addEventListener("click",() => beginSelection(dessertsArr))
drinksBtn.addEventListener("click",() => beginSelection(drinksArr))

function beginSelection(arr) {
    if (!selectionOpen) {
        reSelect(arr)
        renderSelect("select-container", arr)
        selectionOpen = true
    }
}

function reSelect(arr) {
    selectArr = activeArr.filter( (x) => arr.includes(x) )
    activeArr = activeArr.filter( (x) => !arr.includes(x) )
}

function renderSelect(targetDiv, arr){
    gameBtnDisplay.className = "hide-me"
    topicBtnDisplay.className = "hide-me"
    let currentDiv = document.getElementById(targetDiv)
    currentDiv.innerHTML = `<div class="inner-btn-menu"><button id="selectall" onClick="selectAll()">Select All</button><button id="clearselection" onClick="selectClear()">Clear Selection</button><button id="closewindow" onClick="passSelect()">Confirm Selection and Go Back</button></div>`
    for ( let i = 0; i < arr.length; i++) {
    currentDiv.innerHTML += `<div class="img-box"><img class="select-img unselected" src="${arr[i]}"></div>`
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let reselectImg = img.getAttribute("src")
        if (selectArr.includes(reselectImg) ) {
            img.classList.add("selected")
            img.classList.remove("unselected")
        }
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

function selectClear() {
    selectArr = []
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let currentImg = img.getAttribute("src")
        img.classList.remove("selected")
        img.classList.add("unselected")
    })
}

function passSelect() {
    activeArr = activeArr.concat(selectArr)
    selectArr = []
    let currenterDiv = document.getElementById("select-container")
    currenterDiv.innerHTML = ""
    selectionOpen = false
    gameBtnDisplay.className = ""
    topicBtnDisplay.className = ""
    
}

renderBtn.addEventListener("click", function(){
    renderGame("cards-container", activeArr)
})

function renderGame(targetDiv, arr){
    displayArr = arr.sort( () => { return 0.5 - Math.random() } )
    displayArr = displayArr.slice(0, 6)
    displayArr = displayArr.concat(displayArr)
    displayArr = displayArr.sort( () => { return 0.5 - Math.random() } )
    let currentDiv = document.getElementById(targetDiv)
    currentDiv.innerHTML = ""
    topicBtnDisplay.className ="hide-me"
    for ( let i = 0; i < displayArr.length; i++) {
      currentDiv.innerHTML += `
      <div class="flip-card">
            <div class="flip-card-inner unflipped">
            <div class="flip-card-front">
              <img src="${numbersArr[i]}">
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

clearBtn.addEventListener("click",function(){
    let currentDiv = document.getElementById("cards-container")
    currentDiv.innerHTML = ""
    let currenterDiv = document.getElementById("select-container")
    currenterDiv.innerHTML = ""
    activeArr = []
    displayArr = []
    selectArr = []
    topicBtnDisplay.className = ""
    document.querySelectorAll(`.toggleOn`).forEach( (x) => {
    x.className = "toggleOff"
    })
})


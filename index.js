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
const fruitsvegetablesArr = ["./images/fruitsvegetables/img1.png","./images/fruitsvegetables/img2.png", "./images/fruitsvegetables/img3.png", "./images/fruitsvegetables/img4.png", "./images/fruitsvegetables/img5.png", "./images/fruitsvegetables/img6.png", "./images/fruitsvegetables/img7.png", "./images/fruitsvegetables/img8.png", "./images/fruitsvegetables/img9.png", "./images/fruitsvegetables/img10.png", "./images/fruitsvegetables/img11.png", "./images/fruitsvegetables/img12.png", "./images/fruitsvegetables/img13.png", "./images/fruitsvegetables/img14.png", "./images/fruitsvegetables/img15.png", "./images/fruitsvegetables/img16.png", "./images/fruitsvegetables/img17.png", "./images/fruitsvegetables/img18.png", "./images/fruitsvegetables/img19.png", "./images/fruitsvegetables/img20.png", "./images/fruitsvegetables/img21.png", "./images/fruitsvegetables/img22.png", "./images/fruitsvegetables/img23.png", "./images/fruitsvegetables/img24.png", "./images/fruitsvegetables/img25.png", "./images/fruitsvegetables/img26.png", "./images/fruitsvegetables/img27.png"]
const ingredientsArr = ["./images/ingredients/img1.png","./images/ingredients/img2.png", "./images/ingredients/img3.png", "./images/ingredients/img4.png", "./images/ingredients/img5.png", "./images/ingredients/img6.png", "./images/ingredients/img7.png", "./images/ingredients/img8.png", "./images/ingredients/img9.png", "./images/ingredients/img10.png"]
const mealsArr = ["./images/meals/img1.png","./images/meals/img2.png", "./images/meals/img3.png"]
const tastesArr = ["./images/tastes/img1.png","./images/tastes/img2.png", "./images/tastes/img3.png", "./images/tastes/img4.png", "./images/tastes/img5.png", "./images/tastes/img6.png", "./images/tastes/img7.png", "./images/tastes/img8.png", "./images/tastes/img9.png", "./images/tastes/img10.png"]
const animalsArr = ["./images/animals/img1.png","./images/animals/img2.png", "./images/animals/img3.png", "./images/animals/img4.png", "./images/animals/img5.png", "./images/animals/img6.png", "./images/animals/img7.png", "./images/animals/img8.png", "./images/animals/img9.png", "./images/animals/img10.png", "./images/animals/img11.png", "./images/animals/img12.png", "./images/animals/img13.png", "./images/animals/img14.png", "./images/animals/img15.png", "./images/animals/img16.png", "./images/animals/img17.png", "./images/animals/img18.png", "./images/animals/img19.png", "./images/animals/img20.png", "./images/animals/img21.png", "./images/animals/img22.png", "./images/animals/img23.png", "./images/animals/img24.png"]
const seaanimalsArr = ["./images/seaanimals/img1.png","./images/seaanimals/img2.png", "./images/seaanimals/img3.png", "./images/seaanimals/img4.png", "./images/seaanimals/img5.png", "./images/seaanimals/img6.png", "./images/seaanimals/img7.png", "./images/seaanimals/img8.png"]
const bugsArr = ["./images/bugs/img1.png","./images/bugs/img2.png", "./images/bugs/img3.png", "./images/bugs/img4.png"]
const natureArr = ["./images/nature/img1.png","./images/nature/img2.png", "./images/nature/img3.png", "./images/nature/img4.png", "./images/nature/img5.png", "./images/nature/img6.png", "./images/nature/img7.png", "./images/nature/img8.png", "./images/nature/img9.png", "./images/nature/img10.png", "./images/nature/img11.png", "./images/nature/img12.png"]
const monthsArr = ["./images/months/img1.png","./images/months/img2.png", "./images/months/img3.png", "./images/months/img4.png", "./images/months/img5.png", "./images/months/img6.png", "./images/months/img7.png", "./images/months/img8.png", "./images/months/img9.png", "./images/months/img10.png", "./images/months/img11.png", "./images/months/img12.png"]

const feelingsBtn = document.getElementById("feelings")
const weatherBtn = document.getElementById("weather")
const colorsBtn = document.getElementById("colors")
const sportsBtn = document.getElementById("sports")
const shapesBtn = document.getElementById("shapes")
const foodsBtn = document.getElementById("foods")
const drinksBtn = document.getElementById("drinks")
const dessertsBtn = document.getElementById("desserts")
const instrumentsBtn = document.getElementById("instruments")
const mealsBtn = document.getElementById("meals")
const tastesBtn = document.getElementById("tastes")
const animalsBtn = document.getElementById("animals")
const seaanimalsBtn = document.getElementById("seaanimals")
const bugsBtn = document.getElementById("bugs")
const natureBtn = document.getElementById("nature")
const monthsBtn = document.getElementById("months")

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
mealsBtn.addEventListener("click",() => beginSelection(mealsArr))
tastesBtn.addEventListener("click",() => beginSelection(tastesArr))
animalsBtn.addEventListener("click",() => beginSelection(animalsArr))
seaanimalsBtn.addEventListener("click",() => beginSelection(seaanimalsArr))
bugsBtn.addEventListener("click",() => beginSelection(bugsArr))
natureBtn.addEventListener("click",() => beginSelection(natureArr))
monthsBtn.addEventListener("click",() => beginSelection(monthsArr))

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
    gameBtnDisplay.className = "conceal-menu"
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
    gameBtnDisplay.classList.remove("conceal-menu")
    document.querySelectorAll(`.toggleOn`).forEach( (x) => {
    x.className = "toggleOff"
    })
})


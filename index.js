const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let allCharacters = []

let darkmode = false
let allowSymbols = false
let allowNumbers = false
let password1 = ""
let password2 = ""
let resultEl1 = document.getElementById("password-1")
let resultEl2 = document.getElementById ("password-2")

function generatePasswords() {
    if (allowNumbers === true && allowSymbols === true) {
        allCharacters = []
        allCharacters.push(numbers)
        allCharacters.push(letters)
        allCharacters.push(symbols)
        for (let i = 0; i < 13; i++) {
            let chosenArray = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            resultEl1.textContent += chosenArray[Math.floor(Math.random() * chosenArray.length)]
            chosenArray = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            resultEl2.textContent += chosenArray[Math.floor(Math.random() * chosenArray.length)] 
        }
        
    } else if (allowNumbers === false && allowSymbols === true) {
        allCharacters = []
        allCharacters.push(letters)
        allCharacters.push(symbols)
        for (let i = 0; i < 13; i++) {
            let chosenArray = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            resultEl1.textContent += chosenArray[Math.floor(Math.random() * chosenArray.length)] 
            chosenArray = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            resultEl2.textContent += chosenArray[Math.floor(Math.random() * chosenArray.length)]
        }
        
    } else if (allowNumbers === true && allowSymbols === false) {
        allCharacters = []
        allCharacters.push(letters)
        allCharacters.push(numbers)
        for (let i = 0; i < 13; i++) {
            let chosenArray = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            resultEl1.textContent += chosenArray[Math.floor(Math.random() * chosenArray.length)]
            chosenArray = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            resultEl2.textContent += chosenArray[Math.floor(Math.random() * chosenArray.length)] 
        }
        
    } else {
        for (let i = 0; i < 13; i++) {
            resultEl1.textContent += letters[Math.floor(Math.random() * letters.length)]
            resultEl2.textContent += letters[Math.floor(Math.random() * letters.length)] 
        }
    }
}

function displayPasswords() {
    password1 = ""
    password2 = ""
    resultEl1.textContent = ""
    resultEl2.textContent = ""
    allCharacters = []
    generatePasswords()   
}


function toggleSymbols() {
    if (allowSymbols === false) {
    getComputedStyle(document.documentElement)
        .getPropertyValue('--sliderSymbols'); // #999999
    document.documentElement.style
        .setProperty('--sliderSymbols', '19px');
    getComputedStyle(document.documentElement)
            .getPropertyValue('--sliderSymbolsBG'); // #999999
    document.documentElement.style
        .setProperty('--sliderSymbolsBG', '#10B981');
    allowSymbols = true
    } else {
        getComputedStyle(document.documentElement)
        .getPropertyValue('--sliderSymbols'); // #999999
    document.documentElement.style
        .setProperty('--sliderSymbols', '2px');
    getComputedStyle(document.documentElement)
            .getPropertyValue('--sliderSymbolsBG'); // #999999
    document.documentElement.style
        .setProperty('--sliderSymbolsBG', '#D5D4D8');
    allowSymbols = false
    }
}

function toggleNumbers() {
    if (allowNumbers === false) {
    getComputedStyle(document.documentElement)
        .getPropertyValue('--sliderNumbers'); // #999999
    document.documentElement.style
        .setProperty('--sliderNumbers', '19px');
    getComputedStyle(document.documentElement)
            .getPropertyValue('--sliderNumbersBG'); // #999999
    document.documentElement.style
        .setProperty('--sliderNumbersBG', '#10B981');
    allowNumbers = true
    } else {
        getComputedStyle(document.documentElement)
        .getPropertyValue('--sliderNumbers'); // #999999
    document.documentElement.style
        .setProperty('--sliderNumbers', '2px');
    getComputedStyle(document.documentElement)
            .getPropertyValue('--sliderNumbersBG'); // #999999
    document.documentElement.style
        .setProperty('--sliderNumbersBG', '#D5D4D8');
    allowNumbers = false
    }
}

function changeMode() {
    if (darkmode === true) {
        getComputedStyle(document.documentElement)
        .getPropertyValue('--backgroundColor'); // #999999
        document.documentElement.style
            .setProperty('--backgroundColor', '#ECFDF5');
        getComputedStyle(document.documentElement)
                .getPropertyValue('--textColor'); // #999999
        document.documentElement.style
            .setProperty('--textColor', '#2B283A');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--bodyColor'); // #999999
        document.documentElement.style
            .setProperty('--bodyColor', '#D5D4D8');
        darkmode = false
        let mode = document.getElementById("mode-toggle")
        mode.textContent = "dark_mode"    
    } else {
        getComputedStyle(document.documentElement)
        .getPropertyValue('--backgroundColor'); // #999999
        document.documentElement.style
            .setProperty('--backgroundColor', '#1F2937');
        getComputedStyle(document.documentElement)
                .getPropertyValue('--textColor'); // #999999
        document.documentElement.style
            .setProperty('--textColor', '#FFFFFF');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--bodyColor'); // #999999
        document.documentElement.style
            .setProperty('--bodyColor', '#1C1C1C');
        darkmode = true
        let mode = document.getElementById("mode-toggle")
        mode.textContent = "light_mode"
    }
}
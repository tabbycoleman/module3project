import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-adcc5-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "endorsements")


const publishBtn = document.getElementById("publish-btn")
const endorsement = document.getElementById("textbox")
const list = document.getElementById("feedback-database")

publishBtn.addEventListener("click", function(){ 
    let endorsementValue = endorsement.value
    
    push( endorsementsInDB, endorsementValue )
    
    list.innerHTML += `<li>${endorsementValue}</li>`
})



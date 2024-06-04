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
const fromField = document.getElementById("from")
const toField = document.getElementById("to")

publishBtn.addEventListener("click", function(){ 
    
    let endorsementValue = endorsement.value
    let fromValue = fromField.value
    let toValue = toField.value
    
    if(endorsementValue == 0){
        
        document.getElementById("textbox").style.border = "1px solid red";
        
        
    }
    
    else
    
    {
        document.getElementById("textbox").style.border = "none";
        push( endorsementsInDB, endorsementValue )
        list.innerHTML += `
         <li>
            <span class="bold">To ${toValue}</span>
            <span class= "paragraph"> 
                <br> <br> 
                ${endorsementValue} 
                <br> <br> 
            </span>
            <span class="bold">From ${fromValue}</span>
         </li> 
        `
        
    }
    
})
    
      


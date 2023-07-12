import {askTheAi} from "./BartendGPT.js";


document.getElementById('submitButton').addEventListener("click", printResult);


function printResult(){
    let mainContent = document.getElementById("main");
    let textBox = document.getElementById("input").value;

    mainContent.innerHTML +=  '<div class="addSection"><h1>' + textBox + '</h1></div>';

}

async function main() {
    let words = "what number comes after 424";
    let returnwords = await askTheAi(words);
    mainContent.innerHTML += returnwords;
  }


  
//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
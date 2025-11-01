const Btn1 = document.getElementById("btn1");
const Btn2 = document.getElementById("btn2");
const Btn3 = document.getElementById("btn3");
const Btn4 = document.getElementById("btn4");
const p1 = document.getElementById("answer");


Btn1.addEventListener("click",() =>{
    answer.textContent = "Vielen Dank, dass Sie mein Portfolio geöffnet haben. Ich bin Maher Ghazzawi und ich komme aus dem Libanon. Ich möchte eine Ausbildung als Fachinformatiker Anwendungsentwicklungs erlernen, weil ich App liebe."
    answer.classList.add("panswer");
    
})
Btn2.addEventListener("click",() =>{
    answer.textContent = "Ich bin 24 Jahre alt ich habe ein Fachabitur von dem Libanon absolviert. Ich habe auch in untschiedliche Berufe gearbeitet wie Pflege und Einzelhandlen. Allerdings hatte ich immer nur eine Interesse für IT."
    answer.classList.add("panswer");
    
})
Btn3.addEventListener("click",() =>{
    answer.textContent = "Ich kenne die Grundlagen von HTML also Header,nav,main,section,form,label... in CSS kann ich problemlos den Flex und Grid benutzen natürlich nebenbei Text,Bilde,Keyframe,Background bearbeiten. und in JS DOM und Data von API bearbeiten."
    answer.classList.add("panswer");
    
})
Btn4.addEventListener("click",() =>{
    answer.textContent = "Ich spreche 4 Sprachen Deutsch,English,Französich und Arabisch. Derzeit vertiefe ich meine deutsche Sprache, um C1 Nievau zu erreichen."
    answer.classList.add("panswer");
    
})
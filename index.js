const Btn1 = document.getElementById("btn1");
const Btn2 = document.getElementById("btn2");
const Btn3 = document.getElementById("btn3");
const Btn4 = document.getElementById("btn4");
const p1 = document.getElementById("answer");
const navbar = document.querySelector(".navbar");
const target = document.getElementById("target");

Btn1.addEventListener("click", () => {
  answer.textContent =
    "Vielen Dank für Ihr Interesse an meinem Portfolio. Mein Name ist Maher Ghazzawi und ich stamme aus dem Libanon. Ich strebe eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung an, da mich die Konzeption und Programmierung von Applikationen schon lange begeistert.";
  answer.classList.add("panswer");
});
Btn2.addEventListener("click", () => {
  answer.textContent =
    "Nach meinem Fachabitur im Libanon habe ich zunächst Erfahrungen in der Pflege sowie im Einzelhandel gesammelt. Trotz der Vielseitigkeit dieser Aufgaben blieb mein Interesse an der Informatik stets bestehen. Mit 24 Jahren möchte ich nun den nächsten Schritt gehen und meine Begeisterung für IT-Themen in einer Ausbildung zum Anwendungsentwickler professionalisieren.";
  answer.classList.add("panswer");
});
Btn3.addEventListener("click", () => {
  answer.textContent =
    "Ich verfüge über fundierte Grundkenntnisse in der Webentwicklung. In HTML5 bin ich sicher im Umgang mit semantischen Strukturen (wie Header, Nav, Section). Meine CSS3-Kenntnisse umfassen modernes Layouting mit Flexbox und Grid sowie Animationen mittels Keyframes. Darüber hinaus beherrsche ich in JavaScript die DOM-Manipulation und die Anbindung von APIs zur Datenverarbeitung.";
  answer.classList.add("panswer");
});
Btn4.addEventListener("click", () => {
  answer.textContent =
    "Neben meinen technischen Kenntnissen bringe ich eine hohe Sprachkompetenz mit: Ich spreche fließend Arabisch, Französisch und Englisch. Meine Deutschkenntnisse befinden sich aktuell auf einem soliden B2-Niveau, und ich arbeite derzeit zielstrebig daran, das C1-Niveau zu erreichen.";
  answer.classList.add("panswer");
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    navbar.style.background = "rgba(0, 12, 83, 1)";
  } else {
    navbar.style.background = "rgb(102,205,170)";
  }
});
let array = ["Website", "User App", "Password Ersteller", "Spiel"];
let wordindex = 0;
let letterindex = 0;
const createLetter = () => {
  const letter = document.createElement("span");
  letter.style.color = "salmon";
  target.appendChild(letter);
  letter.textContent = array[wordindex][letterindex];

   setTimeout(() => {
    letter.remove();
  }, 2800);
};
const loop = () => {
  setTimeout(() => {
    if (wordindex >= array.length) {
        wordindex = 0;
        letterindex = 0;
        loop();
    }
    else if (letterindex < array[wordindex].length) {
      createLetter();
      letterindex++;
      loop();
    } else {
      wordindex++;
      letterindex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();

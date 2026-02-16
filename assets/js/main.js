/*=============== MENU ===============*/
const NavMenu = document.getElementById("nav-menu");
const NavToggle = document.getElementById("nav-toggle");

// Hier erstelle ich mein Menu Taste : ich benutze die Methode addEventListener und das Event click!
NavToggle.addEventListener("click",() =>{
    NavMenu.classList.toggle("show-menu");
    NavToggle.classList.toggle("animate-toggle");
})


/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById("style-switcher");
const switcherToggle = document.getElementById("switcher-toggle");
const switcherClose = document.getElementById("switcher-close");
// Die Elemente sind erstellt und verbindet
// Hier add heißt, das ich show-switcher hinzufüge, remove heißt,dass ich es lösche 
switcherToggle.addEventListener("click",() =>{
    styleSwitcher.classList.add("show-switcher");
})
switcherClose.addEventListener("click",() =>{
    styleSwitcher.classList.remove("show-switcher")
})
/* Switcher show */
/*=============== THEME COLORS ===============*/
// ich ruffe alle class oder Fraben die .style-switcher-color haben, dann ich sage für jeder gibst du ein onclick function
// dann du nimmst die aktive Class also : const activeColor = color.style.getPropertyValue('--hue');
// 
const colors = document.querySelectorAll(".style-switcher-color");
colors.forEach((color) =>{
    color.onclick = () =>{
        const activeColor = color.style.getPropertyValue('--hue');

        colors.forEach((c) => c.classList.remove('active-color'));
        color.classList.add('active-color');
        document.documentElement.style.setProperty('--hue',activeColor)
    }
})
/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = 'light';
document.body.className = currentTheme;
document.querySelectorAll('input[name="body-theme"]').forEach((input) =>{
    input.addEventListener('change',() =>{
        currentTheme = input.value;
        document.body.className = currentTheme;
    })
})
// Email senden 
 const form = document.getElementById('contact-form');
  const button = document.getElementById('submit');
  const answer = document.getElementById('answer');

 form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Verhindere normale Form-Submission
    
    // Button deaktivieren
    button.textContent = 'Wird gesendet...';
    button.disabled = true;

    // Formulardaten sammeln
    const formData = new FormData(form);

    try {
      // Sende an Formspree
      const response = await fetch('https://formspree.io/f/mvzbrrop', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Erfolgreich!
        answer.style.display = 'block';
        form.reset(); // Formular leeren
      } else {
        alert('Fehler beim Senden. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      // Button wieder aktivieren
      button.textContent = 'Nachricht senden';
      button.disabled = false;
    }
  });

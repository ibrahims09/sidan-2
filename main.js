// kod från befintlig källa, javascript for dummies!

const modePreference = prompt("Vill du använda dark mode eller light mode? (Svara 'dark' eller 'light')");
let backgroundColor = "white";
let textColor = "black";
if (modePreference === "dark") {
  backgroundColor = "black";
  textColor = "white";
}
document.body.style.backgroundColor = backgroundColor;
document.body.style.color = textColor;



 // kod jag har skrivit!
window.addEventListener("load", function() {
  const popupText = "Om du är en Barça-supporter, var vänlig och lämna sidan.";
  alert(popupText);
});

document.addEventListener('DOMContentLoaded', async function () {
  const url = 'cv.json';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok, status: ${response.status}`);
    }

    const data = await response.json();

    // Loopa igenom arrayen och logga namnen
    data.forEach(item => {
      console.log(item.name);
    });

    // Skapa HTML-sträng för att visa data på sidan
    let htmlString = '';

    data.forEach(item => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          htmlString += `<p>${key}: ${item[key]}</p>`;
        }
      }
    });

    // Lägg till HTML-strängen direkt till body-elementet
    document.body.innerHTML += htmlString;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
});

//  JS CODE WAS LEARNED FROM VARIOUS RESORCES LIKE CODELABWEB.COM , JAVATPOINT.COM AND W3SCHOOLS.COM.

// MAIN START.........
// Get reference of celsious and fahrenheit
const celsius = document.querySelector("#celsius"),
    fahrenheit = document.querySelector("#fahrenheit");

    // read for celsius box
// window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2)
// get empty box for null in celsius box
    if(!celsius.value){
        fahrenheit.value = "";
    }
})
// Now , reverse process fahrenheit to celsius
fahrenheit.addEventListener('input',() => {
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(1)
    if(!fahrenheit.value){celsius.value = "";}
})

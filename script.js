


const styleCheckbox = document.getElementById("divStyle");

const textfields = document.getElementsByClassName("textfield");

const removeButton = document.querySelector(".remove-button");

const emptyDiv = document.querySelector(".empty-div");




function handleInputEvent(e) {
   
    console.log("Event från:", e.target, e.target.value);

   
    const fieldName = e.target.name;


    if (fieldName === "content") {
        emptyDiv.innerHTML = e.target.value;
    }
}


const colorInput = document.querySelector('input[name="color"]');


styleCheckbox.addEventListener("change", function () {
    const chosenColor = colorInput.value;

     
        emptyDiv.style.backgroundColor = chosenColor;
    
   
});



for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener("input", handleInputEvent);
    
}


removeButton.addEventListener("click", function () {
    
   
    emptyDiv.remove();
   
    
});
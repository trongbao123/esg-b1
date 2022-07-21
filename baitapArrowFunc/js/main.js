const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let loadButton = () => {

    let buttonList = "";
    colorList.map((color, index) => {
        if (index == 0) {
            buttonList += `
                <button class="color-button ${color} active" 
                onclick ="changeColor('${color}')" ></button>
            `

        } else {
            buttonList += `
            <button class="color-button ${color}" 
            onclick ="changeColor('${color}')"></button>
            `
        }
    });

    document.querySelector("#colorContainer").innerHTML = buttonList;
}

loadButton();

let changeColor = (color) => {
    document.querySelector("#house").className= `house ${color}`;
}

document.addEventListener('click',function(event){
    document.querySelectorAll('button').forEach(item => {
        item.classList.remove('active');
        event.target.classList.add('active');
    });
})



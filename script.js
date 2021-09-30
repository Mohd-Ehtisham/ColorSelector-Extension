let colorInput = document.querySelector('#color');
let textColor = document.querySelector('#textcolor');
let hexInput = document.querySelector('#hex');
let hextext = document.querySelector('#hextext');

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.backgroundColor = color;
});

textColor.addEventListener('input', () =>{
    let color = textColor.value;
    hextext.value = color;
    document.querySelector('h1').style.color = color;
});


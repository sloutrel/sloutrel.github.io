
let create = document.querySelector('.createColor');
create.addEventListener('click', function () {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    document.querySelector('body').style.background = `rgb(${num1}, ${num2}, ${num3})` //'rgb(num1, num2, num3);
    document.querySelector('h1').textContent = `Main Color: rgb(${num1}, ${num2}, ${num3})`

    let num4 = Math.floor(Math.random() * 255);
    let num5 = Math.floor(Math.random() * 255);
    let num6 = Math.floor(Math.random() * 255);
    document.querySelector('button').style.background = `rgb(${num4}, ${num5}, ${num6})` //'rgb(num1, num2, num3);
    document.querySelector('h2').textContent = `Accent Color: rgb(${num4}, ${num5}, ${num6})`

    const fontFamilies = [
        ['Amatic SC', 'cursive'],
        ['Architects Daughter', 'cursive'],
        ['Bebas Neue', 'cursive'],
        ['Cinzel', 'serif'],
        ['Cormorant Garamond', 'serif'],
        ['Dancing Script', 'cursive'],
        ['Inconsolata', 'monospace'],
        ['Indie Flower', 'cursive'],
        ['Lobster', 'cursive'],
        ['Montserrat', 'sans - serif'],
        ['Noto Sans TC', 'sans - serif'],
        ['Permanent Marker', 'cursive'],
        ['Playfair Display', 'serif'],
        ['Rajdhani', 'sans - serif'],
        ['Raleway', 'sans - serif'],
        ['Roboto', 'sans - serif'],
        ['Roboto Mono', 'monospace'],
        ['Source Code Pro', 'monospace']];

    let num7 = Math.floor(Math.random() * (fontFamilies.length - 1));
    let randFont = document.querySelector('body').style.fontFamily = fontFamilies[num7];
    document.querySelector('h3').textContent = `Font: ${randFont[0]}`;
    document.querySelector('button').style.fontFamily = fontFamilies[num7];
})


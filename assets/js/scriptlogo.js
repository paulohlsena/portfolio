const el = document.querySelector("#logo");
const text = "< paulo $ena />";
const interval = 200;

function showText(el, text, interval) {

    const char = text.split("").reverse();

    const typer = setInterval(() => {
        
        if(!char.length){
            return clearInterval(typer);
        }
        const next = char.pop();
        el.innerHTML += next;
    }, interval);
}

showText(el, text, interval);
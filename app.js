const container = document.querySelector('.container');


const careers = ["youtuber", "freelancer", "developer", "instructor"];

let i = 0;
let c = 0;

updateText()

function updateText() {
    container.innerHTML = `<h1>I am ${careers[i].slice(0,1) === "i" ? "an" : "a"} ${careers[i].slice(0,c)}</h1>`;
    
    c++;
    setTimeout(updateText, 200);
    if(c === careers[i].length +1){
        c=0;
        i++;
    }
    
    if(i === careers.length){
        i=0;
    }
}




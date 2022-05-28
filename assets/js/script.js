//Button definitions
let nineAMSubmit = document.getElementById('nineAMSubmit');
let tenAMSubmit = document.getElementById('tenAMSubmit');
let elevenAMSubmit = document.getElementById('elevenAMSubmit');
let twelvePMSubmit = document.getElementById('twelvePMSubmit');
let onePMSubmit = document.getElementById('onePMSubmit');
let twoPMSubmit = document.getElementById('twoPMSubmit');
let threePMSubmit = document.getElementById('threePMSubmit');
let fourPMSubmit = document.getElementById('fourPMSubmit');
let fivePMSubmit = document.getElementById('fivePMSubmit');
//Textarea defintions
let nineAMEntry = document.getElementById('nineAMEntry');
let tenAMEntry = document.getElementById('tenAMEntry');
let elevenAMEntry = document.getElementById('elevenAMEntry');
let twelvePMEntry = document.getElementById('twelvePMEntry');
let onePMEntry = document.getElementById('onePMEntry');
let twoPMEntry = document.getElementById('twoPMEntry');
let threePMEntry = document.getElementById('threePMEntry');
let fourPMEntry = document.getElementById('fourPMEntry');
let fivePMEntry = document.getElementById('fivePMEntry');


function saveSchedule9(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('nine',nineAMEntry.value)
}

function saveSchedule10(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('ten',tenAMEntry.value)
}

function saveSchedule11(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('eleven',elevenAMEntry.value)
}

function saveSchedule12(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('twelve',twelvePMEntry.value)
}

function saveSchedule1(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('one',onePMEntry.value)
}
function saveSchedule2(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('two',twoPMEntry.value)
}

function saveSchedule3(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('three',threePMEntry.value)
}

function saveSchedule4(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('four',fourPMEntry.value)
}

function saveSchedule5(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('five',fivePMEntry.value)
}

function init(){
    //checks local storage for previous entries and adds them to the page if there were some
    if(localStorage.getItem('nine')!==null){
        nineAMEntry.value = localStorage.getItem('nine');
    }
    if(localStorage.getItem('ten')!==null){
        tenAMEntry.value = localStorage.getItem('ten');
    }
    if(localStorage.getItem('eleven')!==null){
        elevenAMEntry.value = localStorage.getItem('eleven');
    }
    if(localStorage.getItem('twelve')!==null){
        twelvePMEntry.value = localStorage.getItem('twelve');
    }
    if(localStorage.getItem('one')!==null){
        onePMEntry.value = localStorage.getItem('one');
    }
    if(localStorage.getItem('two')!==null){
        twoPMEntry.value = localStorage.getItem('two');
    }
    if(localStorage.getItem('three')!==null){
        threePMEntry.value = localStorage.getItem('three');
    }
    if(localStorage.getItem('four')!==null){
        fourPMEntry.value = localStorage.getItem('four');
    }
    if(localStorage.getItem('five')!==null){
        fivePMEntry.value = localStorage.getItem('five');
    }
    //color codes each textarea based on the current time
    if(moment().format('H') === 9){
        nineAMEntry.classList.add('present')
    }else if(moment().format('H')>9){
        nineAMEntry.classList.add('past')
    }else{
        nineAMEntry.classList.add('future')
    }
    if(moment().format('H') === 10){
        tenAMEntry.classList.add('present')
    }else if(moment().format('H')>10){
        tenAMEntry.classList.add('past')
    }else{
        tenAMEntry.classList.add('future')
    }
    if(moment().format('H') === 11){
        elevenAMEntry.classList.add('present')
    }else if(moment().format('H')>11){
        elevenAMEntry.classList.add('past')
    }else{
        elevenAMEntry.classList.add('future')
    }
    if(moment().format('H') === 12){
        twelvePMEntry.classList.add('present')
    }else if(moment().format('H')>12){
        twelvePMEntry.classList.add('past')
    }else{
        twelvePMEntry.classList.add('future')
    }
    if(moment().format('H') === 13){
        onePMEntry.classList.add('present')
    }else if(moment().format('H')>13){
        onePMEntry.classList.add('past')
    }else{
        onePMEntry.classList.add('future')
    }
    if(moment().format('H') === 14){
        twoPMEntry.classList.add('present')
    }else if(moment().format('H')>14){
        twoPMEntry.classList.add('past')
    }else{
        twoPMEntry.classList.add('future')
    }
    if(moment().format('H') === 15){
        threePMEntry.classList.add('present')
    }else if(moment().format('H')>15){
        threePMEntry.classList.add('past')
    }else{
        threePMEntry.classList.add('future')
    }
    if(moment().format('H') === 16){
        fourPMEntry.classList.add('present');
    }else if(moment().format('H')>16){
        fourPMEntry.classList.add('past');
    }else{
        fourPMEntry.classList.add('future');
    }
    if(moment().format('H') === 17){
        fivePMEntry.classList.add('present')
    }else if(moment().format('H')>17){
        fivePMEntry.classList.add('past')
    }else{
        fivePMEntry.classList.add('future')
    }

}

init()


nineAMSubmit.addEventListener('click',saveSchedule9);
tenAMSubmit.addEventListener('click',saveSchedule10);
elevenAMSubmit.addEventListener('click',saveSchedule11);
twelvePMSubmit.addEventListener('click',saveSchedule12);
onePMSubmit.addEventListener('click',saveSchedule1);
twoPMSubmit.addEventListener('click',saveSchedule2);
threePMSubmit.addEventListener('click',saveSchedule3);
fourPMSubmit.addEventListener('click',saveSchedule4);
fivePMSubmit.addEventListener('click',saveSchedule5);
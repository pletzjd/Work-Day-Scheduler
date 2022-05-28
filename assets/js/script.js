//Button definitions
let nineAMSubmit = $('#nineAMSubmit');
let tenAMSubmit = $('#tenAMSubmit');
let elevenAMSubmit = $('#elevenAMSubmit');
let twelvePMSubmit = $('#twelvePMSubmit');
let onePMSubmit = $('#onePMSubmit');
let twoPMSubmit = $('#twoPMSubmit');
let threePMSubmit = $('#threePMSubmit');
let fourPMSubmit = $('#fourPMSubmit');
let fivePMSubmit = $('#fivePMSubmit');
//Textarea defintions
let nineAMEntry = $('#nineAMEntry');
let tenAMEntry = $('#tenAMEntry');
let elevenAMEntry = $('#elevenAMEntry');
let twelvePMEntry = $('#twelvePMEntry');
let onePMEntry = $('#onePMEntry');
let twoPMEntry = $('#twoPMEntry');
let threePMEntry = $('#threePMEntry');
let fourPMEntry = $('#fourPMEntry');
let fivePMEntry = $('#fivePMEntry');
//Current date definition
let date = $('#currentDay')


function saveSchedule9(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('nine',nineAMEntry.val())
}

function saveSchedule10(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('ten',tenAMEntry.val())
}

function saveSchedule11(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('eleven',elevenAMEntry.val())
}

function saveSchedule12(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('twelve',twelvePMEntry.val())
}

function saveSchedule1(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('one',onePMEntry.val())
}
function saveSchedule2(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('two',twoPMEntry.val())
}

function saveSchedule3(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('three',threePMEntry.val())
}

function saveSchedule4(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('four',fourPMEntry.val())
}

function saveSchedule5(event){
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem('five',fivePMEntry.val())
}

function init(){
    //Sets the p element in the header to display the current date
    let today = moment().format('dddd MMMM Do, YYYY')
    date.textContent = today
    //checks local storage for previous entries and adds them to the page if there were some
    if(localStorage.getItem('nine')!==null){
        nineAMEntry.val(localStorage.getItem('nine'));
    }
    if(localStorage.getItem('ten')!==null){
        tenAMEntry.val(localStorage.getItem('ten'));
    }
    if(localStorage.getItem('eleven')!==null){
        elevenAMEntry.val(localStorage.getItem('eleven'));
    }
    if(localStorage.getItem('twelve')!==null){
        twelvePMEntry.val(localStorage.getItem('twelve'));
    }
    if(localStorage.getItem('one')!==null){
        onePMEntry.val(localStorage.getItem('one'));
    }
    if(localStorage.getItem('two')!==null){
        twoPMEntry.val(localStorage.getItem('two'));
    }
    if(localStorage.getItem('three')!==null){
        threePMEntry.val(localStorage.getItem('three'));
    }
    if(localStorage.getItem('four')!==null){
        fourPMEntry.val(localStorage.getItem('four'));
    }
    if(localStorage.getItem('five')!==null){
        fivePMEntry.val(localStorage.getItem('five'));
    }
    //color codes each textarea based on the current time
    if(moment().format('H') === 9){
        nineAMEntry.addClass('present')
    }else if(moment().format('H')>9){
        nineAMEntry.addClass('past')
    }else{
        nineAMEntry.addClass('future')
    }
    if(moment().format('H') === 10){
        tenAMEntry.classList.add('present')
    }else if(moment().format('H')>10){
        tenAMEntry.addClass('past')
    }else{
        tenAMEntry.addClass('future')
    }
    if(moment().format('H') === 11){
        elevenAMEntry.addClass('present')
    }else if(moment().format('H')>11){
        elevenAMEntry.addClass('past')
    }else{
        elevenAMEntry.addClass('future')
    }
    if(moment().format('H') === 12){
        twelvePMEntry.addClass('present')
    }else if(moment().format('H')>12){
        twelvePMEntry.addClass('past')
    }else{
        twelvePMEntry.addClass('future')
    }
    if(moment().format('H') === 13){
        onePMEntry.addClass('present')
    }else if(moment().format('H')>13){
        onePMEntry.addClass('past')
    }else{
        onePMEntry.addClass('future')
    }
    if(moment().format('H') === 14){
        twoPMEntry.addClass('present')
    }else if(moment().format('H')>14){
        twoPMEntry.addClass('past')
    }else{
        twoPMEntry.addClass('future')
    }
    if(moment().format('H') === 15){
        threePMEntry.addClass('present')
    }else if(moment().format('H')>15){
        threePMEntry.addClass('past')
    }else{
        threePMEntry.addClass('future')
    }
    if(moment().format('H') === 16){
        fourPMEntry.addClass('present');
    }else if(moment().format('H')>16){
        fourPMEntry.addClass('past');
    }else{
        fourPMEntry.addClass('future');
    }
    if(moment().format('H') === 17){
        fivePMEntry.addClass('present')
    }else if(moment().format('H')>17){
        fivePMEntry.addClass('past')
    }else{
        fivePMEntry.addClass('future')
    }

}

init()


nineAMSubmit.on('click',saveSchedule9);
tenAMSubmit.on('click',saveSchedule10);
elevenAMSubmit.on('click',saveSchedule11);
twelvePMSubmit.on('click',saveSchedule12);
onePMSubmit.on('click',saveSchedule1);
twoPMSubmit.on('click',saveSchedule2);
threePMSubmit.on('click',saveSchedule3);
fourPMSubmit.on('click',saveSchedule4);
fivePMSubmit.on('click',saveSchedule5);
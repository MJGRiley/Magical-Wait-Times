const fantasyland = () =>{
   window.location = "/land/fantasyland"
}

const tomorrowland = () =>{
    window.location = "/land/tomorrowland"
}

const libertysquare = () =>{
    window.location = "/land/libertysquare"
}

const adventureland = () =>{
    window.location = "/land/adventureland"
}

const frontierland = () =>{
    window.location = "/land/frontierland"
}

document.querySelector('.fantasyland').addEventListener('click', fantasyland);
document.querySelector('.tomorrowland').addEventListener('click', tomorrowland);
document.querySelector('.libertysquare').addEventListener('click', libertysquare);
document.querySelector('.adventureland').addEventListener('click', adventureland);
document.querySelector('.frontierland').addEventListener('click', frontierland);
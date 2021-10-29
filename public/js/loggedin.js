
const fantasyland = () =>{
    window.location = "api/land/fantasyland"
}

const tomorrowland = () =>{
    window.location = "api/land/tomorrowland"
}

const libertysquare = () =>{
    window.location = "api/land/libertysquare"
}

const adventureland = () =>{
    window.location = "api/land/adventureland"
}
const frontierland = () =>{
    window.location = "api/land/frontierland"
}

document.querySelector('.fantasyland').addEventListener('click', fantasyland);
document.querySelector('.tomorrowland').addEventListener('click', tomorrowland);
document.querySelector('.libertysquare').addEventListener('click', libertysquare);
document.querySelector('.adventureland').addEventListener('click', adventureland);
document.querySelector('.frontierland').addEventListener('click', frontierland);



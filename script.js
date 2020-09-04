
function doSometing(){
    fetch("http://www.boredapi.com/apiactivity/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

doSometing();
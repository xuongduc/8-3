const heart = document.getElementById("main_heart");
const song = document.getElementById("song")

heart.addEventListener("click", (clicked));


function getIntRand(start, end){
    return Math.round(Math.random() * end) - start + 30;
}

function clicked(){
    heart.style.visibility = "hidden";
    song.play();
    for (let i = 0; i < 60; i++){
        let sub_heart = document.createElement("span");
        sub_heart.style.left = getIntRand(1, window.innerWidth) + 'px';
        sub_heart.style.top = getIntRand(1, window.innerHeight) + 'px';
        document.querySelector("body").appendChild(sub_heart)
        setTimeout(function(){
            sub_heart.remove();
            heart.style.visibility = "visible";
        }, 4000)
    }
    setTimeout(function(){
        for (let i = 0; i < 60; i++){
            let sub_heart = document.createElement("span");
            sub_heart.style.left = getIntRand(1,innerWidth ) + 'px';
            sub_heart.style.top = getIntRand(1, innerHeight) + 'px';
            document.querySelector("body").appendChild(sub_heart)
            setTimeout(function(){
                sub_heart.remove();
                heart.style.visibility = "visible";
            }, 4000)
    }          
    }, 100)
    
}

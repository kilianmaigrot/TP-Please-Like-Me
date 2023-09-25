let likeButtons = document.getElementsByClassName("likeButton")

function switchThumb (buttonArray) {
    for (let i = 0; i < buttonArray.length; i++) {
        
        let button = buttonArray[i]
        let imgThumb = button.childNodes[1]
        
        button.addEventListener("click", function() {  

            event.preventDefault();
            
            if (imgThumb.src.includes("unlike")) {
                imgThumb.src = "./img/miniature_like.png"
            }
            else {
                imgThumb.src = "./img/miniature_unlike.png"            
            }
            
        })
    }
}

switchThumb(likeButtons)
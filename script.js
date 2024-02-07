
const sort = document.querySelector(".sort-button")
const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)




    function tradeImgGif(){
        const imgGif = document.querySelector(".imgSort1")
        const resultbox = document.querySelector(".box-result")
            imgGif.src = "./assets/sort-2.gif"

            resultbox.style.display = "none"

            setTimeout(() => {
                imgGif.src = "./assets/sort-img.png"
            }, 1500);
    }

    function generateNumber(){
        const min = Math.ceil(document.querySelector(".input-min").value)
        const max = Math.floor(document.querySelector(".input-max").value)


        setTimeout(() => {
            if(max > min){
                const result = Math.floor(Math.random() * (max - min +1)) + min;
                const resultbox = document.querySelector(".box-result")
                const idNumber = document.querySelector("#number-result")
    
                resultbox.style.display = "flex"
                idNumber.innerHTML = result

            } else {
                alert("Erro: O valor minimo deve ser maior que o valor máximo.")
            }
        }, 1700);


    }

sort.addEventListener("click", tradeImgGif)
sort.addEventListener("click", generateNumber)


const closeButton = document.querySelector(".close-button")

function closebox(){
    const resultbox = document.querySelector(".box-result")

    resultbox.style.display = "none"
}

closeButton.addEventListener("click", closebox)
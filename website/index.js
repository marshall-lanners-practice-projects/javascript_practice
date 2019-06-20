let spans = document.querySelectorAll('span')

let regex = /help/i

for (let i = 0; i < spans.length; i++){
    let bool = regex.test(spans[i].innerText)
    
    if (bool === true){
        console.log(spans[i].innerText)
    }
}
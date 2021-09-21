
const btn = document.getElementsByClassName("btn")[0]
const items = [...document.querySelectorAll('.item')]


function selected() {

    let inputs = document.getElementsByClassName("if")
        

                for (let i = 0; i < inputs.length; i++) {
                    const input = inputs[i];

                    if (input.value === '' && input.hasAttribute('required')) {
                        alert('There are some required fields!');
                        return false; 
                    }continue
                    
                }
                alert('Order completed');
                return true; 

        
}




items.forEach(item => {
    let cantidad = item.querySelector('.i1')

    const more = item.querySelector('.more'),
        less = item.querySelector('.less')

    more.addEventListener('click', () => {
        cantidad.innerHTML = +cantidad.innerHTML + 1
        actualizar()
        
    })

    less.addEventListener('click', () => {
        if (+cantidad.innerHTML > 1) {
            cantidad.innerHTML = +cantidad.innerHTML - 1
            actualizar()
        }
    })
})



actualizar();


function actualizar(){

    const container = document.getElementById("a2")
    const items = container.getElementsByClassName("item")


    total = 0




    for ( let i = 0; i <  items.length; i++) {
        item = items[i]
        pic = item.getElementsByClassName("pic")[0]

        nmbr = pic.getElementsByClassName("nmbr")[0]
        quanItem = parseInt (nmbr.getElementsByClassName("i1")[0].innerText)
  
        desc = pic.getElementsByClassName("desc")[0]
        priceElement = desc.getElementsByClassName("price")[0].innerText.replace("$", " ")
        price = parseFloat(priceElement)
        

        total = total + (price * quanItem) + 19      


    }
    total = Math.round (total * 100) / 100
    document.getElementById("result").innerText = "$" + total
}


















let valueD = 60000;
let valueC = 0;
let spanD = document.getElementById('dirty')
let spanC = document.getElementById('clear')
const ourFunc = ()=>{
    if(valueD==0){
        clearInterval(timer)
        return
    }
    valueD = valueD - 1;
    valueC = valueC + 1;
    spanD.innerText=valueD;
    spanC.innerText=valueC;
}
const timer = setInterval(ourFunc,200)

document.getElementById('kitkat-btn').addEventListener('click', function(){
    const quantity = getInputFiedl('kitkat-field')
    const kitkatcost = quantity*100;
    getInnerText ('kitkat-price', kitkatcost)
        
})

document.getElementById('diary-btn').addEventListener('click', function(){
    const quantity = getInputFiedl('diary-field')
    const diarycost = quantity*50;
    getInnerText ('diary-price', diarycost)
    
})

document.getElementById('rose-btn').addEventListener('click', function(){
    const quantity = getInputFiedl('rose-field')
    const rosecost = quantity*150;

    getInnerText ('rose-price', rosecost)
})


function getInnerText (id, value){
    document.getElementById(id).innerText = value;
} 

function getInputFiedl(id) {
    const value = document.getElementById(id).value
    return parseFloat(value);

}
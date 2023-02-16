document.getElementById('kitkat-btn').addEventListener('click', function(){
    const kitkatfield = document.getElementById('kitkat-field')
    const kitkatvalue = kitkatfield.value;
    const sum = 100*kitkatvalue
    kitkatfield.value = ''
   
    
    const choclateField = document.getElementById('kitkat-price')
    const choclateValueString = choclateField.innerText
    const choclateValue = parseFloat(choclateValueString);
    choclateField.innerText = choclateValue + sum;

})

document.getElementById('diary-btn').addEventListener('click', function(){
    const diaryfield = document.getElementById('diary-field')
    const diaryvalue = diaryfield.value;
    const sum = 50*diaryvalue
    diaryfield.value = ''
   
    
    const diaryFieldPrice = document.getElementById('diary-price')
    const diaryValueString = diaryFieldPrice.innerText
    const diaryValuePrice = parseFloat(diaryValueString);
    diaryFieldPrice.innerText = diaryValuePrice + sum;

})

document.getElementById('rose-btn').addEventListener('click', function(){
    const rosefield = document.getElementById('rose-field')
    const rosevalue = rosefield.value;
    const sum = 150*rosevalue
    rosefield.value = ''
   
    
    const roseFieldprice = document.getElementById('rose-price')
    const roseValueString = roseFieldprice.innerText
    const roseValueprice = parseFloat(roseValueString);
    roseFieldprice.innerText = roseValueprice + sum;

})
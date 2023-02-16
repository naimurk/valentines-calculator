document.getElementById('kitkat-btn').addEventListener('click', function(){
    const kitkatfield = document.getElementById('kitkat-field')
    const kitkatvalue = kitkatfield.value;
    const sum = 100*kitkatvalue
   
    
    const choclateField = document.getElementById('kitkat-price')
    const choclateValueString = choclateField.innerText
    const choclateValue = parseFloat(choclateValueString);
    choclateField.innerText = choclateValue + sum;

})
document.getElementById('diary-btn').addEventListener('click', function(){
    const diaryfield = document.getElementById('diary-field')
    const diaryvalue = diaryfield.value;
    const sum = 50*diaryvalue
   
    
    const diaryFieldPrice = document.getElementById('diary-price')
    const diaryValueString = diaryFieldPrice.innerText
    const diaryValue = parseFloat(diaryValueString);
    diaryFieldPrice.innerText = diaryValue + sum;

})
document.getElementById('kitkat-btn').addEventListener('click', function(){
    const kitkatfield = document.getElementById('kitkat-field')
    const kitkatvalue = kitkatfield.value;
    const sum = 100*kitkatvalue
   
    
    const choclateField = document.getElementById('kitkat-price')
    const choclateValueString = choclateField.innerText
    const choclateValue = parseFloat(choclateValueString);
    choclateField.innerText = choclateValue + sum;

})
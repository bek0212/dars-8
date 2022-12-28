var elInp = document.querySelector('.inp')
var elList = document.querySelector('.list')
var elBtn = document.querySelector('.btn')

var inp2 = elInp.value

var arr = ['1:lilar','2:lilar','3:lilar','4:lilar','5:lilar',' 6 lilar','7 lilar','8 lilar','9 lilar','10 lilar','11 lilar','12 lilar','13 lilar','14 lilar','15 lilar','16 lilar','17 lilar','18 lilar','19 lilar','20 lilar','21 lilar','22 lilar','23 lilar','24 lilar','25 lilar','26 lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar','lilar',]

var nol = Number('0')

elBtn.addEventListener('click', function(evn){




for  ( var i=0; i<elInp.value; i++){
    var newLI = document.createElement('li')
    newLI.textContent = arr[i]
    elList.appendChild(newLI)
}




})

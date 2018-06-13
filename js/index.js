var i = 0;
function changeText() {

    var textArray = new Array('Auditor&iacute;a.','Adquisiciones.','Tecnolog&iacute;a.', 'Comunicaciones.','B2G Solutions.');
    document.getElementById('dynamicText').innerHTML = textArray[i];
    i++;
    if(i==textArray.length) i=0; 
}
window.onload = setInterval(changeText,2000);
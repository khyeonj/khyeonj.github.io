window.onload=function(){
    let bold=document.querySelector('#bold');
    let normal=document.querySelector('#normal');

    normal.onclick = function(){
        normal.style.fontWeight = 'bold';
        bold.style.fontWeight = 'normal';
        normal.style.color = '#454d52';
        bold.style.color = '#a4a7a9';
    }
}
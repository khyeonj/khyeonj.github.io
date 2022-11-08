window.onload=function(){
            
    let chk1 = document.f2.chk1;
    let chk2 = document.f2.chk2;
    let chk3 = document.f2.chk3;
    let chk4 = document.f2.chk4;
    document.f1.chk1.onclick=function(){ 
        if(chk1.checked==false){
            chk1.checked = true;
        }else{
            chk1.checked = false;
            return false;
        }
    }
    document.f1.chk2.onclick=function(){ 
        if(chk2.checked==false){
            chk2.checked = true;
        }else{
            chk2.checked = false;
            return false;
        }
    }
    document.f1.chk3.onclick=function(){ 
        if(chk3.checked==false){
            chk3.checked = true;
        }else{
            chk3.checked = false;
            return false;
        }
    }
    document.f1.chk4.onclick=function(){ 
        if(chk4.checked==false){
            chk4.checked = true;
        }else{
            chk4.checked = false;
            return false;
        }
    }
}
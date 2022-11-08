window.onload=function(){
    let sidebarMenu = document.querySelector("#sidebar_menu");
    let sidebarSearch = document.querySelector("#sidebar_search");
    let menubarSide = document.querySelector("#menubar_side");            
    let sidebarWrap = document.querySelector("#sidebarWrap");
    
    sidebarMenu.onclick=function(){                
        menubarSide.style.display='block';
    }
    menubarSide.onmouseleave=function(){
        this.style.display='none';
    }
    sidebarWrap.onmouseleave=function(){
        menubarSide.style.display='none';
    }

    document.querySelector('.search_txt').onfocus=function(){
        this.placeholder='';
    }
    document.querySelector('.search_txt').onblur=function(){
        this.placeholder='검색어를 입력하세요';
    }


    
    let searchIcon=document.querySelector('#search_icon');
    let searchTxt2=document.querySelector('.search_txt2');

    searchIcon.onclick = function(){
        searchTxt2.style.display='block';
    }
    searchTxt2.onmouseleave = function(){
        searchTxt2.style.display='none';
    }
}
let stars=document.getElementById('stars')
let moon=document.getElementById('moon')
let mountains3=document.getElementById('mountains3')
let mountains4=document.getElementById('mountains4')
let rivers=document.getElementById('rivers')
let boat=document.getElementById('boat')
let nouvil=document.querySelector('.nouvil')


// 
window.onscroll=function () {
    //  scrollY to get your position
    let value=scrollY;
    // console.log(value);
    stars.style.left=value+'px'

    moon.style.top=value*2 +'px'  
    
    mountains3.style.top=value + 'px'
    mountains4.style.top=value + 'px'
    rivers.style.top=value + 'px'
    boat.style.left=value*2 +'px'

    nouvil.style.fontSize=value+ 'px'
    if(scrollY>=70){
        nouvil.style.fontSize=70+ 'px'
        nouvil.style.position='fixed'
        if (scrollY>=421) {
            nouvil.style.display='none'
        }else{
            nouvil.style.display='block'
        }
        if (scrollY>430) {
            document.querySelector('.main').style.background='linear-gradient(#242a9b,#200016)'
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#200016)'

        }
    }
}

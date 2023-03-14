console.log("Script is running..............");
let hamburger=document.querySelector('.hamburger');
let linebar=document.querySelector('.fa-bars');
let crossbar=document.querySelector('.fa-xmark')
let sidebar=document.querySelector('.sidebar');
document.querySelector('.fa-xmark').style.display = 'none';
hamburger.addEventListener('click',()=>{
    sidebar.classList.toggle('sidebar-go');
    if( sidebar.classList.contains('sidebar-go')){
        crossbar.style.display='none'
        setTimeout(() => {
            
            linebar.style.display='inline'
        }, 300);
        
    } else{
     setTimeout(() => {
        
         crossbar.style.display='inline'
        }, 300);
        linebar.style.display='none'
        
    }
})

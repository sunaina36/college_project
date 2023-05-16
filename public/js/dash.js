console.log('jai');
const sideNavItem=document.querySelectorAll(".nav-items");
const sideNavItemInsideDiv=document.querySelectorAll(".nav-items .navItemDiv");
// console.log(sideNavItemInsideDiv);
const dashboard = document.querySelector('#dashboard');
const cards= document.querySelector('#cards');
// const transfer=document.querySelector('');
const transactionHistory = document.querySelector('#transaction-history');
const profile = document.querySelector('#Profile');
const transfer = document.querySelector('#transfer');
const changePassword = document.querySelector('#password-change');
const navArr=[dashboard,transfer,cards,transactionHistory,profile,changePassword];
sideNavItemInsideDiv[0].classList.add('clickedNavItem');
function sidenav(e){
    for(i=0;i<sideNavItemInsideDiv.length;i++){
        if(e==sideNavItem[i]){
            sideNavItemInsideDiv[i].classList.add('clickedNavItem');
            // console.log(navArr[i]);
            navArr[i].style.display='block';
        }
        else{
            // console.log(sideNavItemInsideDiv[i].classList);
            if( sideNavItemInsideDiv[i].classList.contains('clickedNavItem')){
                console.log(sideNavItemInsideDiv[i].classList);
                sideNavItemInsideDiv[i].classList.remove('clickedNavItem');
            }
            navArr[i].style.display='none';
        }
    }
}

const form = document.querySelector('.profileform');
const profileImage = document.querySelector('#profileImage');
function submitFormOnChange(e){
    e.value="";
    profileImage.addEventListener('change',()=>{
        console.log('a');
        form.submit();
    })
}
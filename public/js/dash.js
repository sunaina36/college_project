console.log('jai');
const sideNavItem=document.querySelectorAll(".nav-items");
const sideNavItemInsideDiv=document.querySelectorAll(".nav-items div");
// console.log(sideNavItemInsideDiv);
const dashboard = document.querySelector('#dashboard');
const cards= document.querySelector('#cards');
// const transfer=document.querySelector('');
const transactionHistory = document.querySelector('#transaction-history');
const profile = document.querySelector('#Profile');
const transfer = document.querySelector('#transfer');
const navArr=[dashboard,transfer,cards,transactionHistory,profile];
sideNavItemInsideDiv[0].classList.add('clickedNavItem');
function sidenav(e){
    for(i=0;i<sideNavItem.length;i++){
        if(e==sideNavItem[i]){
            sideNavItemInsideDiv[i].classList.add('clickedNavItem');
            // console.log(navArr[i]);
            navArr[i].style.display='block';
        }
        else{
            sideNavItemInsideDiv[i].classList.remove('clickedNavItem');
            navArr[i].style.display='none';
        }
    }
}
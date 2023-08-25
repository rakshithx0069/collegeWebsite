const dept=document.querySelector('.department');
const dropdown=document.querySelector('.dropdown');
const body=document.querySelector('.body');
dept.addEventListener("mouseenter",()=>{
    dropdown.style.display='block';
});

body.addEventListener("mouseenter",()=>{
    dropdown.style.display='none';
});
console.log(dept);
console.log(dropdown);
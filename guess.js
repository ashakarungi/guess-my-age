window.onload = function(){

let ch = document.getElementsByTagName("input"); 

let age = 0;

clik= ()=>{

for(let j=0;j<6;j++){

if(ch[j].checked===true){

age += Number(t1[j].innerHTML);

}
}

return alert(`YOU ARE ${age} YEARS OLD!`);

}
};

/*

_CREATED_BY_ashaKARUNGI™️

*/

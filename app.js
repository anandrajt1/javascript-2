// IN CONSOLE

// let n=prompt("entre a postive interger")

// p=1;

// for(let i=1;i<=n;i++)
// {
//   p=p*i;  
// }
// console.log(+p)


// USER INTRACTION
p=1;
document.getElementById('btn').onclick=function(){
    let n=document.getElementById('inp').value
    if(n>0){
        for(let i=1;i<=n;i++)
    {
        p=p*i;
    }
    document.getElementById('result').innerHTML="factorial is "+p 
    }
    else{
        document.getElementById('result').innerHTML="are u stupid??enter a postive integer!!"
    }
    // to clear input field after submitting
    document.getElementById('inp').value=""
    
}
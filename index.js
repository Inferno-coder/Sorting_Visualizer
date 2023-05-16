let randomize_array=document.getElementById("randomize_array_btn");
let sort_btn=document.getElementById("sort_btn");
let bars_container=document.getElementById("bars_container");
let minrange=2;
let maxrange=20;
let numofbars=30;
let unsortedarray=new Array(numofbars);
function randomnum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

randomize_array.addEventListener("click",function(){
    let sound=document.getElementById("ran_click");
    sound.play();
    createrandomarray();
    bars_container.innerHTML="";
    renderbars(unsortedarray);
});
//creating random array to generate bars
function createrandomarray()
{
for(let i=0;i<numofbars;i++){
    unsortedarray[i]=randomnum(minrange,maxrange);
}
}
document.addEventListener("DOMContentLoaded",function(){
    createrandomarray();
    renderbars(unsortedarray);
});
function renderbars(array)
{
    for(let i=0;i<array.length;i++)
    {
        let bar=document.createElement("div");
        bar.classList.add("bar");
        bar.style.height=array[i]*10+"px";
        bars_container.appendChild(bar);
    }
}



function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function bubbleSort(array)
{
let bars=document.getElementsByClassName("bar");
for(let i=0;i<array.length;i++){
for(let j=0;j<array.length-i-1;j++){
    if(array[j]>array[j+1]){
        for(let k=0;k<bars.length;k++)
        {
            if(k!==j && k!==j+1)
            {
                bars[k].style.backgroundColor="black";
                bars[k].border="1px solid red";
                bars[k].style.boxShadow="1px 2px 7px gold ";
            }
        }
        let temp=array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
        bars[j].style.height=array[j]*10+"px";
        bars[j].style.backgroundColor="lightgreen";
        bars[j].style.boxShadow="5px 5px 8px blue"
        bars[j+1].style.height=array[j+1]*10+"px";
        bars[j+1].style.backgroundColor="lightgreen";
        bars[j+1].style.boxShadow="5px 5px 8px blue"
        await sleep(50);
    
    }
}
//bars[j+1].style.backgroundColor="black";
await sleep(50);
}
let sound=document.getElementById("complete");
    sound.play();
return array;
}
sort_btn.addEventListener("click",function(){
    let sorted_array=bubbleSort(unsortedarray);
    console.log(sorted_array);
});



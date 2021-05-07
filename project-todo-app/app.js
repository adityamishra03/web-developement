(function(){
let inputitem=document.querySelector("#input");
inputitem.onkeyup=function(e){
    if (e.keyCode === 13){
        if(inputitem.value){

            additem(inputitem);
        }
    }
};

function additem(item){
    let ul=document.querySelector("#list");
        let li=document.createElement("li");
        let textNode = document.createTextNode(inputitem.value);
        li.appendChild(textNode);
        ul.appendChild(li);
        inputitem.value='';



        li.onclick = function(e){
            e.target.remove();
        };

}

})();
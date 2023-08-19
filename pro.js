let add = document.querySelector('.add');
let input = document.querySelector('.inp');
let tasks = document.querySelector('.tasks');

let completeCount = document.querySelector('.completeCount span').innerHTML;
let tasksCount = document.querySelector('.tasksCount span').innerHTML;

add.onclick=function(){
    if(input.value===''){

    }
    else{
        let val = input.value;
        let maindiv = document.createElement('div');
        maindiv.classList ='task';
        maindiv.setAttribute('data-index',tasksCount)

        let content = document.createElement('div');
        content.classList = 'content'
        content.appendChild(document.createTextNode(val));
        let buttondel =document.createElement('button');
        buttondel.classList= 'del';
        buttondel.appendChild(document.createTextNode('Delete'));
        tasks.appendChild(maindiv);
        maindiv.appendChild(content);
        maindiv.appendChild(buttondel);
    tasksCount++;
    document.querySelector('.tasksCount span').innerHTML=tasksCount;
    }
}


document.addEventListener('click',function(e){
    if(e.target.className=== 'del'){

        document.querySelector(`[data-index = "${e.target.parentElement.getAttribute('data-index')}"]`).remove()
        tasksCount--;
        document.querySelector('.tasksCount span').innerHTML=tasksCount;

    }
})


document.addEventListener('click',function(e){
    if(e.target.className=== 'content'){
        completeCount++;
        document.querySelector('.completeCount span').innerHTML= completeCount;
    }
})

let btndelAll = document.querySelector('.delAll')
let btncompAll = document.querySelector('.compAll')

btndelAll.onclick = function(){
    if(tasks.children){
        let all = document.querySelectorAll('.tasks .task');
    
        all.forEach((e)=>{
        
            e.remove();
            document.querySelector('.tasksCount span').innerHTML=0;
            
        })
    }

}






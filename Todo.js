
document.querySelector(".add").addEventListener("click",function(){
        var input = document.getElementById("input-box").value;
        if(input === ''){
                alert("put a task");
                return;
        }
        var result = document.querySelector(".task");
        var taskitem = document.createElement('div');
        taskitem.innerHTML = 
        `<span>${input}</span>
        <button class="close-btn">X</button>`;
        result.appendChild(taskitem);
        document.getElementById("input-box").value = ''; 
        var close = taskitem.querySelector(".close-btn");
                close.addEventListener("click",function(){
                        this.parentNode.remove();
                });
});

document.addEventListener("keypress",function(event){
        if(event.key === 'Enter'){
        var input = document.getElementById("input-box").value;
        if(input === ''){
                alert("put a task");
                return;
        }
        var result = document.querySelector(".task");
        var taskitem = document.createElement('div');
        taskitem.innerHTML = 
        `<span>${input}</span>
        <button class="close-btn">X</button>`;
        result.appendChild(taskitem);
        document.getElementById("input-box").value = ''; 
        var close = taskitem.querySelector(".close-btn");
                close.addEventListener("click",function(){
                        this.parentNode.remove();
                });
}
});
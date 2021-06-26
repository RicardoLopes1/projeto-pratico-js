var tarefas = []
var tarefa = document.getElementById('adicionar')
var note = document.getElementById('notes')
var btnAdd = document.getElementById('btnadd')
btnAdd.onclick = adicionarTarefa;
var j = 0;

function adicionarTarefa(){
    if(tarefa.value != ''){
        j = tarefas.length;
        tarefas.push(`<br/><div id="atividade${j}" class="tarefas" onclick="concluir(${j})">${tarefa.value}<input type="button" value="X" id="btn" onclick="apagarTarefa(${j})"/></div> `);
        note.innerHTML += tarefas[tarefas.length - 1];
        tarefa.value = '';
        
    } 
}

function apagarTarefa(index){
    note.innerHTML = ` `;
    tarefas[index] = '';
    for(var i = 0; i < tarefas.length; i++){
        note.innerHTML += tarefas[i];
    }
    
}


function concluir(index){
    var div = document.getElementById('atividade'+index) 
    
    if(div.style.backgroundColor == 'rgb(14, 252, 73)'){
        div.style.backgroundColor = 'rgb(18, 132, 185)'
    }else{
        div.style.backgroundColor = 'rgb(14, 252, 73)'
    }
}
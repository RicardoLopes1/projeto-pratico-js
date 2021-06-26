var tarefas = []
var tarefa = document.getElementById('adicionar')
var note = document.getElementById('notes')
var btnAdd = document.getElementById('btnadd')
btnAdd.onclick = adicionarTarefa;
var j = 0;
var flag = 0;

function adicionarTarefa() {
    if (tarefa.value != '') {
        j = tarefas.length;
        tarefas.push(`<br/><div id="atividade${j}" class="tarefas0" onclick="concluir(${j})">${tarefa.value}<input type="button" value="X" id="btn" onclick="apagarTarefa(${j})"/></div> `);
        note.innerHTML += tarefas[tarefas.length - 1];
        tarefa.value = '';

    }
}

function apagarTarefa(index) {
    note.innerHTML = ` `;
    tarefas[index] = '';
    for (var i = 0; i < tarefas.length; i++) {
        note.innerHTML += tarefas[i];
    }

}


function concluir(index) {
    if (tarefas[index].indexOf("tarefas0") > -1) {
        tarefas[index] = tarefas[index].replace("tarefas0", "tarefas1");
    } else {
        tarefas[index] = tarefas[index].replace("tarefas1", "tarefas0");
    }
    note.innerHTML = ``;
    for (var i = 0; i < tarefas.length; i++) {
        note.innerHTML += tarefas[i];
    }
}
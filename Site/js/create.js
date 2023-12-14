function CreatePessoa(){
    const primeiroNome = document.getElementById('firstName').value;
    const SegundoNome = document.getElementById('middleName').value;
    const ÚltimoNome = document.getElementById('lastName').value;
    const CPF = document.getElementById('cpf').value;

    const data = {
        primeiroNome: primeiroNome,
        nomeMeio: SegundoNome,
        ultimoNome: ÚltimoNome,
        cpf: CPF

    }

    fetch('https://localhost:7223/api/Pessoa/Create',{

    method:'POST',
    headers:{
    'Content-Type': 'application/json'
    },
    body: JSON.stringify (data)
    }).then(Response => {
    if(!Response.ok){
        alert("Erro ao criar pessoa");
    }
    alert("pessoa criada com sucesso!");
    window.location.href = '../index.html';
})
}
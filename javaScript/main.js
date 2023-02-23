
const cepValido = (cep) => {
    if (cep.length = 8) { 
        return true;
    } else {
        return false;
    }
}


const preencherForm = (endereco) =>{

    let bairroInput = document.getElementById('bairro');
    bairroInput.value = endereco.bairro;

    let cidadeInput = document.getElementById('cidade');
    cidadeInput.value = endereco.localidade;

    let ufInput = document.getElementById('estado');
    ufInput.value = endereco.uf;


}

const getApiJson = async() => {

    let cep = document.getElementById('cep').value;
    console.log(cep);
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    console.log(url);
    console.log(cep);
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        console.log(endereco);
        preencherForm(endereco);
    }
    
}

const addEventoOnCepInput = () =>{
    let cepInput = document.getElementById('cep');
    cepInput.addEventListener('focusout',getApiJson);
}

addEventoOnCepInput();

const enviarDados = () => {

    let bairro = [document.getElementById('bairro').value,
    document.getElementById('cidade').value,
    document.getElementById('estado').value,
    document.getElementById('email').value,
    document.getElementById('cpf').value,
    document.getElementById('nome').value,
    document.getElementById('sobrenome').value,
    document.getElementById('cep').value,
    document.getElementById('numero').value]

    let pessoa = new Object();

    pessoa.bairro = bairro[0];
    pessoa.cidade = bairro[1];
    pessoa.estado = bairro[2];
    pessoa.email = bairro[3];
    pessoa.cpf = bairro[4];
    pessoa.nome = bairro[5];
    pessoa.sobrenome = bairro[6];
    pessoa.cep = bairro[7]
    pessoa.numero = bairro[8];

    let jsonPessoa = JSON.stringify(pessoa);

    console.log(jsonPessoa.valueOf());

    let saida = document.getElementById('Saida');
    saida.innerHTML = "";

    for(let i = 0; i < bairro.length;i++){
        let div = document.createElement('div')
        div.append(bairro[i]);
        saida.append(div);
    }

    window.print();

}

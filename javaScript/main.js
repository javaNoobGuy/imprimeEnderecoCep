
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





}

const getApiJson = async(cep) => {

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
    cepInput.addEventListener('focusout',getApiJson(document.getElementById('cep').value));
}

addEventoOnCepInput();

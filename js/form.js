
//class contato

class contato {

    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }

}

function Post(form) {
    event.preventDefault();

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value);

    Enviar(data);
    form.reset();

}

function Enviar(data) {
    if (!data.nome || !data.email) {
        alert("Por favor, preencha nome e email.");
        return;
    }

    if (!data.email.includes('@') || !data.email.includes('.')) {
        alert("Email inválido.");
        return;
    }

    alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    console.log("Dados enviados:", data);
}


// Adicionando efeito personalizado via JavaScript 
document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('mouseover', () => {
        input.style.border = '2px solid #007bff'; // Altera a cor da borda
        input.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)'; // Adiciona sombra
    });

    input.addEventListener('mouseout', () => {
        input.style.border = '2px solid #ccc'; // Restaura a cor original
        input.style.boxShadow = 'none'; // Remove a sombra
    });
});
function mudaTexto() {
    console.log('Entrei na funcao mudaTexto()');
    // alert('minha funcao mudaTexto()');
    // como acessar um elemento de nosso HTML?
    // classe DOCUMENT tem acesso a toda estrutura da
    // da árvore do DOM do HTML
    var elementoP = document.getElementById('info');
    console.log('Estrutura do Elemento P ',elementoP);
    elementoP.innerHTML = 'Novo Texto Javascript JS.';

    document.getElementById('infoP').innerHTML = 'TROCADO';
    console.log('Sai da funcao mudaTexto()');
}
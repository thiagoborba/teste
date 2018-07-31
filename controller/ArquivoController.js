class ArquivoController {

  constructor() {

    let $ = document.querySelector.bind(document);

    this._inputDados = $('.dados-arquivo');
  }

  envia() {
      let arquivo = this._criaArquivo(this._inputDados)
      this._limpaFormulario();
      consoloe.log(arquivo);
  }

  _limpaFormulario() {
      this._inputDados.value = '';
      this._inputDados.focus();
  }

  _criaArquivo(dados){
  
    return new Arquivo(this._formataDados(dados));
  }

  _formataDados(dados){

    return dados.toUpperCase().split('/')
  }
}
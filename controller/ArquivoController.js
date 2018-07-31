class ArquivoController {

  constructor() {

  let $ = document.querySelector.bind(document);

  this._inputDados = $('.dados-arquivo');
  }

  envia() {
    let arquivo = ArquivoHelper.cria(this._inputDados.value);
    this._limpaFormulario();
    console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`)
  }

  _limpaFormulario() {
    this._inputDados.value = '';
    this._inputDados.focus();
  }
}
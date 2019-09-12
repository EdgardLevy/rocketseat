//classe pai
class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

//faz uma heranca de list
class TodoList extends List {
  //qdo se cria o metodo construor em uma classe filha
  //eh recomendado que dentro do metodo constructor, execute o metodo super()
  constructor() {
    super();
    this.usuario = "Diego";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function() {
  MinhaLista.add("teste");
  MinhaLista.mostraUsuario();
};

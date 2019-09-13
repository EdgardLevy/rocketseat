import api from "./api";
class App {
  constructor() {
    this.repositories = [];
    this.formEL = document.getElementById("repo-form");
    this.listEL = document.getElementById("repo-list");
    this.inputEl = document.querySelector("input[name=repository]");
    this.registerHandlers();
  }
  registerHandlers() {
    //this.formEL.onsubmit = event => this.addRespository(event);
    this.formEL.onsubmit = event => this.getUserRepositories(event);
  }

  setLoading(loading = true) {
    if (loading) {
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando..."));
      loadingEl.setAttribute("id", "loading");
      this.formEL.appendChild(loadingEl);
    } else {
      document.getElementById("loading").remove();
    }
  }

  async getUserRepositories(event) {
    event.preventDefault();
    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) return;
    this.setLoading();
    try {
      //pega todos os repositorios do usuario
      const response = await api.get(`/users/${repoInput}/repos`);
      //console.log(response);

      const repos = [...response.data];

      //repos.forEach(async repo => {
      for (let index = 0; index < repos.length; index++) {
        const repo = repos[index];

        try {
          const {
            name,
            description,
            html_url,
            owner: { avatar_url }
          } = repo;

          this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
          });
        } catch (error) {
          console.error(error);
        }
      }
      this.render();
    } catch (error) {
      console.error(error);
      alert(
        "O repositório/usuario não existe; (ou pode ser outra coisa... :-)"
      );
    }
    this.setLoading(false);
  }

  async addRespository() {
    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });
      this.inputEl.value = "";
      this.render();
    } catch (error) {
      alert("O repositório não existe");
    }
    this.setLoading(false);
    //console.log(this.repositories);
  }
  render() {
    this.listEL.innerHTML = "";
    //loop no array sem alteracao nos itens
    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEL.appendChild(listItemEl);
    });
  }
}

new App();

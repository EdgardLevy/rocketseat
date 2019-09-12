// class Github {
//   static getRepositories(repo) {
//     axios
//       .get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(err => {
//         console.log("Repositório não existe");
//       });
//   }
// }
// Github.getRepositories("rocketseat/rocketseat.com.br");
// Github.getRepositories("rocketseat/dslkvmskv");
// const buscaUsuario = usuario => {
//   axios
//     .get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log("Usuário não existe");
//     });
// };
// buscaUsuario("diego3g");
const axios = require("axios");
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (error) {
      console.log("Repositório não existe");
    }
  }
}
Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv");
Github.getRepositories("EDevLevy/rocketseat");

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (error) {
    console.log("Usuário não existe");
  }
};
buscaUsuario("diego3g");

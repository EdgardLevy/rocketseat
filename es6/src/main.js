import axios from "axios";

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `http://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

Api.getUserInfo("EdevLevy");

import axios from "axios";

export default class UserService {

  static getUsers (payload) {
    let data = []
    axios.get('https://jsonplaceholder.typicode.com/users', {})
      .then((response) => {
        data.push(...response.data)
      })
    return data
  }

}

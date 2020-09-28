import axios from "axios";
import {of, tap} from "rxjs";


export default class UserService {

  static getUsers (payload) {
    let data = []
    axios.get('https://jsonplaceholder.typicode.com/users', {})
      .then((response) => {
        data.push(...response.data)
      })
    return data
  }

  static getUserObservable(payload) {
    of(payload).toPromise()
  }

}

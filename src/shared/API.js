import { URL } from "./constants";

class API {
  post(path, headers, body) {
    return fetch(URL + path, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => response.json());
  }
}

export default new API();

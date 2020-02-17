class Http {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  static request(method = 'GET', url, body = '') {
    if (body) {
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
      if (xhr.status !== 200) {
        // analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else {
        // show the result
        console.log(xhr.response); // responseText is the server
      }
    };
  }

  static get(url = 'https://jsonplaceholder.typicode.com/todos') {
    return Http.request('GET', url);
  }

  static post(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    return null;
  }

  static put(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    return null;
  }

  static patch(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', url, true);
    return null;
  }

  static delete(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);
    return null;
  }
}

export default Http;

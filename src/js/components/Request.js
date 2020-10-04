export default class Request {
  constructor (name, link, description) {
    this.port = 'https://d-store-dev-omega.herokuapp.com'
    this.type = 'GET'
    this.name = name;
    this.link = link;
    this.description = description;
    this.headers = [];
    this.body = [];
    this.className = 'chip blue';
    this.classNameBackground = 'background-blue-light' 
  }

  get pathname () {
    return this.port + this.link;
  }

  setHeader (name, value) {
    return this.headers.push({ name, value });
  }

  json (content) {
    return JSON.stringify(content);
  }
}
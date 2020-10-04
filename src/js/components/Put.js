import Request from './Request';

export default class Put extends Request {
  constructor (name, link, description) {
    super (name, link, description);
    this.type = 'PUT'
    this.className = 'chip orange';
    this.classNameBackground = 'background-orange-light'; 
  }

  setBody (name, value) {
    return this.body.push({ name, value })
  }
} 
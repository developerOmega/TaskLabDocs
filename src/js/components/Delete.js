import Request from './Request';

export default class Delete extends Request {
  constructor (name, link, description) {
    super (name, link, description);
    this.type = 'DELETE';
    this.className = 'chip red';
    this.classNameBackground = 'background-red-light';
  }
}
import '../scss/style.scss'

import Vue from 'vue'
import App from '../components/App.vue'
import Get from '../js/components/Get'

new Vue ({
  de: '#app',
  components: { App },
  template: '<App/>'
}).$mount('#app')

const product = new Get('Todos los productos', '/products', 'Mostrar todos los productos de API');
product.setHeader('Authorization', 'TOKENTOKENTOKEN123DKSLDJFSD;LFKJ;LAKDJFLKSFLKSJHDFLKJSHFDKSAJDHFLKASJHFDLKAJSHFD');

const jsonProduct = product.json({
  ok: true,
  data: {
    id: 1,
    name: 'Daniel',
    email: 'daniel@mail.com',
    coutry: 'Mexico',
    age: 22
  }
});
console.log(jsonProduct)
console.log(product.headers, product.type)

window.Vue = require('vue');
import Buefy from 'buefy';

Vue.use(Buefy);

Vue.component(Buefy.Checkbox.name, Buefy.Checkbox)
Vue.component(Buefy.Table.name, Buefy.Table)
Vue.component(Buefy.Switch.name, Buefy.Switch)


var app = new Vue({
      el: '#app',
      data: {
      }
 });
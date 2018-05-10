import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Contacts from './pages/Contacts.vue'
import AddContact from './pages/AddContact.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/contacts' },
  { path: '/contacts', component: Contacts, name: 'contacts' },
  { path: '/add-contact', component: AddContact, name: 'add-contact'},
  { path: '/contacts/:id', component: Contacts, name: 'contact-details' },
  { path: '/edit-contact/:id', component: AddContact, name: 'edit-contact'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// Global mixin
Vue.mixin({
  created(){
    console.log('Global mixin')
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

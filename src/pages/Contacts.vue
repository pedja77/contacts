<template>
  <div class="container">
      <div class="row">
          <div class="col-6">
              <ContactsList :contacts="contacts"/>
          </div>
          <div class="col-6">
              <ContactDetails :contact="routeContact" @deleted="refreshContacts" :contacts="contacts"/>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

import ContactsList from '../components/ContactsList.vue'
import ContactDetails from '../components/ContactDetails.vue'
import { contact } from '../services/ContactService'

export default {
    components: {
        ContactsList,
        ContactDetails
    },
    created() {
        console.log(this.getContacts())
    },
    data() {
        return {
            contacts: []
        }
    },
    computed: {
        routeContact() {
            return this.contacts.find(contact => contact.id === this.$route.params.id)
        }
    },
    methods: {
        getContacts() {
            // axios.get('https://api.randomuser.me/')
            //     .then(response => {
            //        // console.log(response)
            //         let contact = {}
            //         contact.id = response.data.results[0].id.name
            //         contact.name = response.data.results[0].name.first
            //         contact.email = response.data.results[0].email
            //         contact.number = response.data.results[0].cell 
            //         this.contacts.push(contact)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })

            // axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'

            // axios.post('/posts', {
            //     body: {firstName: 'Pedja'}
            // }).then(response => console.log(response))
            //   .catch(error => console.log(error))

            contact.getContacts()
                .then(response => this.contacts = response.data)
        },
        refreshContacts(id) {
            console.log(id)
            this.contacts = this.contacts.filter(contact => contact.id != id)
        }
    }
}
</script>


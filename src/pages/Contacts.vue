<template>
  <div class="container">
      <div class="row">
          <div class="col-6">
              <ContactsList :contacts="contacts"/>
          </div>
          <div class="col-6">
              <ContactDetails :contact="routeContact"/>
          </div>
      </div>
  </div>
</template>

<script>
import ContactsList from '../components/ContactsList.vue'
import ContactDetails from '../components/ContactDetails.vue'

export default {
    components: {
        ContactsList,
        ContactDetails
    },
    data() {
        return {
            contacts: [
                { id: 1, name: 'John Doe', email: 'jd@example.net', number: '555-555-1234'},
                { id: 2, name: 'Richard Stallman', email: 'rms@example.net', number: '555-555-4321' },
                { id: 3, name: 'Eric S. Raymonds', email: 'esr@example.net', number: '555-555-2345' }
            ]
        }
    },
    computed: {
        routeContact() {
            return this.contacts.find(contact => contact.id === this.$route.params.id)
        }
    }
}
</script>


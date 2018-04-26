<template>
  <div class="container">
      <div class="row">
          <div class="col">
              <ContactsList :contacts="contacts"/>
          </div>
          <div class="col-8">
              <ContactDetails />
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
                { name: 'John Doe'},
                { name: 'Richard Stallman' },
                { name: 'Eric S. Raynolds' }
            ]
        }
    }
}
</script>


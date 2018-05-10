<template>
  
    <div class="card">
      <ul class="list-group list-group-flush" v-if="contact">
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ contact.first_name }} {{ contact.last_name }}</li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> {{ contact.email }}</li>
        <li class="list-group-item"><i class="fas fa-phone fa-fw"></i> {{ contact.number }}</li>
        <li class="list-group-item"><button class="btn btn-danger" @click="deleteContact(contact.id)">Delete</button></li>
        <li class="list-group-item">
          <router-link 
            class="btn btn-primary" 
            :to="{name: 'edit-contact', params: {
              id: contact.id,
              first_name: contact.first_name,
              last_name: contact.last_name,
              email: contact.email,
              number: contact.number
              }}">
            Edit
            </router-link></li>
      </ul>
      <div class="card-body" v-else>
        &larr; Please select a contact you want to see or click <router-link to="/add-contact">here</router-link> to create a new contact.
      </div>
    </div>
  
</template>

<script>
import { contact } from '../services/ContactService'

export default {
  props: ['contact'],
  methods: {
    deleteContact(id) {
      console.log('ID: ', id)
      contact.deleteContact(id)
        .then(() => this.$emit('deleted', id))
    }
  }
}
</script>



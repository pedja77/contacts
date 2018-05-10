<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group row">
        <label for="firstName" class="col-4 col-form-label">First name</label>
        <div class="col-8">
          <input id="firstName" v-model="contact.first_name" name="firstName" placeholder="First name" type="text" class="form-control here">
        </div>
      </div>
      <div class="form-group row">
        <label for="lastName" class="col-4 col-form-label">Last name</label>
        <div class="col-8">
          <input id="lastName" v-model="contact.last_name" name="lastName" placeholder="Last name" type="text" class="form-control here">
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email</label>
        <div class="col-8">
          <input id="email" v-model="contact.email" name="email" placeholder="Email" type="email" class="form-control here">
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-4 col-form-label">Phone</label>
        <div class="col-8">
          <input id="phone" v-model="contact.number" name="phone" placeholder="Phone number" type="text" class="form-control here">
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { contact } from '../services/ContactService' 

export default {
  data() {
    return {
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        number: ''
      }
    }
  },
  methods: {
    submit() {
      if (this.$route.params.id) {
        contact.editContact(this.$route.params.id, this.contact)
          .then(response => this.$router.push('/contacts'))
      } else {
        contact.saveContact(this.contact)
          .then(response => this.$router.push('/contacts'))
      }
    }
  },
  created() {
    if (this.$route.params.id) {
      this.contact =  this.$route.params
    }
  }

};
</script>

<style>

</style>

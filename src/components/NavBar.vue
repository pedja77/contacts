<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link class="navbar-brand" to="contacts">ContactsApp</router-link>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <router-link class="nav-link" to="/contacts">Contacts</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/add-contact">Add contacts</router-link>
      </li>
    </ul>
  </div>
</nav>
  
</template>

<script>
export default {

}
</script>



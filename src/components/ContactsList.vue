<template>
  <div>
      <ul class="list-group mt-4">
          <li 
            class="list-group-item" 
            v-for="(contact, key) in contacts" 
            :key="key">
            {{ contact.name }}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ['contacts']
}
</script>



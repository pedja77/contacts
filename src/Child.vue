<template>
  <div>asdfer</div>
</template>

<script>
import Parrent from './Parrent.vue'

export default {
    extends: Parrent,
    created() {
        console.log(this.name1)
    },
     data() {
        return {
            name: 'Zoca'
        }
    }
}
</script>

<style>

</style>

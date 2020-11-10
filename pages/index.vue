<template>
  <div class="test">
      <h1 class="title">Welcome to {{name}}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    methods:{
      ...mapActions({
          fetchName: "login/fetchName",
      })
    },
    computed: {
      ...mapGetters( {
          name: "login/getName",
      } )
    },
    mounted(){
      this.fetchName('Shareel admin Panel')
    }
}
</script>

<style lang="scss" scoped>
.test{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
}

</style>
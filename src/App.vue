<template>
  <div id="app">
    <router-link to="/about">About</router-link>
    <router-link to="/test">Contact</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    presenter: function () {
      return this.nom + " de vue js ";
    },
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    this.nom = "presentation changé";
  },
  updated() {
    console.log("updated");
  },
  components: {},
  data() {
    return {
      nom: "presentation",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

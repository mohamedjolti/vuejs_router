<template>
  <div>
      About page {{nom}}
      <div v-for="etud in etudiants" v-bind:key="etud.id" >
      je suis     {{etud.nom}} {{etud.prenom}}
      </div>
  </div>
</template>

<script>
export default {
   data(){
       return {
           nom:"mohamed",
           etudiants:[
               {id:1, nom:"chandler",prenom:"bing"},
               {id:1, nom:"liz",prenom:"keen"},
           ]
       }
   }
}
</script>

<style>

</style>
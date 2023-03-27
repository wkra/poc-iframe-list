<template>
  <div>
    <h2>I AM CHILD - IFRAME / SCRIPT</h2>
    <CustomEvent />
    <hr />
    <TheStorage />
    <hr />
    <TheList />
    <hr />
    <TheResponsive />
    <hr />
    <TheModal />
  </div>
</template>

<script setup>
import TheList from "./components/TheList.vue";
import CustomEvent from './components/CustomEvent.vue';
import TheResponsive from "./components/TheResponsive.vue";
import TheModal from "./components/TheModal.vue";
import TheStorage from "./components/TheStorage.vue";
</script>

<style lang="scss">
body {
  margin: 0;
}</style>

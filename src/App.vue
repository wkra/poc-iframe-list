<template>
  <div>
    <div>
      <div>Cookie item: {{ cookieItem }}</div>
      <div>localStore item: {{ localStorageItem }}</div>
      <div>sessionStore item: {{ sessionStorageItem }}</div>
    </div>
    <TheList />
  </div>
</template>

<script setup>
import { useCookies } from "vue3-cookies";
import TheList from "./components/TheList.vue";

const itemKey = "item";
const { cookies } = useCookies();

const cookieItem = cookies.get(itemKey);
const localStorageItem = localStorage.getItem(itemKey) || "none";
const sessionStorageItem = sessionStorage.getItem(itemKey) || "none";
</script>

<style></style>

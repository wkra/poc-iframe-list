<template>
  <div>
    <div>
      <div>Cookie item: {{ cookieVal }}</div>
      <div>localStore item: {{ localStorageVal }}</div>
      <div>sessionStore item: {{ sessionStorageVal }}</div>
    </div>
    <div>
      <button type="button" @click="setCookieVal">SET NEW COOKIE VALUE</button>
      <button type="button" @click="setLocalStorageVal">
        SET NEW LOCALSTORAGE VALUE
      </button>
      <button type="button" @click="setSessionStorageVal">
        SET NEW SESSION STORAGE VALUE
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCookies } from "vue3-cookies";

const itemKey = "item";
const { cookies } = useCookies();
const cookieVal = ref("");
const localStorageVal = ref("");
const sessionStorageVal = ref("");

const getStoredValues = () => {
  cookieVal.value = cookies.get(itemKey);
  localStorageVal.value = localStorage.getItem(itemKey) || "none";
  sessionStorageVal.value = sessionStorage.getItem(itemKey) || "none";
};

const setCookieVal = () => {
  cookies.set(itemKey, Date.now());
  getStoredValues();
};

const setLocalStorageVal = () => {
  localStorage.setItem(itemKey, Date.now());
  getStoredValues();
};

const setSessionStorageVal = () => {
  sessionStorage.setItem(itemKey, Date.now());
  getStoredValues();
};

onMounted(() => {
  getStoredValues();
});
</script>

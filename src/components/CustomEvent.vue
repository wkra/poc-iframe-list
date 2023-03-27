<template>
  <div>
    <button type="button" @click="emitHandler">Emitt event</button>
    <div v-if="showCustomEventMessage">CUSTOM EVENT FROM PARENT RECIVED</div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const showCustomEventMessage = ref(false);

const emitHandler = () => {
  const myEvent = new CustomEvent("childevent", {
    detail: {},
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  document.dispatchEvent(myEvent);
  console.log('childevent emited')
};

onMounted(() => {
  document.addEventListener("parentevent", function () {
    showCustomEventMessage.value = true;
    console.log("parentevent received")
  });
});
</script>

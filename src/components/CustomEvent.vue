<template>
  <div>
    <div>TEST child / parent communication</div>
    <button type="button" @click="emitHandler">Emit event</button>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";

const emitHandler = () => {
  const myEvent = new CustomEvent("childevent", {
    detail: {},
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  console.log("emit child event");
  document.dispatchEvent(myEvent);
};

const eventHandler = () => {
  alert("I am script / iframe. Parent event received");
};

onMounted(() => {
  document.addEventListener("parentevent", eventHandler);
});

onUnmounted(() => {
  document.removeEventListener("parentevent", eventHandler);
});
</script>

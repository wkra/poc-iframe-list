<template>
  <div>
    <div>TEST child / parent communication</div>
    <button type="button" @click="emitHandler">Emit event</button>
    <button type="button" @click="emitPostMessage">Emit postMessage</button>
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

const popMessageHandler = (event) => {
  const urls = [
    "http://localhost:8081",
    "http://localhost:8080",
    "https://wkra.github.io/poc-iframe-list",
    "https://wkra.github.io/poc-iframe-container",
  ];

  if (!urls.includes(event.origin)) return;
  if (event.data.myCustomParent) alert(event.data.message)
};

const emitPostMessage = () => {
  window.parent.postMessage({myCustomChild: true, message: 'message from child'}, "*");
};

onMounted(() => {
  document.addEventListener("parentevent", eventHandler);
  window.addEventListener("message", popMessageHandler);
});

onUnmounted(() => {
  document.removeEventListener("parentevent", eventHandler);
  window.removeEventListener("message", popMessageHandler);
});
</script>

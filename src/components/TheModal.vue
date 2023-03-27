<template>
  <div>
    <div>TEST MODAL</div>
    <button @click="showModal">OPEN MODAL</button>
    <widget-container-modal />
  </div>
</template>

<script setup>
import { openModal } from "jenesius-vue-modal";
import { container as WidgetContainerModal } from "jenesius-vue-modal";
import TheModalContent from "./TheModalContent.vue";

const showModal = () => {
  openModal(TheModalContent, {
    title: "Hello World!",
  });
};
</script>

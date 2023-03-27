<template>
  <div>
    THE LIST
    <ul>
      <li v-for="item in list" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const list = ref([]);

const getPeople = async (url = "https://swapi.dev/api/people") => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results)

  return data.results;
};

onMounted(async () => {
  list.value = await getPeople();
});
</script>

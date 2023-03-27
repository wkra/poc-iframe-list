<template>
  <div>
    <hr />
    <div>THE LIST</div>
    <div>
      <button type="button" v-if="nextUrl" @click="loadMoreHandler">
        load more
      </button>
    </div>
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
const apiUrl = 'https://swapi.dev/api/people';
const nextUrl = ref('');

const loadMoreHandler = () => {
  addPeople(apiUrl.value);
}

const getPeople = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  nextUrl.value = data.next

  return data.results;
};

const addPeople = async (url = apiUrl) => {
  const result = await getPeople(url);

  result.forEach(element => {
    list.value.push(element)
  });
}

onMounted(() => {
  addPeople(apiUrl)
});
</script>

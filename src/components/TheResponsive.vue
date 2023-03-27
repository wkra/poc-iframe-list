<template>
  <div class="responsive">
    <div>WINDOW WIDTH TEST</div>
    <div>window.innerWidth: {{ currInnerWidth }}</div>
    <div>window.screen.width: {{ currScreenWidth }}</div>
    <div>
      <button type="button" @click="setWidthValues">Check width values</button>
    </div>
    <div>COLUMN IN ONE ROW BY CSS MEDIA QUERY FROM 1024px</div>
    <div class="responsive__container">
      <div class="responsive__column">COLUMN</div>
      <div class="responsive__column">COLUMN</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const currInnerWidth = ref(window.innerWidth);
const currScreenWidth = ref(window.screen.width);

const setWidthValues = () => {
  currInnerWidth.value = window.innerWidth;
  currScreenWidth.value = window.screen.width;
};
</script>

<style lang="scss">
$breakpoint-desktop: 1024px;

.responsive {
  &__container {
    display: flex;
    flex-wrap: wrap;
  }

  &__column {
    width: 100%;

    @media (min-width: $breakpoint-desktop) {
      width: 50%;
    }
  }
}
</style>

<template>
  <div class="title-page">
    <img width="25%" src="../assets/logo.png">
    <h1>{{ titleName }}</h1>
  </div>
</template>

<script>
export default {
  titleName: "Title",
  props: {
    titleName: String,
    required: true
  }
};
</script>

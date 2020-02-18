<template>
  <div class="container">
    <div class="row justify-content-md-center flex-row" v-if="blogData">
      <section
        v-for="(post, index) in blogData"
        :key="index"
        class="col-sm-6 col-md-4 col-lg-3 card-body border rounded"
      >
        <p class="card-text">
          <small>
            <mark>Name</mark>
          </small> -
          <b>{{ post.name }}</b>
        </p>
        <p class="card-text">
          <small>
            <mark>Gender</mark>
          </small> -
          <b>{{ post.gender }}</b>
        </p>
        <p class="card-text">
          <small>
            <mark>Birth year</mark>
          </small> -
          <b>{{ post.birth_year }}</b>
        </p>
        <p class="card-text">
          <small>
            <mark>Height</mark>
          </small> -
          <b>{{ post.height }}</b>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogData: {
      type: Array,
      required: false
    }
  }
};
</script>


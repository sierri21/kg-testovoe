<script setup>
import {fetchCommentsByPost, fetchPost, updatePost} from "src/service.js";
import {useRoute, useRouter} from "vue-router";
import { reactive } from "vue";

const route = useRoute()
const router = useRouter()

const postRes = await fetchPost(route.params.id)

const commentsRes = await fetchCommentsByPost(route.params.id)
const post = reactive({
  ...postRes,
  comments: commentsRes
})

const saveChanges = async () => {
  await updatePost(post)
  await router.push('/')
}

</script>

<template>
  <form class="post-update" @submit.prevent="saveChanges">
    <label>
      <span>id:</span>
      <input v-model="post.id" disabled>
    </label>
    <label>
      <span>title:</span>
      <input v-model="post.title" >
    </label>
    <label>
      <span>body:</span>
      <textarea v-model="post.body" />
    </label>
    <button type="submit">Save</button>
    <div>
      <h5>
        comments:
      </h5>
      <ul>
        <li>
          <span>email</span>
          <span>name</span>
          <span>body</span>
        </li>
        <li v-for="comment in post.comments">
          <span>{{ comment.email }}</span>
          <span>{{ comment.name }}</span>
          <span>{{ comment.body }}</span>
        </li>
      </ul>
    </div>
  </form>
</template>

<style scoped lang="scss">
.post-update {
  background: #FFFFFF;
  border: 1px solid red;
  display: flex;
  max-width: 720px;
  width: 100%;
  flex-direction: column;
  grid-gap: 20px;
  padding: 20px;
  button {
    width: 50px;
    margin-left: auto;
    margin-right: 0;
  }
  label {
    display: flex;
    span {
      display: inline-block;
      width: 50px;
    }
    input, textarea {
      width: 650px;
    }
    textarea {
      height: 150px;
    }
  }
  h5 {
    text-align: center;
  }
  ul {
    li {
      display: grid;
      grid-template-columns: 200px 200px 200px;
      grid-column-gap: 10px;
      margin-bottom: 15px;
    }
  }
}

</style>

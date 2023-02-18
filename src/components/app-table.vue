<script setup>
  import { fetchUsers, fetchPostsByUser } from "src/service.js";
  import { ref } from "vue";

  const data = await fetchUsers()
  const userList = data.map( el => ({
    ...el,
    isOpen: false,
    posts: []
  }))
  const users = ref(userList)

  const openPosts = async (userId) => {
    const user = users.value.find(user => user.id === userId)
    if (!user.isOpen) {
      user.posts = await fetchPostsByUser(userId)
      user.isOpen = true
    } else {
      user.isOpen = false
    }

  }
</script>

<template>
  <div class="users-list">
    <div class="users-list__head user-row">
      <span>id</span>
      <span>username</span>
      <span>name</span>
      <span>company.name</span>
      <span>website</span>
    </div>
    <div class="users-list__body">
      <div v-for="user in users" :key="user.id" class="users-list__item">
        <div class="user-row">
          <span>{{ user.id }}</span>
          <span>{{ user.username }}</span>
          <span>{{ user.name }}</span>
          <span>{{ user.company.name }}</span>
          <span>{{ user.website }}</span>
          <button @click="openPosts(user.id)">{{ !user.isOpen ? 'show' : 'hide' }}</button>
        </div>
        <div v-if="user.isOpen">
          <div class="post-row">
            <span>id</span>
            <span>title</span>
            <span>words</span>
            <span>chars</span>
          </div>
          <div v-for="post in user.posts" :key="post.id" class="post-row">
            <span>{{ post.id }}</span>
            <span>{{ post.title }}</span>
            <span>{{ post.body.split(' ').length }}</span>
            <span>{{ post.body.length }}</span>
            <router-link :to="{name: 'change-post', params: {id: post.id}}">Изменить</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.users-list {
  border-radius: 16px;
  border: 1px solid #212121;
  overflow: hidden;
  max-width: 750px;
  &__item {
    border-bottom: 1px solid #212121;
  }

}
.user-row {
  display: grid;
  grid-template-columns: 25px 150px 200px 150px 150px 45px;
  padding: 0 10px;
  grid-template-rows: 35px auto;
  align-items: center;
  border-bottom: 1px solid #212121;
  &:last-child {
    border-bottom: none;
  }
}
.post-row {
  width: 100%;
  display: grid;
  grid-template-columns: 25px 520px 50px 50px 75px;
  grid-auto-rows: 35px;
  padding: 0 20px;
  align-items: center;
  &:nth-child(odd) {
    background: #ededed;
  }
}
</style>

<template>
  <Layout>
    <LayoutHeader>
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </LayoutHeader>
    <LayoutContent class="content">
      <slot></slot>
    </LayoutContent>
  </Layout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  TypographyTitle,
  Menu,
  MenuItem
} from 'ant-design-vue';
</script>

<style scoped>
.content {
  padding: 0 20px;
  max-width: 800px;
  width: 95%;
  margin: 0 auto;
}
.link {
  margin-right: 15px;
}
</style>

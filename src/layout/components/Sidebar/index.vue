<template>
  <div>
    <h1 class="sidebar-title">usian-admin</h1>
    <menu-tree></menu-tree>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree'
</script>

<style lang="scss" scoped>
.sidebar-title{
  text-align : center;
  padding : 15px 0;
  font-size : 22px;
  color : #fff;
}
</style>

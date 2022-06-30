<template>
  <template v-if="item && !item.children">
    <el-menu-item :index="item.path">
      <el-icon>
        <svg-icon :icon-class="item.meta.icon"></svg-icon>
      </el-icon>
      {{ item.meta.title }}
    </el-menu-item>
  </template>
  <template v-if="item && item.children && item.children.length > 0">
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon>
          <svg-icon :icon-class="item.meta.icon"></svg-icon>
        </el-icon>
        {{ item.meta.title }}
      </template>
      <MenuItem
        v-for="(childItem, index) in item.children"
        :menuList="childItem"
        :key="index"
      ></MenuItem>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  menuList: {
    type: Object,
    default: () => {}
  }
})
// eslint-disable-next-line vue/no-setup-props-destructure
const item = props.menuList
</script>

<style lang="scss" scoped></style>

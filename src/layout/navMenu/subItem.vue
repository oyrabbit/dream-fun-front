<template>
  <template v-for="val in chils">
    <el-sub-menu :index="val.path" :key="val.path" v-if="val.children && val.children.length > 0">
      <template #title>
        <SvgIcon :name="val.meta.icon" />
        <span>{{ val.meta.title }}</span>
        <el-badge :value="commonStore.getNewsNum(val.name)" class="num" />
      </template>
      <sub-item :chil="val.children" />
    </el-sub-menu>
    <template v-else>
      <el-menu-item :index="val.path" :key="val.path">
        <template v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
          <SvgIcon :name="val.meta.icon" />
          <span>{{ val.meta.title }}</span>
          <el-badge :value="commonStore.getNewsNum(val.name)" class="number" />
        </template>
        <template v-else>
          <a class="w100" @click.prevent="onALinkClick(val)">
            <SvgIcon :name="val.meta.icon" />
            {{ val.meta.title }}
            <el-badge :value="commonStore.getNewsNum(val.name)" class="number" />
          </a>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts" name="navMenuSubItem">
import { computed } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import other from '/@/utils/other'
import { useCommon } from '/@/stores/common'

const commonStore = useCommon()

// 定义父组件传过来的值
const props = defineProps({
  // 菜单列表
  chil: {
    type: Array<RouteRecordRaw>,
    default: () => []
  }
})

// 获取父级菜单数据
const chils = computed(() => {
  return <RouteItems>props.chil
})
// 打开外部链接
const onALinkClick = (val: RouteItem) => {
  other.handleOpenLink(val)
}
</script>
<style lang="scss" scoped>
.num {
  position: relative;
  bottom: 15px;
}
.number {
  position: absolute;
  bottom: 15px;
}
:deep(.el-badge__content) {
  vertical-align: middle !important;
}
</style>

// 封装分类数据相关的代码

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import { getTopCategoryAPI } from '@/api/category.js'

export function useCategory() {
  // 获取数据
const topCategory = ref({})
const routeId = useRoute()
const getCategory = async (id = routeId.params.id) => {
  const res = await getTopCategoryAPI(id)
  topCategory.value = res.result
}

// 目标：当路由参数变化时，可以把分类数据结构重新创建
onBeforeRouteUpdate((to) => {
  // 使用最新的路由参数
  getCategory(to.params.id)
})

onMounted(() => {
  getCategory()
})

return {
  topCategory
}
}
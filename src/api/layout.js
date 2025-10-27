import httpInstance from "@/util/http";

// 分类接口函数
export function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head'
  })
}
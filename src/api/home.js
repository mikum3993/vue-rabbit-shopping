import httpInstance from '@/util/http'

//获取banner
export function getBannerAPI(){
  return httpInstance({
    url:'/home/banner'
  })
}

// 获取新品数据
export function getNewAPI(){
  return httpInstance({
    url:'/home/new'
  })
}

// 获取热门商品数据
export function getHotAPI(){
  return httpInstance({
    url:'/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
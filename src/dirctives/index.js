// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyLoadPlugin={
  install(app){
    // 懒加载指令逻辑
    // 定义全局指令
    app.directive('img-lazy',{
      mounted(el,binding){
        // el 指令绑定的元素
        // binding 指令等于号后面绑定的值
        const {stop} = useIntersectionObserver(
          el, 
          ([{ isIntersecting}])=>{
            if(isIntersecting){
              el.src=binding.value
              stop() // 停止监听
            }
          },
        )
      }
    })
  }
}
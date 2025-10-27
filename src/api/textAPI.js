import httpInstance from '@/util/http'

export function getCategory() {
  return httpInstance({
    url: 'home/category/head',
  })
}

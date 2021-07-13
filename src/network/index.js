import {request} from "./request";

/* 多数据 */
export function getHomeMultidata() {
  return request({
    url: '/multidata'
  })
}

/* 商品信息 */
export function getShopList() {
  return request({
    url: '/shopLists'
  })
}
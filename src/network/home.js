import {requestA} from "./requestM"

export function getHomeMultidata() {
  return requestA({
    url: "home/multidata",
  })
}

export function getHomeGoods(type, page){
  return requestA({
    url: 'home/datamock',
    params: {
      type,
      page
    }
  })
}


export function postHomeGoods(type, page){
  return requestA({
    url: 'home/datamock',
    method: "POST",
    headers: { 'content-type': 'application/json'},
    data: {
      "type": type,
      "page": page
    }
  })
}


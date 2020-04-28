// 处理漫画相关的接口

// 引入封装好的axios的实例
import request from '@/utils/request'

// 获取首页数据
// http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_female&_type=h5
export const getHome = () => {
  return request({
    url: '/wbcomic/home/page_recommend_list?mca=h5_recommend_female&_type=h5',
    method: 'GET'
  })
}
// http://manhua.weibo.cn/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5
export const getDay = () => {
  return request({
    url: '/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5',
    method: 'GET'
  })
}

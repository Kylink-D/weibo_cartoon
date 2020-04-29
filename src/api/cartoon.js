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

// 获取放送表 数据
// http://manhua.weibo.cn/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5
export const getDay = () => {
  return request({
    url: '/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5',
    method: 'GET'
  })
}

// 获取分类名称数据
// http://manhua.weibo.cn/wbcomic/comic/filter_list?_type=h5
export const getClassname = () => {
  return request({
    url: '/wbcomic/comic/filter_list?_type=h5',
    method: 'GET'
  })
}

// 获取 分类 具体数据 http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5
// 三个全部 ：       http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5
// 剧情 全部 全部   http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=1&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5
/**
  cate_id: 5
  end_status: 0
  comic_pay_status: 0
  page_num: 1
  rows_num: 20
  order
  _type: h5
*/
/**
 * @param {string} cate_id 一
 * @param {string} end_status 二
 * @param {string} comic_pay_status 三
 * @param {Number} page_num 第几页
 * @param {Number} rows_num 数量
 */
export const getClassdata = (cate_id = 0, end_status = 0, comic_pay_status = 0, page_num = 1) => {
  return request({
    url: '/wbcomic/comic/filter_result',
    method: 'GET',
    params: {
      cate_id,
      end_status,
      comic_pay_status,
      page_num,
      rows_num: 20,
      order: '',
      _type: 'h5'
    }
  })
}

// 获取排行页面数据
// 阅读榜 http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
// 综合榜 http://manhua.weibo.cn/wbcomic/home/rank?_type=h5
export const getRankone = () => {
  return request({
    url: '/wbcomic/home/rank_read?_type=h5',
    method: 'GET'
  })
}
// 新作榜 http://manhua.weibo.cn/wbcomic/home/rank_share?_type=h5
export const getRanktwo = () => {
  return request({
    url: '/wbcomic/home/rank_share?_type=h5',
    method: 'GET'
  })
}
// 综合榜 http://manhua.weibo.cn/wbcomic/home/rank?_type=h5
export const getRankthree = () => {
  return request({
    url: '/wbcomic/home/rank?_type=h5',
    method: 'GET'
  })
}

// get comicend data
// http://manhua.weibo.cn/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5
export const getComicend = () => {
  return request({
    url: '/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5',
    method: 'GET'
  })
}

// searce data
// http://manhua.weibo.cn/wbcomic/home/hot_words?_type=h5
export const getHotsearch = () => {
  return request({
    url: '/wbcomic/home/hot_words?_type=h5',
    method: 'GET'
  })
}

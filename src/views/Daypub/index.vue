<template>
  <div class="release">
    <HeaderType>放送表</HeaderType>
      <div class="release_date">
        <p class="release_date_day" :class="{'active': item.pub_name === isactive}" v-for="item in list" :key="item.pub_day" @click="isactive = item.pub_name">
          {{item.pub_name}}
        </p>
      </div>
      <van-pull-refresh style="height: 100%" v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
        <div class="load_state">
          <img
            src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/play-loading.83412bf6.png"
            alt=""
          />
          <p>今日的漫画还在绘制中</p>
          <!---->
        </div>
      </van-pull-refresh>
  </div>
</template>

<script>
import HeaderType from '@/components/HeaderType'
import { getDay } from '@/api/cartoon'
export default {
  name: 'Daypub',
  data () {
    return {
      isLoading: false,
      list: [],
      isactive: '今天'
    }
  },
  components: {
    HeaderType
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    getDay () {
      getDay().then(res => {
        this.list = res.data.tab_list
      })
    }
  },
  created () {
    this.getDay()
  }
}
</script>

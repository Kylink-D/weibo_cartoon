<template>
  <div id="search_">
    <div class="search_header">
      <form method="get" action="javascript:void(0);">
        <div class="search_ferame">
          <span class="search_ferame_icon"></span
          ><input v-model="inputData" placeholder="请输入搜索关键字" /><span
            class="search_clear_cion"
            v-show="inputData"
            @click="inputData = ''"
          ></span>
        </div>
      </form>
      <div class="search_fix_btn" @click="$router.back()" v-show="!inputData">
        <span>取消</span>
      </div>
      <div class="search_fix_btn" @click="handleClick(inputData)" v-show="inputData">
        <span>搜索</span>
      </div>
    </div>
    <div class="search_footer">
      <div class="search_page" style="">
        <div class="hot_search">
          <div class="hot_serch_header">
            <div class="search_title">热门搜索</div>
            <div class="search_icon refresh" @click="refreshData"></div>
          </div>
          <ul class="hot_search_conent">
            <li class="search_label" v-for="item in hotData" :key="item.object_id">
              <a href="javascript:;" class="">
                {{item.title}}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hot_search hosity" v-if="historySearchList.length">
        <div class="hot_serch_header">
          <div class="search_title">搜索历史</div>
          <div class="search_icon clear" @click="clearHistory"></div>
        </div>
        <ul class="hot_search_conent">
          <li class="search_label" v-for="item in historySearchList" :key="item">
            <span class="search_label_text">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getHotsearch } from '@/api/cartoon'
export default {
  name: 'Search',
  data () {
    return {
      hotList: [],
      hotData: [],
      num: 12,
      inputData: '',
      historySearchList: this.getSearch()
    }
  },
  methods: {
    getHotsearch () {
      getHotsearch().then(res => {
        this.hotList = res.data
        this.hotData = this.hotList.slice(0, 12)
      })
    },
    refreshData () {
      console.log(1)
      getHotsearch().then(res => {
        this.hotList = res.data
        this.hotData = this.hotList.slice(this.num, this.num + 11)
        this.num += 12
        if (this.num >= this.hotList.length) {
          this.num = 0
        }
      })
    },

    // save search data
    saveSearch (key) {
      let tmp = window.localStorage.getItem('search')
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      if (tmp.includes(key)) return
      tmp.push(key)
      window.localStorage.setItem('search', JSON.stringify(tmp))
    },
    getSearch () {
      const tmp = window.localStorage.getItem('search')
      if (!tmp) {
        return []
      } else {
        return JSON.parse(tmp)
      }
    },
    handleClick (key) {
      this.saveSearch(key)
      this.inputData = ''
      this.getSearch()
    },
    clearHistory () {
      window.localStorage.setItem('search', '')
    }
  },
  created () {
    this.getHotsearch()
  }
}
</script>

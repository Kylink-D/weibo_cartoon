<template>
  <div class="comic_play" @scroll="handleScroll">
    <div class="nav_layout com_nav_play show_nav">
      <transition>
        <div class="com_nav gray_nav" v-show="isUp">
          <div class="nav_content">
            <div class="nav_left"><div class="back_btn l_con"></div></div>
            <div class="nav_middle">
              <span class="nav_title"></span
              ><span class="chapter_title">
                01 负距离检查 </span
              ><span class="read_count">
                1/12
              </span>
            </div>
            <div class="nav_right">
              <div class="toHome"></div>
              <div class="shareLight"></div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="comic_play_wrap" style="background: rgba(0, 0, 0, 0.2);">
      <div class="chapter_content">
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">1</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/001_9e9efd2e82fdf001dd6ff76ca1b1091a.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/001_9e9efd2e82fdf001dd6ff76ca1b1091a.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">2</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/002_e9e46c198366d219a44062e28a8436a9.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/002_e9e46c198366d219a44062e28a8436a9.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">3</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/003_c6ab790f0835348327c8174b14491904.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/003_c6ab790f0835348327c8174b14491904.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">4</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/004_076590a8fbda98165e87aa9894fe034b.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/004_076590a8fbda98165e87aa9894fe034b.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">5</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/005_10daf82d299ab959cf68c1a94b89975a.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/005_10daf82d299ab959cf68c1a94b89975a.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">6</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/006_72995cd8be3bb3df479de5fb7f8bb151.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/006_72995cd8be3bb3df479de5fb7f8bb151.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">7</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/007_48f525e0aca13388ec0beaddd15f4d36.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/007_48f525e0aca13388ec0beaddd15f4d36.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">8</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/008_0045135f5f48fb3278b75e6cbb49b771.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/008_0045135f5f48fb3278b75e6cbb49b771.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">9</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/009_d729fbbfd7fae2f27a9decbfc78091c6.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/009_d729fbbfd7fae2f27a9decbfc78091c6.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">10</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/010_a8de819be990b4d4da8c3f8360f5e3d3.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/010_a8de819be990b4d4da8c3f8360f5e3d3.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">11</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/011_ebd1379a5e5ab7efc64b4a62813aee71.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/011_ebd1379a5e5ab7efc64b4a62813aee71.jpg"
            lazy="loaded"
          />
        </div>
        <div class="comic_chapter_content" style="height: 530px; width: 100%;">
          <p class="chapter_content_num">12</p>
          <img
            class="chapter_content_img"
            data-src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/012_a0f5a3a0e96779bc556f5d43168fe446.jpg"
            src="http://img.manhua.weibo.com/comic/iphone/65/68665/263139/012_a0f5a3a0e96779bc556f5d43168fe446.jpg"
            lazy="loaded"
          />
        </div>
      </div>
      <div class="bottom_menu">
        <div class="bottom_menu_item disabled">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAHlBMVEUAAADb29vNzc3MzMzMzMzMzMzNzc3MzMzNzc3MzMyVDWc/AAAACXRSTlMABraH5/GN7Yiwa6ixAAAAc0lEQVRIx2MYBaOAPCARmkhQDaPmzGkEFQnNnDmVsEEgRYQNmjmDCINmKhJh0CSBUYOGnkGYYIohiqLMmVjBZBRFldgVTSFdkSU+6wg7HDMIyAzMUaOGklGTiSkOpxBTsE4hoogGWkcQCLsYMoyCUUAuAABK157nCb2lkgAAAABJRU5ErkJggg=="
            alt=""
          /><span>上一篇</span>
        </div>
        <div class="bottom_menu_item">
          <div>
            <div class="com_fav_no_text">
              <img
                src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/like.ee9e56c9.png"
                alt=""
              /><span>关注</span>
            </div>
          </div>
        </div>
        <div class="bottom_menu_item">
          <img
            src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/share.e3d16499.png"
            alt=""
          /><span>分享</span>
        </div>
        <div class="bottom_menu_item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAk1JREFUeAHt2jFPwkAUAOC7KtTFsOqKv8ZN/wAhcdbBQeOgVhdx1cHEyfgHZPPfsNrJiBPFhPO9EhIglPigvXvPvCYF2l7vXr/eHelLjdFFBVRABVRABVRABVRABVRABVRABVRABUoRcEkSlVLRmpXYNc8v/XSAqWe97A4qPoI1Mi56ivdqlzZJhqU39ocKWdyl6TgRxzlzCmsD1m1nRmdZb9h1xw/xdDlfv1n1IBxWAPSJOPMA1tr3uLFzaB9PsvljVW6zAsILHbQuvrHnLLroEEjshhjOOYtwcJ9zbj/rp28+hxs7oHxChuHEBYndEMt7CkzIeU+BHlME5Wu4sQTihMQWiAsSayAOSOyBQiOJAAqJJAYoFJIooBBI4oB8I4kE8okkFsgXkmggH0hkoHHGb3gLKYkWPF/vYpASllWf3chP85DdAxx3LgkHb2CeKvlKMZVLWshA455DaoNRYdemBkMGojbAqbyz1lHjIQNZa16pjfApb5+psZCB4mb9Cia8e2PsB7WxkOVxkt5q1q6pMZD/xagNVF0e89NVZh9FA1WNgzdXLJAPHLFAvnBEAvnEEQfkG0cUUAgcMUChcEQAhcRhDxQahzUQBxy2QFxwEGgDPzgtecYy7XcxwVUU16rZwaL6lu3fXHYwxLFB7+cG0n8scPD6yemO6tFG7aI2fPacSQwMgSahzX6HwMEIGAJFL7M0kHII9IYrS6A862ejDiRi0vEadSCLeeD79d/5m6TbKqACKqACKqACKqACKqACKqACKqACKvBPBH4Bt8exNGO8pcEAAAAASUVORK5CYII="
            alt=""
          /><span>下一篇</span>
        </div>
      </div>
      <div class="comments paddingBottom">
        <div class="comment-area">
          <div class="comment-title">
            热门评论
          </div>
          <div class="comment-list">
            <div class="comment-item">
              <div class="avatar-outer">
                <div class="avatar component_avatar">
                  <img
                    src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                  /><img
                    src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202017/1587090650DBJzH7Kf.jpg"
                  />
                </div>
              </div>
              <div class="comment-item-content">
                <div class="comment-nickname comment-line content-line">
                  <div class="bold">满天星梦</div>
                  <div class="comment-time comment-line">2020-04-23</div>
                </div>
                <div class="comment-content comment-line content-line">
                  空调没有88度🤔🤔
                </div>
              </div>
            </div>
            <div class="comment-item">
              <div class="avatar-outer">
                <div class="avatar component_avatar">
                  <img
                    src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                  /><img
                    src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202028/1588071807jM4sJ1hx.jpg"
                  />
                </div>
              </div>
              <div class="comment-item-content">
                <div class="comment-nickname comment-line content-line">
                  <div class="bold">安晚辞</div>
                  <div class="comment-time comment-line">2020-04-19</div>
                </div>
                <div class="comment-content comment-line content-line">
                  我也有阑尾炎
                </div>
              </div>
            </div>
            <div class="comment-item">
              <div class="avatar-outer">
                <div class="avatar component_avatar">
                  <img
                    src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                  /><img
                    src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKoiaadyVBJQPFQD27e1rt81WMhZqwVvCyLyyJhhkEZo4Og1VLTzMjn9ic1Zg9e2ibwQWMzo3GWjcFDw/132"
                  />
                </div>
              </div>
              <div class="comment-item-content">
                <div class="comment-nickname comment-line content-line">
                  <div class="bold">春色满园9910152524</div>
                  <div class="comment-time comment-line">2020-04-21</div>
                </div>
                <div class="comment-content comment-line content-line">
                  哪个空调能跳到88°？
                </div>
              </div>
            </div>
          </div>
          <div class="comment_more">
            <button class="moreComment">更多精彩评论</button>
          </div>
        </div>
      </div>
    </div>
    <transition>
        <div class="play_footer show_footer" v-show="isUp">
          <div class="play_footer_menu">
            <img src="../../assets/images/golast.png" alt="" /><span>上一章</span>
          </div>
          <div class="play_footer_menu">
            <img src="../../assets/images/gomenu.png" alt="" /><span>目录</span>
          </div>
          <div class="play_footer_menu">
            <img src="../../assets/images/download.png" alt="" /><span>下载</span>
          </div>
          <div class="play_footer_menu">
            <img src="../../assets/images/gonext.png" alt="" /><span>下一章</span>
          </div>
        </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Readcomics',
  data () {
    return {
      isUp: true,
      i: 0
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const scroll = scrollTop - this.i
      console.log(scrollTop)
      this.i = scrollTop
      if (scroll < 0) {
        this.isUp = true
      } else {
        this.isUp = false
      }
    },
    debounce (fn, wait) {
      let timeout = null
      return function () {
        clearTimeout(timeout)
        timeout = setTimeout(fn, wait)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.debounce(this.handleScroll, 30))
  }
}
</script>
<style lang="scss" scoped>
.nav_middle {
  font-size: 16px;
}
.back_btn {
  background-image: url("~@/assets/images/goback.png");
}
.toHome {
  background-image: url("~@/assets/images/goHome.png");
}
.shareLight {
  background-image: url("~@/assets/images/share.png");
}
</style>

<template>
  <div class="recommend_block">
    <div class="home_recommend_header">
      <div class="home_recommend_title">{{title}}</div>
      <div class="home_recommend_more">更多&gt;</div>
    </div>
    <div>
      <div :class="`home_recommend_comics ${myclass}`">
        <div
          class="home_recommend_comic"
          v-for="item in list"
          :key="item.info_id"
        >
          <div class="comic_cover_container" style="width: 100%;">
            <div
              class="comic_cover"
              :style="
                `width: 100%; background-image: url(${item.image_ext_url});`
              "
            ></div>
            <div class="comic_cover_info">
              <div class="comic_cover_titleBox">
                <div class="comic_cover_title" style="font-size: 14px;">
                  {{ item.title }}
                </div>
              </div>
              <div class="comic_cover_desc" style="font-size: 12px;">
                {{ item.watching_focus }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Homeone',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    myclass: {
      type: String
    },
    title: {
      type: Array
    }
  }
}
</script>

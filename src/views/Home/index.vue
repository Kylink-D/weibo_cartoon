<template>
  <div class="page-home">
    <div class="nav_layout home_nav">
      <div class="com_nav border">
        <div class="nav_content">
          <div class="nav_left">
            <img src="../../assets/images/logo.png" alt />
          </div>
          <div class="nav_middle"></div>
          <div class="nav_right">
            <div class="nav_switch_gender female_btn"></div>
            <div class="nav_serach"></div>
            <div to="/mine" class="nav_mine"></div>
          </div>
        </div>
        <!---->
      </div>
    </div>
    <div class="home_content_loaded scroll">
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <div class="swipeContainer">
          <div class="swipe_wrap">
            <swiper class="mint-swipe">
              <swiper-item
                class="swiper-item"
                v-for="item in imgList"
                :key="item"
              >
                <img src="../../assets/images/gU3Vg3gU.jpg" alt="" />
              </swiper-item>
            </swiper>
          </div>
        </div>
        <div class="home_menu">
          <div class="home_menu_item">
            <img
              src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/daypub.7d71503a.png"
              alt=""
            />
            <p>放送表</p>
          </div>
          <div class="home_menu_item">
            <img
              src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/catelog.3cfb4bb6.png"
              alt=""
            />
            <p>分类</p>
          </div>
          <div class="home_menu_item">
            <img
              src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/rank.bfd0ebb0.png"
              alt=""
            />
            <p>榜单</p>
          </div>
          <div class="home_menu_item">
            <img
              src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/ending.932e7864.png"
              alt=""
            />
            <p>完结</p>
          </div>
        </div>
        <!---->
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">精品佳作</div>
            <div class="home_recommend_more">更多&gt;</div>
          </div>
          <div>
            <div class="home_recommend_comics threeClassic">
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/0JOTJle9.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        总裁在上
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      她，没有反抗的权利
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        恶魔，别吻我
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      美男小三居然是恶魔？
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        毒步天下：特工神医小兽妃
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      王牌特工魂穿废柴萝莉
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">人气作品</div>
            <div class="home_recommend_more">更多&gt;</div>
          </div>
          <div>
            <div class="home_recommend_comics fourClassic">
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        帝少专宠霸道妻
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      占了便宜还想跑？
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/f4GWamfV.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        束缚游戏：总裁玩上瘾
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      愿以青春献流年
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/dxzPDPoQ.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        天价宠妻：总裁夫人休想逃
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      宠妻狂魔，打脸前任！
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/02/11/8Jsq2AOh.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        第101次禁声—富少轻点疼
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      全站最虐的一本漫画
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">最新上架</div>
            <div class="home_recommend_more">更多&gt;</div>
          </div>
          <div>
            <!---->
            <div class="home_recommend_comics threeColumn">
              <div class="home_recommend_comic">
                <div class="comic_horizontal_container">
                  <div
                    class="comic_cover comice_horizontal_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/lPqbZ18w.jpg");'
                  ></div>
                  <div class="comic_cover_horizontal_info">
                    <div
                      class="comic_cover_horizontal_title"
                      style="font-size: 16px;"
                    >
                      一纸契约，惹上冷情总裁
                    </div>
                    <div
                      class="comic_cover_horizontal_author"
                      style="font-size: 12px;"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII="
                        alt=""
                      />
                      恋爱、总裁
                    </div>
                    <div
                      class="comic_cover_horizontal_author"
                      style="font-size: 12px;"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC"
                        alt=""
                      />
                      翻阅漫画
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_horizontal_container">
                  <div
                    class="comic_cover comice_horizontal_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg");'
                  ></div>
                  <div class="comic_cover_horizontal_info">
                    <div
                      class="comic_cover_horizontal_title"
                      style="font-size: 16px;"
                    >
                      总裁的替嫁新娘
                    </div>
                    <div
                      class="comic_cover_horizontal_author"
                      style="font-size: 12px;"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII="
                        alt=""
                      />
                      恋爱、总裁、都市
                    </div>
                    <div
                      class="comic_cover_horizontal_author"
                      style="font-size: 12px;"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC"
                        alt=""
                      />
                      开源动漫
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_horizontal_container">
                  <div
                    class="comic_cover comice_horizontal_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/KxyeCH28.jpg");'
                  ></div>
                  <div class="comic_cover_horizontal_info">
                    <div
                      class="comic_cover_horizontal_title"
                      style="font-size: 16px;"
                    >
                      我，超有钱
                    </div>
                    <div
                      class="comic_cover_horizontal_author"
                      style="font-size: 12px;"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII="
                        alt=""
                      />
                      剧情、恋爱、校园
                    </div>
                    <div
                      class="comic_cover_horizontal_author"
                      style="font-size: 12px;"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC"
                        alt=""
                      />
                      风露社
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">热门连载</div>
            <div class="home_recommend_more">更多&gt;</div>
          </div>
          <div>
            <div class="home_recommend_comics fourClassic">
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/ymrbyNpY.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        霸道总裁爱上我
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      将她困在身边，一睡到底
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/02/20/E8j8aIH7.png");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div class="comic_cover_title" style="font-size: 14px;">
                        倾世帝王姬
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      卑贱女奴，一夜觉醒帝王
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">小编推荐</div>
            <div class="home_recommend_more">更多&gt;</div>
          </div>
          <div>
            <div class="home_recommend_comics threeClassic">
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    data-src="https://img.manhua.weibo.com/client/2020/04/20/99IpMOXX.jpg"
                    lazy="loaded"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/99IpMOXX.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div
                        class="comic_cover_title"
                        style="font-size: 14px;"
                      >
                        惹上首席总裁之千金归来
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      那个男人，她不该招惹的
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    data-src="https://img.manhua.weibo.com/client/2020/04/20/eLWu5aeA.jpg"
                    lazy="loaded"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/eLWu5aeA.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div
                        class="comic_cover_title"
                        style="font-size: 14px;"
                      >
                        别跑，小鲜肉
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      女霸总倒追当红小鲜肉
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    data-src="https://img.manhua.weibo.com/client/2020/02/20/lC1lRXS1.jpg"
                    lazy="loaded"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/02/20/lC1lRXS1.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div
                        class="comic_cover_title"
                        style="font-size: 14px;"
                      >
                        女帝的后宫
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      七个驸马？我不够分啦！
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">本周推荐</div>
            <div class="home_recommend_more">更多&gt;</div>
          </div>
          <div>
            <div class="home_recommend_comics threeRow">
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    data-src="https://img.manhua.weibo.com/client/2020/04/20/x6dbxpxt.jpg"
                    lazy="loaded"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/04/20/x6dbxpxt.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div
                        class="comic_cover_title"
                        style="font-size: 14px;"
                      >
                        只对你臣服
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      占了便宜还想跑？
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    data-src="https://img.manhua.weibo.com/client/2020/02/11/idFJtbBA.png"
                    lazy="loaded"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/02/11/idFJtbBA.png");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div
                        class="comic_cover_title"
                        style="font-size: 14px;"
                      >
                        甜心V5：BOSS宠之过急
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      舅舅！老公是什么？
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_recommend_comic">
                <div class="comic_cover_container" style="width: 100%;">
                  <div
                    class="comic_cover"
                    data-src="https://img.manhua.weibo.com/client/2020/02/11/5ucQ3YSk.jpg"
                    lazy="loaded"
                    style='width: 100%; background-image: url("https://img.manhua.weibo.com/client/2020/02/11/5ucQ3YSk.jpg");'
                  ></div>
                  <!---->
                  <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                      <!---->
                      <div
                        class="comic_cover_title"
                        style="font-size: 14px;"
                      >
                        男神萌宝一锅端
                      </div>
                      <!---->
                    </div>
                    <div class="comic_cover_desc" style="font-size: 12px;">
                      总裁！萌宝！快到锅里来！
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <el-backtop target=".home_content_loaded" :bottom="8" :right="8">
          <div class="goTop"></div>
        </el-backtop>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      imgList: [1, 2, 3, 4, 5],
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .nav_layout {
    width: 100%;
    height: 44px;
    .border {
      border-bottom: 1px solid #e6e6e6;
    }
    .com_nav {
      width: 100%;
      height: 44px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .nav_content {
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #333;
        .nav_left {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 44px;
          img {
            width: 87px;
            height: 24px;
            margin-left: 16px;
          }
        }
        .nav_middle {
          flex: 1;
          line-height: 44px;
        }
        .nav_right {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 44px;
          .nav_switch_gender {
            width: 44px;
            height: 44px;
            background-image: url("../../assets/images/girl.8907d75c.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .nav_serach {
            width: 44px;
            height: 44px;
            background-image: url("../../assets/images/search.15e76af5.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .nav_mine {
            width: 44px;
            height: 44px;
            background-image: url("../../assets/images/mine.01301e95.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }

  .home_content_loaded {
    overflow-y: auto;
    flex: 1;
    .swipeContainer {
      padding-top: 8px;
      .swipe_wrap {
        width: 343px;
        height: 214px;
        margin: 0 16px;
        .mint-swipe {
          width: 343px;
          height: 214px;
          border-radius: 8px;
          overflow: hidden;
          .swiper-item {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 214px;
            }
          }
        }
      }
    }
    .home_menu {
      display: flex;
      padding: 16px;
      justify-content: space-between;
      img {
        width: 60px;
      }
      p {
        line-height: 24px;
        text-align: center;
        color: #333;
        font-size: 14px;
      }
    }
    .home_recommend_title::before {
      position: absolute;
      top: 11px;
      left: 0;
      content: "";
      width: 22px;
      height: 22px;
      background: url("../../assets/images/default_avatar.8bc0dfd7.png");
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
    }
  }
}
@import "@/assets/styles/home.scss";
</style>

<style lang="scss">
.goTop {
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: #fff;
  background-image: url("~@/assets/images/goTop.png");
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

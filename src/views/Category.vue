<template>
  <div class="category">
    <!-- 头部 -->
    <Header :isLeft="true" :isRight="true">
      <div class="head-left" slot="head-left">
        <i class="icon iconfont icon-zuo" @click="$router.go(-1)"></i>
      </div>
      <div class="head-center" slot="head-center">
        <i class="iconfont icon-sousuo"></i>
        <input value="" maxlength="20" name="keyword" id="msKeyWord" type="text" cleardefault="no" autocomplete="off" placeholder="蛋挞" class="hilight2">
      </div>
      <div class="head-right" slot="head-right">
        <router-link to="/search" slot="right-con" class="search-btn">搜本店</router-link>
      </div>
    </Header>

    <!-- 点餐方式 -->
    <div class="dcfs">
      <div class="pindan">拼单</div>
      <div class="codes"></div>
    </div>

    <!-- 信息 -->
    <div class="msg-details">

    </div>

    <!-- 商品列表 -->
    <div class="menu-view">
      <!-- 左侧分类列表 -->
      <div class="menu-wrapper" ref="menuScroll">
        <ul class="classified">
          <li v-for="(item,index) in goodLists"
              :key="index"
              :class="isActive == index ? 'active' : ''"
              @click="clickRouter(index)"
          >
            <img v-if="item.icon_url" :src="item.icon_url" alt="">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>

      <!-- 右侧商品内容 -->
      <div class="foods-wrapper" ref="foodScroll">
        <ul class="food-list">
          <li class="food-list-hook" v-for="(item,index) in goodLists" :key="index">
            <div class="category-tit">
              <b>{{ item.name }}</b>
            </div>
            <div class="food-details" v-for="food in item.foods" :key="food.item_id" >
              <img :src="food.image_path" alt="" class="fd-pic">
              <div class="fd-info">
                <h3 class="food-name">{{ food.name }}</h3>
                <div class="food-special-des" v-if="food.special_remind">
                  <p class="special-des" v-for="des in food.special_remind">{{ des }}</p>
                </div>
                <p class="food-des">{{ food.description }}</p>
                <p class="food-yspj">月售{{ food.month_sales }}</p>
                <div class="price-wrap">
                  <div class="price">
                    <span class="xianjia">¥<b>{{ food.price }}</b></span>
                    <span class="yuanjia" v-if="food.original_price">¥<b>{{ food.original_price }}</b></span>
                  </div>
                  <cart-controll :food="food" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import CartControll from "../components/shop/CartControll";

/* 引入接口数据 */
import { getShopList } from '../network/index'

/* 引入插件 */
import BScroll from 'better-scroll';


export default {
  name: "Category",
  data(){
    return{
      goodLists: [],
      isActive: -1,
      menuScroll: {}, // 左侧滚动对象
      foodScroll: {}, // 右侧滚动对象
    }
  },
  components:{
    Header,
    'cart-controll': CartControll
  },
  created() {
    getShopList().then(res => {
      this.goodLists = res.menus

      this.$nextTick(() => {
        // DOM 已经更新
        this.initScroll();
      })
    })
  },
  methods:{
    // better-scroll 食品分类滚动
    initScroll(){
      this.menuScroll = new BScroll(this.$refs.menuScroll,{
        click: true
      })
      this.foodScroll = new BScroll(this.$refs.foodScroll,{
        probeType: 3,
        click: true
      })
    },

    // 点击分类右侧菜单联动
    clickRouter(index){
      this.isActive = index;
      let foodList = this.$refs.foodScroll.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodScroll.scrollToElement(el,200)
    }
  }
}
</script>

<style scoped lang="less">
  .category{
    .w100();
    .h100();
    .bc(#fff);

    .header{
      border-bottom: none;
      .head-left{
        width: 8%;
        i{
          font-size: 1.2rem;
        }
      }
      .head-center{
        .df();
        align-items: center;
        width: 78%;
        margin-right: 5%;
        height: 2rem;
        line-height: 2rem;
        padding-left: 5%;
        .bc(#f4f4f4);
        border-radius: 1rem;
        .bs();
        i{
          margin-right: 5%;
          font-size: .86rem;
          color: #999;
        }
        input{
          .db();
          width: 88%;
          height: 100%;
          background-color: #f4f4f4;
          border-radius: 0 1rem 1rem 0;
        }
      }
      .head-right{
        width: 12%;
        font-size: .85rem;
        .c(#333);
      }
    }

    /* 点餐方式 */
    .dcfs{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6rem;
      padding-top: 3rem;
      .bs();
      .pindan{
        width: 15%;
        height: 2rem;
        line-height: 2rem;
        padding-left: 3%;
        font-size: .85rem;
        .c(#fff);
        border-radius: 0 1rem 1rem 0;
        .bc(#f39606);
        .bs();
      }
    }

    /* 信息 */
    .msg-details{
      .df();
      align-items: center;
      height: 2rem;
    }

    /* 商品列表 */
    .menu-view{
      display: flex;
      justify-content: space-between;
      height: calc(100% - 8rem);
      box-shadow: 1rem 1rem 1rem 1rem rgba(0,0,0,.07);
      .bs();

      /* 左侧分类列表 */
      .menu-wrapper{
        width: 25%;
        height: 100%;
        overflow-y: hidden;
        background: #f8f8f8;
        .classified li{
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 2.8rem;
          img{
            width: 20%;
            margin-right: 3%;
          }
          span{
            font-size: .95rem;
            color: #333;
          }
          &.active{
            background: #fff;
            &:before{
              position: absolute;
              left: 0;
              top: 0;
              content: '';
              width: 0.2rem;
              height: 100%;
              background: #ffbe5a;
            }
          }
        }
      }

      /* 右侧商品内容 */
      .foods-wrapper{
        width: 70%;
        height: 100%;
        padding-top: .7rem;
        .bs();
        overflow-y: hidden;
        .food-list{
          padding-bottom: 0.5rem;
          .category-tit{
            position: relative;
            margin-bottom: .8rem;
            padding-left: 3.5%;
            &:before{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
              content: '';
              width: .2rem;
              height: .8rem;
              background: #999;
            }
            b{
              font-size: 0.85rem;
              font-weight: normal;
              color: #999;
            }
          }
          .food-details {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            .fd-pic{
              width: 25%;
              margin-right: 5%;
            }
            .fd-info{
              width: 60%;
              .food-name{
                color: #333;
                font-weight: bold;
                font-size: 0.95rem;
                line-height: 1.5rem;
              }
              .food-special-des{
                .df();
                flex-wrap: wrap;
                align-items: center;
                margin-top: .5rem;
                .special-des{
                  width: max-content;
                  margin: 0 2% .2rem 0;
                  padding: 0 3%;
                  height: 1.4rem;
                  line-height: 1.4rem;
                  font-size: .4rem;
                  .tc();
                  .c(#999);
                  border-radius: 0.167rem;
                  .bc(#f1f1f1);
                }
              }
              .food-des,
              .food-yspj{
                line-height: 1rem;
                font-size: 0.75rem;
                color: #666;
              }
              .food-des{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              .price-wrap {
                .df();
                justify-content: space-between;
                align-items: center;
                margin-top: .5rem;
                .price{
                  .df();
                  align-items: flex-end;
                  .xianjia{
                    font-size: .65rem;
                    color: #333;
                    b{
                      font-size: 1rem;
                      .c(#333);
                      font-weight: normal;
                    }
                  }
                  .yuanjia{
                    .di();
                    padding-left: 4%;
                    font-size: .45rem;
                    .c(#afadad);
                    text-decoration: line-through;
                    b{
                      font-weight: normal;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="home">
    <!-- 头部 -->
    <Header title="甜品小屋" :isLeft="true" :isRight="true">
      <div class="head-left" slot="head-left">
        <i class="icon iconfont icon-daohang" @click="$router.push('/category')"></i>
      </div>
      <div class="head-center" slot="head-center">
        <p slot="center-con" class="head-tit">甜品小屋</p>
      </div>
      <div class="head-right" slot="head-right">
        <a href="javascript:void(0);" slot="right-con" class="login-btn" @click="$router.push('/login')">登录</a>
      </div>
    </Header>

    <!-- banner -->
    <div class="swiper-wrap">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item v-for="item in swiperArr" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 点餐方式 -->
    <div class="order-way-wrap" @click="$router.push('/category')">
      <div class="ways">
        <div class="ziqu mode">
          <img src="../assets/images/ziqu.png" alt="">
          <h3>自取</h3>
          <p>预约点单，到店自取</p>
        </div>
        <div class="waimai mode">
          <img src="../assets/images/waimai.png" alt="">
          <h3>外卖</h3>
          <p>外卖下单，快速送达</p>
        </div>
      </div>
      <div class="pindan">
        <p class="p1"><img src="../assets/images/dessert.png" alt="">好友拼单</p>
        <p class="p2">拼单尝甜品，分账更方便</p>
      </div>
    </div>

    <!-- lists -->
    <div class="lists">
      <div class="list new">
        <h3>新品尝鲜</h3>
        <p>新品上市</p>
        <img src="../assets/images/dessert.png" alt="">
      </div>
      <div class="list gstc">
        <h3>公司团餐</h3>
        <p>企业欢聚享福利</p>
        <img src="../assets/images/dessert.png" alt="">
      </div>
      <div class="list tpt">
        <h3>甜品台</h3>
        <p>甜品台</p>
        <img src="../assets/images/dessert.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
/* 引入组件 */
import Header from "../components/Header";
import { Swipe, SwipeItem } from 'mint-ui';

/* 引入接口数据 */
import { getHomeMultidata } from '../network/index'

export default {
  name: "Home",
  data(){
    return{
      swiperArr:[]
    }
  },
  components:{
    Header
  },
  created() {
    getHomeMultidata().then(res => {
      this.swiperArr = res.banner
    })
  }
}
</script>

<style scoped lang="less">
  .home{
    .w100();
    .h100();
    padding-top: 3rem;
    .bs();

    /* 头部 */
    .header{
      justify-content: space-between;
      border-bottom: none;
      .bc(#fbb64c);
      .head-left{
        i{
          font-size: 1.4rem;
          .c(#fff);
        }
      }
      .head-center{
        .head-tit{
          font-size: 1rem;
          .c(#fff);
          letter-spacing: 1px;
        }
      }
      .head-right{
        .login-btn{
          .db();
          font-size: 1rem;
          .c(#fff);
        }
      }
    }

    /* banner */
    .swiper-wrap{
      .w100();
      height: 13.667rem;
      img{
        .w100();
      }
    }

    /* 点餐方式 */
    .order-way-wrap{
      position: absolute;
      top: 230px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
      width: 90%;
      height: 13rem;
      background: #fff;
      box-shadow: 0px 0px 0.333rem 0px rgba(174, 174, 174, 0.28);
      border-radius: 0.333rem;
      .ways{
        display: flex;
        align-items: center;
        padding: 1.5rem 0;
        border-bottom: 1px solid #f6f1f1;
        .mode{
          flex: 1;
          text-align: center;
          img {
            width: 50px;
            margin: 0 auto;
          }
          h3{
            line-height: 30px;
            font-size: 16px;
          }
          p{
            line-height: 16px;
            font-size: 12px;
            color: #666;
          }
        }
        .ziqu{
          position: relative;
          &:after{
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            width: 1px;
            height: 76px;
            background: #f6f1f1;
          }
        }
      }
      .pindan{
        .df();
        align-items: center;
        height: 3.5rem;
        padding: 0 5%;
        .bs();
        .p1{
          flex: 1;
          .df();
          align-items: center;
          font-size: 1rem;
          .c(#333);
          img{
            width: 15%;
            margin-right: 3%;
          }
        }
        .p2{
          font-size: .85rem;
          .c(#666);
        }
      }
    }

    /* lists */
    .lists{
      .df();
      justify-content: space-between;
      width: 90%;
      margin: 13rem auto 0;
      .list{
        .pr();
        width: 32%;
        height: 8rem;
        border-radius: .4rem;
        h3{
          margin-left: 10%;
          padding-top: .5rem;
          font-size: 1rem;
          .c(#333);
        }
        p{
          line-height: 1.4rem;
          margin-left: 10%;
          font-size: .75rem;
          .c(#999);
        }
        img{
          .pa();
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          content: '';
          width: 50%;
        }
      }
      .new{
        .bc(#ffdfdf);
      }
      .gstc{
        .bc(#fbe4d0);
      }
      .tpt{
        .bc(#e9d8f3);
      }
    }
  }
</style>
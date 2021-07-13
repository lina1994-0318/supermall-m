<template>
  <div class="login">
    <!-- 关闭 -->
    <div class="close" @click="$router.push('/home')">
      <i class="iconfont icon-guanbi"></i>
    </div>

    <!-- 头像 -->
    <div class="login-head">
      <img src="../assets/images/tou_xiang.jpg" alt="">
    </div>

    <!-- 表单 -->
    <form onsubmit="return false;" id="form1" class="form1">
      <!-- 手机号 -->
      <input-group type="number"
                   placeholder="请输入您的手机号码"
                   name="Telephone"
                   v-model="phone"
                   :error="error.phone"
      />

      <!-- 验证码 -->
      <input-group type="number"
                   placeholder="请输入正确的验证码"
                   name="JiaoYanMa"
                   v-model="verifyCode"
                   :btnTitle="btnTitle"
                   :disabled="disabled"
                   :error="error.code"
                   @btnClick="getVerfyCode()"
      />

       <!-- 验证码 -->
      <input-group type="number"
                   placeholder="请输入正确的验证码"
                   name="JiaoYanMa"
                   v-model="verifyCode"
                   :disabled="disabled"
                   :error="error.code"
                   :canvas='true'
                   @CanvasClick="getImgReg()"
      />

      <p class="tip">* 未注册过甜品小屋的用户，登录时默认注册</p>
      <a href="javascript: void(0);" class="form-btn" @click="clickLogin()">登录</a>
      <div class="agreement">
        <label><input name="regTreaty" type="checkbox" value="checkbox" checked="checked">已阅读并同意</label>
        <a href="javascript:void(0);">《服务协议》</a>
        <a href="javascript:void(0);">《用户隐私政策》</a>
      </div>
    </form>


    <!-- 其他方式登录 -->
    <div class="other-login-methods">
      <p>其他登录方式</p>
      <div class="methods">
        <div class="method wx-method">
          <img src="../assets/images/wx.png" alt="">
          <span>微信</span>
        </div>
        <div class="method zfb-method">
          <img src="../assets/images/zfb.png" alt="">
          <span>支付宝</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputGroup from '../components/InputGroup'

  export default {
    name: "Login",
    data(){
      return{
        phone: '',
        verifyCode: '',
        btnTitle: '获取验证码',
        disabled: false,
        error: {},
        regStr:'',//图片验证的值
      }
    },
    components: {
      'input-group': InputGroup
    },
    mounted(){
      this.getImgReg()
    },
    methods:{
      // 生成图片验证
      getImgReg(){
        let Str = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let reg = [1,'a','A',1]
        let regStr = ''
        reg.forEach(item=>{
          // 创建验证码
          let random = reg[parseInt(Math.random()*3)]
            if(random === 1){
              regStr += parseInt(Math.random()*10)
            }else if(random === 'a'){
              regStr += Str[parseInt(Math.random()*26)]
            }else{
              regStr += Str[parseInt(Math.random()*26)].toLocaleUpperCase()
            }
        })
        this.regStr = regStr
        this.$nextTick(()=>{
          // 生成canvas
          let canvasDom = document.querySelector('#reg_canvas')
          canvasDom.width = canvasDom.width
          let ctx = canvasDom.getContext("2d");
          // 验证码填充
          ctx.font = '34px Arial';
          ctx.fillText(regStr,35,40);
          for(let i = 0; i < 30; i++){
            // 背景填充
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            let rgb = `rgb(${r},${g},${b})`;
            ctx.fillStyle = rgb;
            ctx.fillRect(Math.random()*150,Math.random()*50,Math.random()*9,Math.random()*9);
          }
        })
        
      },
      // 点击获取验证码
      getVerfyCode(){
        if(this.validatePhone()){
          this.validateBtn();
          // 发送网络请求
        }
      },

      // 点击登录
      clickLogin(){
        this.getVerfyCode()
      },

      // 验证手机号
      validatePhone(){
        var myReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
            userPhone = this.phone.length;

        // 验证手机号码
        if(!userPhone || userPhone == null || userPhone == 0){
          this.error = {
            phone: "手机号码不能为空"
          }
          return false;
        }else if(!myReg.test(this.phone) || userPhone != 11){
          this.error = {
            phone: "请输入正确的手机号码"
          }
          return false;
        }else{
          this.error = {};
          return true;
        }
      },

      // 验证码 60秒倒计时
      validateBtn(){
        let time = 60;
        let timer = setInterval(() => {
          if(time == 0){
            clearInterval(timer);
            this.btnTitle = "获取验证码";
            this.disabled = false;
          }else{
            // 倒计时
            this.btnTitle = time + "秒后重试";
            this.disabled = true;
            time--;
          }
        },1000)
      }
    }
  }
</script>

<style scoped lang="less">
  .login{
    .pr();
    .w100();
    .h100();
    padding-top: 6rem;
    .bc(#fff);
    .bs();

    // 关闭
    .close{
      .pa();
      top: 1rem;
      right: 3%;
      i{
        font-size: 2rem;
        .c(#ffbe5a);
      }
    }

    // 头像
    .login-head{
      margin: 0 auto 2rem;
      width: 5.333rem;
      height: 5.333rem;
      border-radius: 50%;
      border: 1px solid #ffa200;
      box-sizing: border-box;
      img{
        width: 100%;
        border-radius: 50%;
      }
    }

    // 表单
    .form1{
      width: 85%;
      .m0();
      .form-btn{
        display: block;
        width: 72%;
        margin: 2rem auto 0;
        height: 2.667rem;
        line-height: 2.667rem;
        text-align: center;
        font-size: 1.333rem;
        color: #fff;
        .bc(#ffbe5a);
        border-radius: 2.667rem;
        border: none;
        &[disabled]{
          background-color: #f1d09d;
        }
      }
      .agreement {
        text-align: center;
        margin:  1rem auto 0;
      }
      .agreement label {
        position: relative;
        padding-left: 1.2rem;
        color: #666666;
        font-size: .75rem;
      }
      .agreement a{
        color: #ffbe5a;
        font-size: 0.8rem;
      }
      .agreement input {
        display: inline-block;
        -webkit-appearance: none;
        appearance: none;
        width: .9rem;
        height: .9rem;
        position: absolute;
        top:50%;
        left:0;
        transform: translateY(-50%);
        background: url('../assets/images/unchecked.png') no-repeat;
        background-size: 100% 100%;
      }
      .agreement input:checked {
        background: url('../assets/images/checked.png') no-repeat;
        background-size: 100% 100%;
      }
      .tip{
        line-height: 2rem;
        font-size: .6rem;
        color: #ffbe5a;
      }
    }

    // 其他登录方式
    .other-login-methods{
      .pa();
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 85%;
      p{
        .pr();
        .w100();
        line-height: 2rem;
        margin-bottom: 1rem;
        .tc();
        font-size: .8rem;
        .c(rgba(0,0,0,.2));
        &:before,
        &:after{
          .pa();
          top: 50%;
          transform: translateY(-50%);
          content: '';
          width: 30%;
          height: 1px;
          .bc(rgba(0,0,0,.1));
        }
        &:before{
          left: 0;
        }
        &:after{
          right: 0;
        }
      }
      .methods{
        .df();
        justify-content: space-between;
        width: 60%;
        .m0();
        .tc();
        .method{
          width: 50%;
          img{
            width: 2rem;
            .m0();
          }
          span{
            .db();
            line-height: 1.8rem;
            font-size: .8rem;
            .c(rgba(0,0,0,.4));
          }
        }
      }
    }
  }

</style>
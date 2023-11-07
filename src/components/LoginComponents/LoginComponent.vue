<template>
  <div class="main-container login-container">
    <div class="box-container">
      <div class="box-size">
        <div class="box-image-text"></div>
        <div class="box-image-filter">
          <span class="text-main-font text-main">Welcome to MyStock</span>
          <span class="text-secundary-font text-subtitle">Sing In To Your Account</span>
          <span class="text-main-font footer-text">mystock.com</span>
        </div>
      </div>
      <div class="box-size box-form">
        <div class="header-contaier">
          <span class="text-secundary-font main-header-text ">Hello {{ getTimeZone }} !</span>
          <span class="text-secundary-font">MyStock Was Wating For You ! </span>
        </div>
        <div class="login-content-text">
          <span class="text-secundary-font"><span class="main-login-text">Login</span> Your Account</span>
        </div>
        <form class="form-container">
          <div class="form-control-size">
            <CustomInput label="Email Address" type="text" property="email" @handleValue="handleValue"/>
            <CustomInput label="Password" type="password"  property="password" @handleValue="handleValue"/>
          </div>
          <div class="login-info">
            <CustomCheckbox label="Remember"/>
            <span class="text-secundary-font forgot-text">Forgot Your Password ?</span>
          </div>
          <CustomButton class="btn-form" label="Submit" @onClick="loginOnSystem"/>
          <span class="text-secundary-font" v-if="userType === 'company'"> <span class="contact-us-text"> Contact Us </span> For Get Account</span>
          <span class="text-secundary-font" v-if="userType === 'user'">Join Us<span class="contact-us-text"> Create Account </span> </span>
        </form>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomInput from '../../components/Form/CustomInput.vue'
import CustomCheckbox from '../../components/Form/CustomCheckbox.vue'
import CustomButton from '../../components/Form/CustomButton.vue'

import { loginUser } from '../../services/auth'

@Options({
  props: {
    userType: String
  },
  components: {
    CustomInput,
    CustomCheckbox,
    CustomButton
  }
})
export default class LoginComponent extends Vue {
  userType!: string

  loginData: any = {
    email: null,
    password: null
  }

  async mounted() {
  }

  get getTimeZone () {
    const curremtTime = new Date().toLocaleString().split(',')[1]
    const hour: number = Number(curremtTime.split(':')[0])

    if (hour >=  5 && hour <= 11) return 'Good Morning'
    if (hour >=  12 && hour <= 18) return 'Good Afternoon'
    if (hour <= 5 || hour >=  18) return 'Good Night'
    return 'Good Day'
  }

  handleValue(value: any, property: any) {
    this.loginData[property] = value
  }

  async loginOnSystem () {
    const {user, accessToken: jwtToken} = await loginUser(this.loginData)
    console.log(user)
    window.localStorage.setItem('jwtToken', jwtToken.accessToken);
  }



}
</script>
<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  .box-container {
    border-radius: 10px;
    display: flex;
    width: 100%;
    background-color: gray;
    width: 60%;
    max-width: 1400px;
    min-width: 800px;
    height: 700px;
    .box-size {
      position: relative;
      width: 50%;
      height: 100%;
    }
    .box-form {
      background-color: #fff;
      border-radius: 0px 10px 10px 0px;
      .header-contaier {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        margin-top: 110px;

        .main-header-text {
          color: #176FA6;
          font-weight: bold;
          font-size: 18px;
        }

      }

      .login-content-text {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        font-size: 20px;
        .main-login-text {
          color: #176FA6;
          font-weight: bold;
        }
      }

      .icon-container {
        display: flex;
        justify-content: center;
        margin-top: 30px;
      }

      .form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 12px;
        .login-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 63%;
          .forgot-text {
            font-size: 14px;
            margin-bottom: 20px;

              &:hover {
                cursor: pointer;
                color: #5FC2D9;
                text-decoration: underline;
              }
          }
        }
        .form-control-size {
          width: 60%;
        }
        .btn-form :deep() {
          width: 70%;
          margin-top: 40px;
          margin-bottom: 10px;
          .v-btn { 
            background-image: linear-gradient(90deg, variables.$color-2, variables.$color-1);
            color: white;
            font-size: 22px;
          }
        }
      }

      .contact-us-text {
        color: #176FA6;
        font-weight: 500;
        &:hover {
          color: #5FC2D9;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .box-image-text {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 10px 0px 0px 10px;
      background-image: url('../../assets/img/login-background.jpg');
      background-repeat: no-repeat;
      background-position-x: 97%;
      background-position-y: 100%;
    }
    .box-image-filter {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px 0px 0px 10px;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: #176fa662;
      .text-main {
        color: #fff;
        font-size: 30px;
        letter-spacing: 1px;
      }
      .text-subtitle {
        color: #fff;
        font-size: 16px;
        font-weight: 300;
      }
      .footer-text{
        position: absolute;
        bottom: 20px;
        color: #fff;
        font-size: 20px;
      }
    }
  }

}

</style>

<template>
  <div class="register-container">
    <div class="register-title">
      <p>{{ $t("lang.views.signup.title") }}</p>
      <div v-if="registerStatus === 'error'" class="error-signup">{{error}}</div>
    </div>
    <form class="space-reset" @submit.prevent="signup">
      <div>
        <div class="form-stacked">
          <div class="space-bottom-2">
            <label>{{ $t("lang.views.signup.labels.email") }}</label>
            <el-input v-bind:placeholder="$t('lang.components.input.placeholder.email')"
              name="email" v-model="email" v-validate="{required: true, email: true}"
              :class="{'input': true, 'is-danger': errors.has('email') }"></el-input>
            <span v-show="errors.has('email')" class="help is-danger">{{errors.first('email')}}</span>
          </div>
        </div>
        <div class="form-stacked">
          <div class="space-bottom-2">
            <label>{{ $t("lang.views.signup.labels.password") }}</label>
            <el-input type="password" v-bind:placeholder="$t('lang.components.input.placeholder.password')"
              name="password" v-model="password" v-validate="{required: true}"
              :class="{'input': true, 'is-danger': errors.has('password') }"></el-input>
            <span v-show="errors.has('password')" class="help is-danger">{{errors.first('password')}}</span>
          </div>
        </div>
        <div class="txt-center space-t-1h space-b-1h">
          <label class="txt-xsmall">
            <input name="terms" v-validate="'required'" type="checkbox">
            {{ $t("lang.views.signup.term_service") }}
          </label>
          <span class="help is-danger" v-show="errors.has('terms')">{{ errors.first('terms') }}</span>
        </div>
        <button class="button-full">{{ $t("lang.views.signup.register") }}</button>
      </div>
    </form>
    <div class="signup-with-oauth">
      <p class="register__sub-title">{{ $t("lang.views.signup.social_accounts.title") }}</p>
      <button class="loginBtn btn-ful loginBtn--facebook">
        {{ $t("lang.views.signup.social_accounts.facebook") }}
      </button>
      <button class="loginBtn btn-ful loginBtn--google">
        {{ $t("lang.views.signup.social_accounts.google") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      title: 'Signup',
      email: '',
      password: '',
      error: ''
    }
  },
  head: {
    title: function () {
      return {
        inner: this.title
      }
    }
  },
  methods: {
    signup: function () {
      this.$validator.validateAll().then((result) => {
        const {email, password} = this
        if (result) {
          this.$store.dispatch('register/REGISTER_REQUEST', {email, password, social_type: 'email'}).then((result) => {
            if (this.registerStatus === 'success') {
              this.$router.push('/')
            } else {
              this.error = this.errorMessage
            }
          })
        }
      })
    }
  },
  computed: {
    registerStatus () {
      return this.$store.getters['register/registerStatus']
    },
    errorMessage () {
      return this.$store.getters['register/errorMessage']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .register-container {
    width: 360px;
    background: #fff;
    margin: 0 auto;
    padding: 20px;

    .register-title {
      margin-bottom: 15px;
      p {
        font-size: 22px;
        line-height: 1.3;
        color: #222222;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        padding: 25px 0 0 0;
        font-weight: bold;
        letter-spacing: 0.03em;
      }
    }

    .space-bottom-2 {
      margin-bottom: 20px;
      font-size: 15px;
    }

    .button-full {
      border-radius: 4px !important;
      -ms-box-sizing: border-box;
      box-sizing: border-box;
      display: block;
      text-align: center;
      cursor: pointer;
      font-size: 18px;
      width: 100%;
      height: 50px;
      line-height: 48px;
      border: 1px solid #2cb696;
      background-color: #2cb696;
      color: #fff;
    }

    .space-b-1h {
      margin-bottom: 15px;
    }

    .space-t-1h {
      margin-bottom: 15px;
    }

    .txt-xsmall {
      font-size: 15px;
    }

    label {
      margin-bottom: 5px;
    }
  }

  .signup-with-oauth {
    border-top: 1px solid #e1e5e7;
    margin-top: 20px;

    .register__sub-title {
      font-weight: bold;
      text-align: center;
      margin: 20px 0 10px 0;
    }
    ul {
      list-style-type: none;
    }
    li {
      width: 100%;
      list-style: none;
      display: inline;
    }
  }

  .loginBtn {
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;
    width: 47%;
    display: inline;
  }

  .loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }
  .loginBtn:focus {
    outline: none;
  }
  .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
  }

  /* Facebook */
  .loginBtn--facebook {
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
    text-shadow: 0 -1px 0 #354C8C;
  }
  .loginBtn--facebook:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
  }
  .loginBtn--facebook:hover,
  .loginBtn--facebook:focus {
    background-color: #5B7BD5;
    background-image: linear-gradient(#5B7BD5, #4864B1);
  }

  /* Google */
  .loginBtn--google {
    /*font-family: "Roboto", Roboto, arial, sans-serif;*/
    background: #DD4B39;
    margin-left: 5px;
  }
  .loginBtn--google:before {
    border-right: #BB3F30 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  }
  .loginBtn--google:hover,
  .loginBtn--google:focus {
    background: #E74B37;
  }

  .error-signup {
    color: red;
    margin-top: 10px;
    margin-bottom: -10px;
    text-align: center;
  }
</style>

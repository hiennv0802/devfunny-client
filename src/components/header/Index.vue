<template>
  <header class="cd-auto-hide-header">
    <nav class="cd-primary-nav">
      <div class="renewal-l-header__inner">
        <h2 class="renewal-l-header__logo">
          <a routerLink="/"><img src="../../assets/img/logo.png" alt="Logo"></a>
        </h2>

        <div class="renewal-l-header__right">
          <ul class="renewal-p-iconNav">
            <li class="renewal-p-iconNav__textLink">
              <router-link to="/signin">Sign in</router-link>
              <router-link to="/signup"> / Sign up</router-link>
            </li>

            <li class="renewal-p-iconNav__item">
              <a>
                <i class="renewal-p-icon renewal-p-icon--search"></i>
              </a>
            </li>

            <li class="renewal-p-iconNav__item">
              <a>
                <i class="renewal-p-icon renewal-p-icon--notification"></i>
              </a>
            </li>

            <li class="renewal-p-iconNav__item">
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="cd-secondary-nav-container">
      <nav class="cd-secondary-nav">
        <div>
          <ul>
            <li><a class="active" href="#0">Hot</a></li>
            <li><a href="#0">Trending</a></li>
            <li><a href="#0">Video</a></li>
            <li><a href="#0">GIF</a></li>
            <li><a href="#0">Trending</a></li>
            <li><a href="#0">Video</a></li>
            <li><a href="#0">GIF</a></li>
            <li><a href="#0">Trending</a></li>
            <li><a href="#0">Video</a></li>
            <li><a href="#0">GIF</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

</template>

<script>

export default {
  name: 'Header',
  components: {
  },
  data () {
    return {
      msg: 'Home page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.renewal-l-header__inner{
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 9px 0;
  max-width: $size_content;

  /* SP */
  @include mq-sp {
    overflow-x: visible;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    padding: 5px 0;
  }
}
.renewal-l-header__logo{
  img {
    height: 35px;
  }
}
.renewal-l-header__right{
  display: flex;
  align-items: center;
  margin-left: auto;
}
.renewal-p-iconNav{
  display: flex;
  align-items: center;
}
.renewal-p-iconNav__item{
  margin-left: 10px;
  font-size: 0;
  cursor: pointer;
  /* SP */
  @include mq-sp {
    margin-left: 5px;
  }
  &:first-child{
    margin-left: 0;
  }
  > a{
    display: inline-block;
    position: relative;
  }
}
.renewal-p-iconNav__textLink{
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  /* SP */
  @include mq-sp {
    > a:first-child,
    > span{
      //display: none;
    }
  }
  > a,
  > span{
    color: $color-link;
  }
  > span{
    margin: 0 5px;
  }
  > a{
    &:hover{
      color: $color-link--hover;
    }
    > span{
      /* SP */
      @include mq-sp {
        display: none;
      }
    }
  }
}

.cd-auto-hide-header {
  background-color: $color-white;
  height: 56px;
  left: 0;
  position: fixed;
  top: 0;
  transform: translateZ(0);
  transition: transform .5s;
  width: 100%;
  will-change: transform;
  z-index: 2;

  @include mq-sp {
    height: 48px;
  }

  &.is-hidden {
    transform: translateY(-100%);
  }
}

.cd-primary-nav {
  clear: both;
  display: table;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  width: 100%;
}

.cd-secondary-nav-container {
  background-color: $color-white;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);
  position: relative;
  z-index: -1;
}

.cd-secondary-nav {
  position: relative;
  z-index: 1;
  clear: both;
  width: 100%;
  height: 50px;
  background-color: $color-white;
  transform: translateZ(0);
  will-change: transform;
  transition: transform .5s;

  position: relative;
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: hidden!important;

  box-sizing: border-box;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.15);

  @include mq-sp {
    height: 46px;
  }

  &.nav-end::after {
    opacity: 0;
  }

  ul, li, a {
    height: 100%;
  }

  ul {
    /* enables a flex context for all its direct children */
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid rgba(0,0,0,.05)!important
  }

  li {
    display: inline-block;
    float: left;
    /* do not shrink - elements float on the right of the element */
    flex-shrink: 0;

    &:last-of-type {
      padding-right: 20px;
    }
  }

  a {
    display: block;
    font-size: 14px;
    opacity: .6;
    line-height: 50px;
    padding: 0 1em;

    @include mq-sp {
      height: 46px;
      line-height: 45px;
    }

    &:hover, &.active {
      opacity: 1;
    }
  }
}

</style>

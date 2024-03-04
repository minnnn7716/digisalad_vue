<script>
import { Offcanvas } from 'bootstrap';

export default {
  props: ['isShow'],
  methods: {
    showOffcanvas() {
      this.offcanvas.show();
    },
    hideOffcanvas() {
      this.offcanvas.hide();
    },
    routerPush(router) {
      this.$router.push(router);
      this.offcanvas.hide();
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
    this.offcanvas.hide();
  },
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-xl fixed-top" :class="isShow">
      <div class="container-fluid">
        <a href="#" class="navbar-brand hover-scale">
          <h1>Digi Salad</h1>
        </a>
        <div>
          <a href="#" class="d-none d-md-inline-block btn me-9 px-4 py-2 bg-primary-linear text-white fs-normal2 fw-bold ls-1 rounded-pill hover-scale transition-sm">
            START YOUR PROJECT
          </a>
          <button
            type="button"
            class="btn p-2 border-0 position-relative hover-scale transition-sm"
            @click="showOffcanvas"
          >
            <img class="btn-list btn-list-light" src="../assets/images/icon-list-light.svg" alt="導覽列">
            <img class="btn-list btn-list-dark" src="../assets/images/icon-list-dark.svg" alt="導覽列">
          </button>
        </div>
      </div>
    </nav>

    <div class="offcanvas offcanvas-top" data-bs-scroll="false" tabindex="-1" ref="offcanvas">
      <div class="offcanvas-header">
        <a
          href="#"
          class="hover-scale"
          @click.prevent="routerPush('/')"
        >
          <h3 class="offcanvas-title" id="offcanvasLabel">
            <img class="offcanvas-logo img-fluid" src="../assets/images/logo-light.svg" alt="DigiSalad">
          </h3>
        </a>
        <button
          type="button"
          class="btn-close my-0 ms-0 me-xl-7 p-2 fs-3 shadow-none hover-scale"
          @click="hideOffcanvas"
        />
      </div>
      <div class="offcanvas-body pt-20 pt-md-25 pt-xl-20 pb-6 py-md-15">
        <div class="container">
          <div class="offcanvas-grid offcanvas-grid-start">
            <div />
            <a
              href="#"
              @click.prevent="routerPush('/#about')"
              class="offcanvas-item about">
              <div class="d-flex align-items-center">
                <div class="img-container">
                  <img class="me-md-6 img-fluid" src="../assets/images/icon-ingredient-vegetable.svg" alt="ABOUT US">
                </div>
                <div>
                  <p>EMPOWERING BRANDS</p>
                  <h4 class="title-hasDot title-hasDot-danger">ABOUT US</h4>
                </div>
              </div>
            </a>
            <a
              href="#"
              class="offcanvas-item work"
              @click.prevent="routerPush('/#showcase')"
            >
              <div class="d-flex align-items-center">
                <div class="img-container">
                  <img class="me-md-6 img-fluid" src="../assets/images/icon-ingredient-tomato.svg" alt="WORKS">
                </div>
                <div>
                  <p>CASE STUDIES</p>
                  <h4 class="title-hasDot title-hasDot-primary">WORKS</h4>
                </div>
              </div>
            </a>
            <div />
          </div>
          <div class="offcanvas-grid offcanvas-grid-middle">
            <a
              href="#"
              @click.prevent="routerPush('/#awards')"
              class="offcanvas-item careers">
              <div class="d-flex flex-xl-column align-items-center align-items-xl-start">
                <div class="img-container">
                  <img class="mb-xl-7 img-fluid" src="../assets/images/icon-ingredient-cheese.svg" alt="CAREERS">
                </div>
                <div>
                  <p>BE COOL WITH US</p>
                  <h4 class="title-hasDot title-hasDot-danger">CAREERS</h4>
                </div>
              </div>
            </a>
            <a
              href="#"
              class="offcanvas-item insights"
              @click.prevent="routerPush('/#founder')"
            >
              <div class="d-flex flex-xl-column align-items-center align-items-xl-start">
                <div class="img-container">
                  <img class="mb-xl-4 img-fluid" src="../assets/images/icon-ingredient-gherkin.svg" alt="INSIGHTS">
                </div>
                <div>
                  <p>OUR STRATEGIES</p>
                  <h4 class="title-hasDot title-hasDot-danger">INSIGHTS</h4>
                </div>
              </div>
            </a>
          </div>
          <div class="offcanvas-grid offcanvas-grid-end">
            <div />
            <a
              href="#"
              class="offcanvas-item services"
              @click.prevent="routerPush('/#services')"
            >
              <div class="d-flex flex-xl-column align-items-center align-items-xl-start">
                <div class="img-container">
                  <img class="mb-xl-4 img-fluid" src="../assets/images/icon-ingredient-carrot.svg" alt="SERVICES">
                </div>
                <div>
                  <p>AREAS OF EXPERTISE</p>
                  <h4 class="title-hasDot title-hasDot-danger">SERVICES</h4>
                </div>
              </div>
            </a>
            <a
              href="#"
              class="offcanvas-item contact"
              @click.prevent="routerPush('/#showcase')"
            >
              <div>
                <p>START YOUR JOURNEY WITH US</p>
                <h4 class="title-hasDot title-hasDot-danger">CONTACT</h4>
              </div>
            </a>
            <div />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.navbar,
.navbar-brand,
.btn-list {
  transition: all ease .3s;
}

.navbar {
  padding: 12px;
  background-color: rgba(255, 255, 255, 0);

  @include media-breakpoint-up(md) {
    padding: 20px;
  }

  @include media-breakpoint-up(xl) {
    padding: 25px 50px 20px 50px;
  }

  &-brand {
    width: 95px;
    height: 42px;
    background: center / contain no-repeat url("../assets/images/logo.webp");
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
    cursor: none;

    @include media-breakpoint-up(md) {
      width: 120px;
      height: 54px;
    }

    @include media-breakpoint-up(xl) {
      margin-left: 30px;
    }
  }

  .btn-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .btn-list-light {
      opacity: 1;
    }

    .btn-list-dark {
      opacity: 0;
    }

  &.show {
    background-color: rgba(255, 255, 255, .9);

    .navbar-brand {
      opacity: 1;
      cursor: pointer;
    }

    .btn-list-light {
      opacity: 0;
    }

    .btn-list-dark {
      opacity: 1;
    }
  }
}
.offcanvas.offcanvas-top {
  background:
  linear-gradient(
    rgba(88, 88, 128, 0.9) 3.61%,
    rgba(38, 198, 208, 0.9) 95.7%
  ),
  center / cover no-repeat url('../assets/images/header-bg-temp.webp');
}

.offcanvas {
  &-header {
    position: absolute;
    padding: 12px 24px;
    left: 0;
    right: 0;
    top: 0;

    @include media-breakpoint-up(md) {
      padding: 20px;
    }

    @include media-breakpoint-up(xl) {
      padding: 25px 50px 20px 50px;
    }
  }

  &-body {
    @include media-breakpoint-up(xl) {
      overflow-y: unset;

      .container {
        height: 100%;
      }
    }
  }

  &-logo {
    width: 95px;
    height: 42px;

    @include media-breakpoint-up(md) {
      margin-left: 30px;
      width: 140px;
      height: 62px;
    }

    @include media-breakpoint-up(xl) {
      margin-left: 30px;
    }
  }

  &-item {
    display: flex;
    padding: 24px 16px 20px 16px;
    margin-bottom: 16px;
    border-radius: 30px;
    letter-spacing: .125em;
    background: #fff;
    color: #fff;
    transition: all ease .3s;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    @include media-breakpoint-up(md) {
      padding: 32px 24px 28px 24px;
    }

    @include media-breakpoint-up(xl) {
      align-items: end;
      padding: 0 32px 20px 32px;
      margin-bottom: 0;
    }

    @include media-breakpoint-up(3xl) {
      padding: 0 32px 48px 32px;
    }

    h4 {
      font-size: 28px;
      font-weight: 700;

      @include media-breakpoint-up(xl) {
        font-size: 32px;
      }
    }

    p {
      font-size: 14px;
      margin-bottom: 4px;

      @include media-breakpoint-up(xl) {
        font-size: 16px;
        margin-bottom: 8px;
      }
    }

    .img-container {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;

      @include media-breakpoint-up(xl) {
        width: fit-content;
        margin-right: 0;
      }
    }

    &.about {
      background:
      center / cover no-repeat url('../assets/images/nav-btnBg-about.webp'),
      linear-gradient(
        rgba(38, 198, 208),
        rgba(38, 198, 208)
      )
    }

    &.work {
      background:
      center / cover no-repeat url('../assets/images/nav-btnBg-works.webp'),
      linear-gradient(
        #EE6C8A,
        #EE6C8A
      )
    }

    &.careers {
      background:
      center / cover no-repeat url('../assets/images/nav-btnBg-careers.webp'),
      linear-gradient(
        #E6A94E,
        #E6A94E
      )
    }

    &.insights {
      background:
      center / cover no-repeat url('../assets/images/nav-btnBg-insights.webp'),
      linear-gradient(
        #26D0A8,
        #26D0A8
      )
    }

    &.services {
      background:
      center / cover no-repeat url('../assets/images/nav-btnBg-service.webp'),
      linear-gradient(
        #585880,
        #585880
      )
    }

    &.contact {
      padding-top: 28px;

      @include media-breakpoint-up(xl) {
        align-items: center;
        padding: 0 32px;
      }

      h4 {
        color: #26C6D0;
      }

      p {
        color: #262626;
      }
    }
  }

  .container {
    max-width: 1156px;
    @include media-breakpoint-up(xl) {
      display: grid;
      grid-template-columns: 380px 290px 380px;
      grid-column-gap: 40px;
    }
  }

  &-grid {
    @include media-breakpoint-up(xl) {
      display: grid;

      &-start {
        grid-template-rows: 7% 27% 42% 24%;
        grid-row-gap: 24px;
      }

      &-middle {
        grid-template-rows: 57% 36%;
        grid-row-gap: 24px;
      }

      &-end {
        grid-template-rows: 7% 42% 27% 24%;
        grid-row-gap: 24px;
      }
    }

    @include media-breakpoint-up(3xl) {
      &-start,
      &-middle,
      &-end {
        grid-row-gap: 40px;
      }
    }
  }
}
</style>

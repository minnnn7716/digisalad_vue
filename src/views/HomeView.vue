<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShowcaseSwiper from '@/components/ShowcaseSwiper.vue';

export default {
  data() {
    return {
      isLoad: true,
      servicesData: [
        {
          title: 'UX DESING',
          img: 'icon-ingredient-vegetable.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          title: 'UI DESING',
          img: 'icon-ingredient-tomato.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          title: 'WEBSITE &nbsp DEVELOPMENT',
          img: 'icon-ingredient-cheese.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          title: 'MOBILE APP &nbsp DEVELOPMEN',
          img: 'icon-ingredient-gherkin.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          title: 'ECOMMERCE',
          img: 'icon-ingredient-orange.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          title: 'CUSTOMER &nbsp LOYALTY',
          img: 'icon-ingredient-kiwi.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          title: 'DIGITAL &nbsp TRANSFORMATION',
          img: 'icon-ingredient-watermelon.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          title: 'DIGITAL &nbsp MARKETING',
          img: 'icon-ingredient-corn.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          title: 'BRANDING',
          img: 'icon-ingredient-apple.svg',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
      ],
    };
  },
  components: {
    ShowcaseSwiper,
  },
  methods: {
    setVideoRadio() {
      const video = document.querySelector('.header-video');
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      if (windowHeight > windowWidth) {
        video.style.height = '100%';
        video.style.width = 'auto';
      } else {
        video.style.height = 'auto';
        video.style.width = '100%';
      }
    },
    videoLoad() {
      const { video } = this.$refs;

      if (video.attachEvent) {
        video.attachEvent('onLoad', () => {
          setTimeout(() => {
            this.isLoad = false;
          }, 3000);
        });
      } else {
        video.onload = () => {
          setTimeout(() => {
            this.isLoad = false;
          }, 3000);
        };
      }
    },
    imgUrl(imgName) {
      const imgUrl = new URL(`../assets/images/${imgName}`, import.meta.url).href;
      return imgUrl;
    },
  },
  mounted() {
    AOS.init({
      duration: 700,
      delay: 100,
    });

    this.setVideoRadio();
    window.addEventListener('resize', this.setVideoRadio);

    this.videoLoad();
  },
};
</script>

<template>
  <header class="header" id="header">
    <div class="header-containMask">
      <div class="header-main">
        <div
          class="header-subtitle"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <p class="fw-bold ls-2">DIGITAL AGENCY</p>
        </div>
        <div class="header-mainTitle">
          <img
            class="header-mainTitle-logo mb-4 mb-md-8 img-fluid"
            src="@/assets/images/logo-light.svg"
            alt="Digi Salad"
            data-aos="fade-left"
            data-aos-delay="1500"
            data-aos-duration="1500"
          >
          <h2
            class="fs-3 fs-md-1 fw-bold ls-lg lh-xl"
            data-aos="fade-left"
            data-aos-delay="2000"
            data-aos-duration="1500"
          >
            WE CREATE <br>
            AMAZING <br>
            <span class="title-straight title-straight-primary title-hasDot title-hasDot-danger lh-base">DIGITAL EXPERIENCES</span>
          </h2>
        </div>
        <div class="header-callToAction">
          <RouterLink
            data-aos="fade-up"
            data-aos-delay="2500"
            data-aos-duration="1500"
            to="/#about"
          >
            <img class="mb-3 img-fluid" src="../assets/images/icon-taste now.svg" alt="TASTE US NOW!">
            <p class="fs-normal2 fw-bold ls-2">TASTE US NOW!</p>
          </RouterLink>
        </div>
      </div>

      <div class="tempBG" :class="{ hide: !isLoad }" />

      <iframe
        ref="video"
        class="header-video"
        frameborder="0"
        allowfullscreen
        title="DigiSalad Website"
        src="https://www.youtube.com/embed/8_4JRK4QkqU?si=seDJMdaZAJnjCFeS&amp;autoplay=1&amp;loop=1&amp;playlist=8_4JRK4QkqU&amp;wmode=transparent&amp;modestbranding=0&amp;branding=0&amp;mute=1&amp;rel=0&amp;enablejsapi=1&amp;widgetid=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  </header>

  <section class="about text-center" id="about">
    <div class="container" data-aos="fade-up">
      <h3 class="mb-15 mb-md-21 title-hasDot title-hasDot-danger title-wavy title-wavy-light fs-4 fs-md-3 fw-bold ls-sm">
        ABOUT DIGISALAD
      </h3>
      <iframe
        width="100%"
        class="about-video mb-8"
        frameborder="0"
        allowfullscreen
        title="About DigiSalad - 為您創造驚喜的用戶體驗"
        src="https://www.youtube.com/embed/IeIRJ9jZ5Ro?si=N1xQf8hknHUcMY8i"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <p class="mb-12 lh-md ls-1">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
        bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
        Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
        sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
        facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur,
        eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras
        lobortis molestie faucibus.
      </p>
      <button type="button" class="btn-custom btn-custom-light py-8 px-6">
        <span>VIEW MORE</span>
      </button>
    </div>
  </section>

  <section class="awards" id="awards">
    <div class="contain pt-10 pb-8 pt-md-16 pb-md-16 pb-xl-23 px-8 px-md-15 ms-10 ms-md-15 ms-xl-25 overflow-hidden">
      <div class="container-fluid" data-aos="fade-left">
        <div class="row gx-xl-9 align-items-end">
          <div class="col-12 col-xl-4 mb-4 mb-md-0">
            <h3 class="title-hasDot title-hasDot-danger title-wavy title-wavy-light mb-10 mb-xl-12 fs-4 fs-md-3 fw-bold ls-sm">AWARDS</h3>
            <p class="lh-md ls-1 mb-lg-4">
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
              bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
              ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
              vitae sagittis orci. Donec id dignissim nunc.
            </p>
          </div>
          <div class="col-12 col-xl-6 pb-3">
            <div class="row gy-2 gy-xl-5 gx-2 gx-xl-9">
              <div class="col-12 col-md-6">
                <img class="img-fluid" src="../assets/images/award.webp" alt="亞洲智能應用程式大獎">
              </div>
              <div class="col-12 col-md-6">
                <img class="img-fluid" src="../assets/images/award.webp" alt="亞洲智能應用程式大獎">
              </div>
              <div class="col-12 col-md-6">
                <img class="img-fluid" src="../assets/images/award.webp" alt="亞洲智能應用程式大獎">
              </div>
              <div class="col-12 col-md-6">
                <img class="img-fluid" src="../assets/images/award.webp" alt="亞洲智能應用程式大獎">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="services" id="services">
    <div class="container text-center text-white">
      <div class="px-4 px-md-16 mb-22" data-aos="fade-up">
        <h3 class="title-hasDot title-hasDot-danger title-wavy title-wavy-dark mb-12 mb-md-16 fs-4 fs-md-3 fw-bold ls-sm">OUR INGRADIENTS</h3>
        <p class="mb-10 mb-md-14 lh-md ls-1">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
          bibendum.Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
          Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
          sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
          facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
          consectetur,eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros
          nec lacus. Cras lobortis molestie faucibus.
        </p>
        <button type="button" class="btn-custom btn-custom-dark py-6 py-md-8 px-6">
          <span>OUR SERVICES</span>
        </button>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-xl-12 gy-15 mb-15 mb-md-25">
        <div
          class="col d-flex flex-column align-items-center"
          data-aos="fade-up"
          v-for="(item, index) in servicesData"
          :key="`header services ${index}`"
        >
          <div class="services-icon mb-5">
            <img
              class="img-fluid"
              :src="imgUrl(item.img)"
              :alt="item.title"
            >
          </div>
          <h4 class="services-title mb-4 fs-5 fw-bold ls-2">
            {{ item.title }}
          </h4>
          <p class="mb-4 mb-md-8 fw-normal ls-1 lh-md">
            {{ item.content }}
          </p>
          <button type="button" class="btn btn-outline-light py-3 py-md-5 px-9 rounded-pill border-2 fs-normal2 fw-bold ls-md">
            VIEW MORE
          </button>
        </div>
      </div>
      <a href="#" class="d-md-none link-light fs-6 fw-bold ls-2">
        <span class="d-inline-block title-straight title-straight-warning mb-2">VIEW MORE</span>
        <br>
        <span class="d-inline-block title-straight title-straight-warning">DIGISALAD’S INGRADIENTS</span>
      </a>
      <a href="#" class="d-none d-md-inline-block title-link-straight title-straight-warning link-light fs-6 fw-bold ls-2">
        VIEW MORE DIGISALAD’S INGRADIENTS
      </a>
    </div>
  </section>

  <section class="founder" id="founder">
    <div class="contain me-8 me-md-15 me-lg-35">
      <div class="container" data-aos="fade-right">
        <div class="row gx-xl-22">
          <div class="col-12 col-xl-4 mb-4 mb-xl-0 text-center d-flex flex-column align-items-center justify-content-center">
            <img class="mb-4 mb-md-10 img-fluid" src="../assets/images/founder-tony.webp" alt="Tony Ng">
            <h3 class="mb-2 fs-5 fw-bold ls-2">TONY NG</h3>
            <h4 class="fs-normal1 fw-light ls-2 fst-italic">Founder & Creative Director</h4>
          </div>
          <div class="col-12 col-xl-8">
            <div class="text-center">
              <img class="icon-quote mb-3 img-fluid" src="../assets/images/icon-quote.svg" alt="quote">
            </div>
            <p class="px-3 px-xl-0 fs-6 fs-md-4 fw-light lh-xxl ls-2">
              A great digital work isn’t about designing beautiful pages purely.
              It is about context - how do we deliver the
              <span class="text-warning fw-bold">right experience to the right person at the right time.</span>
              The most important thing is that your work can engage customers at anytime,
              anywhere and let users experience an entire amazing digital journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="experience text-center pt-15 pt-md-22 pb-15 pb-md-25" id="experience">
    <div class="container">
      <h3 class="mb-12 mb-md-17 title-hasDot title-hasDot-danger title-wavy title-wavy-light fw-bold fs-4 fs-md-3" data-aos="fade-up">
        OUR BRAND EXPERIENCE
      </h3>
      <p class="mb-8 mb-md-14 lh-base ls-1" data-aos="fade-up">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
        ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
        Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
        Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
        Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
        facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis.
        Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus,
        ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <img class="d-none d-md-block img-fluid" src="../assets/images/client-list-2021.webp" alt="顧客列表" data-aos="fade-up">
      <img class="d-md-none img-fluid" src="../assets/images/client-list-2021-mobile.webp" alt="顧客列表顧客列表">
    </div>
  </section>

  <section class="showcase text-white" id="showcase">
    <div class="container" data-aos="fade-up">
      <ShowcaseSwiper />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

  .header {
    color: #fff;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: -1;
      background-color: #F2F2F2;
    }

    &-containMask {
      height: 100vh;
      overflow: hidden;
      border-radius: 0 0 45px 45px;
      transform: translateZ(0px);
    }

    &-video {
      position: absolute;
      left: 0;
      top: 0;
      aspect-ratio: 16 / 9;
    }

    &-main {
      position: relative;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
      background: rgba(0, 0, 0, .3);
    }

    .tempBG {
      position: absolute;
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: center / cover no-repeat url('../assets/images/header-bg-temp.webp');
      transition: all ease 1s;

      &.hide {
        transition: all ease 1s;
        opacity: 0;
      }
    }

    &-mainTitle {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);

      @include media-breakpoint-up(md) {
        left: 15%;
        transform: translateX(0);
      }

      &-logo {
        width: 45%;

        @include media-breakpoint-up(md) {
          max-width: 100%;
        }
      }
    }

    &-subtitle {
      position: absolute;
      top: 25%;
      left: 0;

      @include media-breakpoint-up(md) {
        left: 3.5%;
      }

      p {
        transform: rotate(180deg);
        padding-top: 125px;
        margin: 0 0 0 8px;
        writing-mode: vertical-lr;
        font-size: 13px;

        &::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          height: 112px;
          width: 1px;
          transform: translateX(-50%);
          background-color: #fff;

          @include media-breakpoint-up(md) {
            width: 2px;
          }
        }

        @include media-breakpoint-up(md) {
          font-size: 16px;
          padding-top: 138px;
        }
      }
    }

    &-callToAction {
      position: absolute;
      left: 50%;
      bottom: 100px;
      transform: translate(-50%, 100px);
      transition: all ease .3s;

      a {
        display: inline-block;
        padding-bottom: 74px;
        text-align: center;
        color: #fff;
        transition: all ease .3s;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 1px;
          height: 44px;
          background-color: #fff;
          transition: all ease .3s;
        }
      }

      &:hover {
        bottom: 88px;

        a::after {
          bottom: 12px;
        }
      }
    }

    .title-hasDot::before {
      bottom: 0;
      right: -16px;
    }
  }
  .about {
    scroll-padding: 100px;
    position: relative;
    padding-top: 85px;
    padding-bottom: 70px;
    background-color: #F2F2F2;

    @include media-breakpoint-up(md) {
      padding-top: 125px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 65px;
      background-color: #808080;

      @include media-breakpoint-up(md) {
        height: 85px;
      }
    }

    .container {
      max-width: 1000px;
    }

    &-video {
      aspect-ratio: 16 / 9;
    }
  }

  .awards {
    position: relative;
    background-color: #F2F2F2;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 50%;
      background-color: #26C6D0;
      border-radius: 50px 0 0 0;
    }

    .contain {
      position: relative;
      z-index: 5;
      border-radius: 50px 0 50px 50px;
      background-color: #fff;
    }

    .title-wavy {
      margin-left: 12px;

      &::after {
        left: -10px;
      }

      @include media-breakpoint-up(md) {
        margin-left: 24px;

        &::after {
          left: -16px;
        }
      }
    }
  }

  .services {
    padding-top: 64px;
    padding-bottom: 80px;
    margin-top: -1px;
    margin-bottom: -1px;
    background-color: #26C6D0;

    @include media-breakpoint-up(md) {
      padding-top: 104px;
      padding-bottom: 134px;
    }

    .container {
      max-width: 1135px;
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 108px;
      height: 108px;
      background-color: #fff;
      border-radius: 50%;
    }

    &-title {
      @include media-breakpoint-up(md) {
        height: 44px;
      }
    }
  }

  .founder {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      top: 0;
      height: 50%;
      border-radius: 0 0 50px 0;
      background-color: #26C6D0;
    }

    .contain {
      padding-top: 56px;
      padding-bottom: 56px;
      border-radius: 0 50px 50px 50px;
      background:
      linear-gradient(
        rgba(88, 88, 128, 0.8),
        rgba(88, 88, 128, 0.8)
      ),
      center / cover no-repeat url('../assets/images/founder-bg.webp');
      color: #fff;

      @include media-breakpoint-up(lg) {
        padding-top: 88px;
        padding-bottom: 132px;
      }

      .icon-quote {
        width: 65px;

        @include media-breakpoint-up(lg) {
          max-width: 100%;
        }
      }
    }

    .container {
      max-width: 1096px;
    }

    p {
      text-align: center;

      @include media-breakpoint-up(xl) {
        text-align: left;
      }
    }
  }

  .experience {
    .container {
      max-width: 1030px;
    }
  }

  .showcase {
    min-height: 940px;
    margin-bottom: 90px;
    border-radius: 0 0 45px 45px;
    background:
    linear-gradient(
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
    ),
    center / cover no-repeat url('../assets/images/showcase-bg.webp');

    @include media-breakpoint-up(xl) {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .container {
      position: relative;

      @include media-breakpoint-up(md) {
        max-width: 540px;
      }

      @include media-breakpoint-up(xl) {
        max-width: 1272px;
        flex: 1 1 0;
      }
    }
  }
</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default {
  data() {
    return {
      swiperData: [
        {
          title: 'LP CLUB MOBILE APP',
          subtitle: 'HIGHLIGHTED SHOWCASE',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
          img: 'showcase.webp',
        },
        {
          title: 'SHOWCASE SLIDE 2',
          subtitle: 'HIGHLIGHTED SHOWCASE',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
          img: 'showcase.webp',
        },
        {
          title: 'SHOWCASE SLIDE 3',
          subtitle: 'HIGHLIGHTED SHOWCASE',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
          img: 'showcase.webp',
        },
        {
          title: 'SHOWCASE SLIDE 4',
          subtitle: 'HIGHLIGHTED SHOWCASE',
          content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
          img: 'showcase.webp',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    imgUrl(imgName) {
      const imgUrl = new URL(`../assets/images/${imgName}`, import.meta.url).href;
      return imgUrl;
    },
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<template>
  <Swiper :navigation="true" :modules="modules" class="pt-20 pt-xl-0 pb-10 pb-xl-0">
    <SwiperSlide
      v-for="(item, index) in swiperData"
      :key="`swiper showcase ${index}`"
    >
      <div class="row flex-column flex-xl-row">
        <div class="col showcase-start me-xl-15">
          <img
            class="img-fluid"
            :src="imgUrl(item.img)"
            :alt="item.title">
          <button type="button" class="btn-custom btn-custom-light py-6 py-xl-15 px-6 px-xl-8">
            <span>VIEW PROJECT</span>
          </button>
        </div>
        <div class="col pt-16 positive-relative">
          <h4 class="mb-2 mb-xl-5 fs-normal1 fw-bold ls-sm">
            {{ item.subtitle }}
          </h4>
          <h3 class="mb-5 mb-xl-10 fs-4 fs-md-3 fs-xl-2 fw-bold ls-sm">
            <span class="title-straight title-straight-primary hasDot ">
              {{ item.title }}
            </span>
          </h3>
          <p class="lh-base ls-1">
            {{ item.content }}
          </p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <div class="showcase-index fw-semibold ls-sm">
    <p class="showcase-index-start">01</p>
    <p class="showcase-index-end">04</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.showcase {
  &-index {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 54px;
    height: 47px;

    @include media-breakpoint-up(xl) {
      top: 20%;
      left: unset;
      right: 70px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 90%;
      height: 1px;
      transform: translate(-50%, -50%) rotate(135deg);
      background-color: #26C6D0;
    }

    &-start,
    &-end {
      position: absolute;
    }

    &-start {
      top: 0;
      left: 0;
    }

    &-end {
      right: 0;
      bottom: 0;
    }
  }

  &-start {
    position: relative;
    @include media-breakpoint-up(xl) {
      min-width: 540px;
    }

    button {
      position: absolute;
      bottom: 0;
      right: 12px;
      transform: translateY(50%);

      @include media-breakpoint-up(xl) {
        right: -70px;
      }
    }
  }
}
</style>

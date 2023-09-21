<template>
  <div>
    <div id="top">
      <swiper class="swiper" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide style="background-image:url(/portfolio/top1.jpg)" class="slide">

          <div class="header">명지전문대 정보통신공학과 김세민
          </div>
        </swiper-slide>
        <swiper-slide class="slide" style="background-image:url(/portfolio/top2.jpg)">
          <div class="header">명지전문대 정보통신공학과 김세민
          </div>
        </swiper-slide>
        <swiper-slide class="slide" style="background-image:url(/portfolio/top3.jpg)">
          <div class="header">명지전문대 정보통신공학과 김세민
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div id="portfolio">
      <div class="header">포트폴리오</div>
      <div class="list">
        <div class="item" style="background-image:url(/portfolio/top2.jpg)" data-aos="fade-left"
          @click="movePage('./portfolio1 ')">
        </div>
        <div class="item" style="background-image:url(/portfolio/top1.jpg)" data-aos="fade-right"></div>
        <div class="item" style="background-image:url(/portfolio/top3.jpg)" data-aos="fade-left"></div>
        <div class="item" style="background-image:url(/portfolio/top1.jpg)" data-aos="fade-left"></div>
        <div class="item" style="background-image:url(/portfolio/top3.jpg)" data-aos="fade-left"></div>
        <div class="item" style="background-image:url(/portfolio/top2.jpg)" data-aos="fade-left"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// Components
import HelloWorld from '../components/HelloWorld.vue';

import aos from 'aos'

export default defineComponent({
  name: 'HomeView',

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  mounted() {
    aos.init();
  },
  methods: {
    movePage(path) {
      this.$router.push(path)
    }
  }
});
</script>

<style lang="less">
#top {
  height: 100vh;

  .swiper {
    height: 100vh;

    .slide {
      background-position: center center;
      background-size: cover;

      .header {
        font-size: 60px;
        font-weight: bold;
        height: 100%;
        vertical-align: middle;
        text-align: center;
      }
    }
  }
}

#portfolio {
  .header {
    text-align: center;
    font-size: 40px;
    margin: 0 auto;

  }

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    .item {
      width: 100%;
      background-position: center center;
      background-size: cover;
      border-radius: 20px;
      //비율 1:1
      aspect-ratio: 1/1;
    }
  }
}
</style>
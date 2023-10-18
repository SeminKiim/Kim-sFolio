<template>
  <div>
    <div id="greetings">
      <div class="hey">Hey there!</div>
      <div class="title">안녕하세요.<br>성장하는 개발자 김세민입니다.</div>

    </div>

    <div id="skills">
      <h1>Technical Skills</h1>
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
@font-face {
  font-family: 'Atomy-Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/Atomy-Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

#greetings {
  height: 100vh;
  font-family: 'Atomy-Bold';
  color: #6b4d38;
  font-size: 2rem;
  background-color: #f7f2f0;

  padding: 10%;

  .hey {
    font-size: 2em;
    text-align: center;
    margin-bottom: 50px;
  }

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

#skills {
  height: 100vh;
  font-family: 'Atomy-Bold';
  color: #f7f2f0;
  font-size: 1.3rem;
  background-color: #6b4d38;
  padding: 10%;
}

#portfolio {
  font-family: 'Atomy-Bold';
  color: #6b4d38;
  font-size: 1.3rem;
  background-color: #f7f2f0;

  padding: 10%;

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
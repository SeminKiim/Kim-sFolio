<template>
  <div>
    <div id="greetings">
      <div class="hey">Hey there!</div>
      <div class="title">안녕하세요.<br>빠르게 배우는 김세민입니다.</div>
    </div>
  </div>
  <div>
    <div id="skills">
      <div class="header">Technical Skills</div>
      <v-container>
        <v-row align-content="center">
          <v-col cols="3"><v-img src="../assets/skills/html5" class="skillItem"></v-img></v-col>
          <v-col cols="3"><v-img src="../assets/skills/css.png" class="skillItem"></v-img></v-col>
          <v-col cols="3"><v-img src="../assets/skills/javascript.png" class="skillItem"></v-img></v-col>
          <v-col cols="3"><v-img src="../assets/skills/wordpress.png" class="skillItem"></v-img></v-col>
        </v-row>
        <v-row align-content="center">
          <v-col cols="3"><v-img src="../assets/skills/java.png" class="skillItem"></v-img></v-col>
          <v-col cols="3"><v-img src="../assets/skills/mysql.png" class="skillItem"></v-img></v-col>
          <v-col cols="3"><v-img src="../assets/skills/AdobeXD.png" class="skillItem"></v-img></v-col>
          <v-col cols="3"><v-img src="../assets/skills/figma.png" class="skillItem"></v-img></v-col>
        </v-row>
      </v-container>
    </div>
  </div>

  <div>
    <div id="timeline">
      <div class="header">Timeline</div>
      <v-container>
        <v-row>
          <v-col cols="3" class="timeline-col">
            <v-img class="timeline-item" src="../assets/2020.png" data-aos="fade-up"></v-img>
          </v-col>
          <v-col cols="9" data-aos="fade-up" class="info">
            <v-row class="info-header">명지전문대 정보통신공학과</v-row>
            <v-row>전문학사 졸 (2023.02)</v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="timeline-col"><v-img class="timeline-item" src="../assets/2022.png"
              data-aos="fade-up"></v-img></v-col>
          <v-col cols="9" data-aos="fade-up" class="info">
            <v-row class="info-header">하계 글로벌 진로취업연수</v-row>
            <v-row>2022.07</v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="timeline-col"><v-img class="timeline-item" src="../assets/2023.png"
              data-aos="fade-up"></v-img>
          </v-col>
          <v-col cols="9" data-aos="fade-up" class="info">
            <v-row class="info-header">명지전문대 정보통신공학과 전공심화 과정</v-row>
            <v-row>신입학 (2023.02)</v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

  <div id="portfolio">
    <div class="header">포트폴리오</div>

  </div>

  <div id="contact">
    <div class="header">Contact</div>

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
  data() {
    return {

    };
  },

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
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 50px;
  }
}

#skills {
  font-family: 'Atomy-Bold';
  color: #f7f2f0;
  font-size: 1.3rem;
  background-color: #6b4d38;
  padding: 10%;
  flex-grow: 0;

  .skillItem {
    width: 10vw;
    margin: 30px;
  }
}

#timeline {
  font-family: 'Atomy-Bold';
  color: #6b4d38;
  font-size: 1.3rem;
  background-color: #f7f2f0;
  padding: 10%;

  .timeline-col {
    padding: 0;
  }

  .info {
    padding: 11%;

    .info-header {
      font-size: 1.5em;
    }
  }
}


#portfolio {
  font-family: 'Atomy-Bold';
  color: #f7f2f0;
  font-size: 1.3rem;
  background-color: #6b4d38;

  padding: 10%;

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


#contact {
  font-family: 'Atomy-Bold';
  color: #6b4d38;
  font-size: 1.3rem;
  background-color: #f7f2f0;
  padding: 10%;
}

.header {
  text-align: center;
  font-size: 3.2rem;
  margin-bottom: 50px;

}
</style>
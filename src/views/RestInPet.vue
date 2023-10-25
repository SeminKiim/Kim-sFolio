<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div id="description">
        <div class="title">'Rest In Pet' 프로젝트는
        </div>
        <v-row>
            <v-col>
                <v-img src="../assets/RestInPet.png" class="img"></v-img>
            </v-col>
            <v-col>
                <div>사랑하는 반려동물과의 이별 후 '펫로스 증후군'을 겪는 반려인들을 위한 IoT 스마트 화분장 키트와 케어 서비스를 기획해본 프로젝트 입니다.</div>
            </v-col>
        </v-row>
        <div class="date">프로젝트 기간 : 2022.03 ~ 2022.06</div>
        <div id="btn">
            <v-btn class="btn" href="https://drive.google.com/file/d/1Cv5RquWDP1wI7T8LVljeNtkwBZ1tZRe2/view?usp=sharing"
                rounded="xl" color="#DDDDEE" elevation="0" size="large">
                비즈니스 모델 보러 가기
            </v-btn>
            <v-btn class="btn"
                href="https://www.figma.com/proto/UWnalOF0TNDdc0A2Pp0na1/%EA%B3%B5%ED%95%99%EC%BA%A1%EC%8A%A4%ED%86%A4_3%ED%8C%80_%EC%9B%B9?node-id=3-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2"
                rounded="xl" color="#DDDDEE" elevation="0" size="large">셀프 화분장 키트 구매 웹 페이지 보러 가기</v-btn>
            <v-btn class="btn"
                href="https://www.figma.com/proto/ENXuNK6dMBKcf11MVmvBFM/%EA%B3%B5%ED%95%99%EC%BA%A1%EC%8A%A4%ED%86%A4_3%ED%8C%80_%EC%8B%9D%EB%AC%BC-%EA%B4%80%EB%A6%AC-%EC%95%B1?node-id=2-227&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A227"
                rounded="xl" color="#DDDDEE" elevation="0" size="large">화분장 이후 관리 앱 보러 가기</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    methods: {
        movePage(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style lang="less">
header {
    color: #6b4d38;
    background-color: #f7f2f0;
    padding-left: 10%;
    font-weight: bold;
}

#description {
    padding: 10%;
    color: #6b4d38;
    background-color: #f7f2f0;
    font-size: 36px;

    .title {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }
}

#btn {
    text-align: center;

    .btn {
        margin: 20px;

        align-items: center;
    }
}
</style>
<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div id="description">
        <div class="title">'김장톡 프로젝트'의 사업계획서</div>
        <v-row>
            <v-col><v-img class="img" src="../assets/report.png" cover></v-img></v-col>
            <v-col>
                <div>'김장톡 프로젝트'의 사업계획서로,<br>비즈니스 나인 블럭으로 설계한 아이템을 실제 사업화 한다 가정하고 작성한 문서입니다.</div>
                <div>핵심 고객, 핵심 가치, 운영 계획, 차별화 전략 등 고객층을 전략적으로 파악하여 작성해본 사업 계획서입니다.</div>
            </v-col>
        </v-row>
        <div class="date">프로젝트 기간 : 2021.03 ~ 2021.06</div>
        <div id="btn"><v-btn class="button"
                href="https://drive.google.com/file/d/1DRkEEiAI-3ckbRE430tWUTGhrOs564n5/view?usp=sharing" rounded="xl"
                color="#DDDDEE" elevation="0" size="large">사업계획서
                보러
                가기</v-btn></div>

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
    font-size: 2.5em;
    font-weight: bold;
}

#description {
    padding: 10%;
    color: #6b4d38;
    background-color: #f7f2f0;
    font-size: 25px;
    font-weight: bold;

    .title {
        font-size: 45px;
        font-weight: bold;
        text-align: center;
        padding-bottom: 50px;
    }

    .img {
        aspect-ratio: 16/9;
    }
}

.date {
    font-size: 20px;
    margin: 10%;
    text-align: center;
}


#btn {
    text-align: center;
}
</style>
<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div class="description">
        <div class="title">'김장톡 프로젝트'의 사업계획서</div>
        <div>'김장톡 프로젝트'의 사업계획서로,<br>비즈니스 나인 블럭으로 설계한 비즈니스 모델의 사업화를 가정하고 작성해본 문서입니다.</div>
    </div>
    <div id="show">
        <v-btn href="https://drive.google.com/file/d/1DRkEEiAI-3ckbRE430tWUTGhrOs564n5/view?usp=sharing">사업계획서 보러 가기</v-btn>
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
@import "https://unpkg.com/vue-pdf-app@2.0.0/dist/icons/main.css";

header {
    color: #6b4d38;
    background-color: #f7f2f0;
    padding-left: 10%;
    font-size: 2.5em;
    font-weight: bold;
}

.description {
    font-size: 2rem;
    padding: 10%;
    color: #6b4d38;
    background-color: #f7f2f0;
    height: 100vh;
    font-size: 36px;

    .title {
        font-size: 2em;
        font-weight: bold;
        height: 30vh;
        text-align: center;
    }
}

#show {
    padding: 10%;
    background-color: #6b4d38;
    align-items: center;
}
</style>
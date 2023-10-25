<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div class="description">
        <div class="title">'김장톡 프로젝트'는</div>
        <div>도농상생프로젝트의 일환으로,<br>아동이 있는 가족을 대상으로 한 김장 체험 프로그램 입니다.</div>
    </div>
    <div id="show">
        <v-btn href="https://drive.google.com/file/d/1yeqqXrV8drO22bOhmXfUtCeS0JM8XhJ5/view">비즈니스 모델 보러 가기</v-btn>
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
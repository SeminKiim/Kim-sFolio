<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div class="description">
        <div class="title">'Rest In Pet' 프로젝트는</div>
        <div>사랑하는 반려동물과 이별을 겪고 나서도 함께하고싶은 마음을 입니다.</div>
    </div>
    <div id="show">
        <v-btn href="https://drive.google.com/file/d/1Cv5RquWDP1wI7T8LVljeNtkwBZ1tZRe2/view?usp=sharing" rounded="xl"
            color="#DDDDEE">비즈니스 모델 보러
            가기</v-btn>
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
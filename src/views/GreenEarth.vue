<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div class="description">
        <div class="title">'Green Earth'웹사이트는</div>
        <div>지구를 생각하는 가상의 환경 보호단체인 Green Earth의 웹진(Web-zine)</div>
        <div></div>
    </div>
    <div id="show">
        <v-btn href="https://jtk4.amumu.kr">Green Earth 웹사이트 보러 가기</v-btn>
    </div>
</template>

<script>
export default {
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
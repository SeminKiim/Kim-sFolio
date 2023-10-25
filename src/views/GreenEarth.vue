<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div id="description">
        <div class="title">'Green Earth'웹사이트는</div>
        <v-row>
            <v-col><v-img class="img" src="../assets/GreenEarth.png" cover></v-img> </v-col>
            <v-col>
                <div>지구를 생각하는 가상의 환경 보호단체인 Green Earth의 웹진(Web-zine) 입니다.</div>
                <div>WordPress를 사용해 만든 웹사이트로, 컨셉과 메인 페이지, NEWS의 생활 메뉴를 기획하고 구현했습니다.</div>
            </v-col>
        </v-row>
        <div class="date">프로젝트 기간 : 2021.09 ~ 2021.12</div>
        <div id="btn"><v-btn class="button" href="https://jtk4.amumu.kr" rounded="xl" color="#DDDDEE" elevation="0"
                size="large">Green
                Earth 웹사이트 보러 가기</v-btn></div>

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
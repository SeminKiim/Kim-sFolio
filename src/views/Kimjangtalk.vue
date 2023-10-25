<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div id="description">
        <div class="title">'김장톡 프로젝트'는</div>
        <v-row>
            <v-col><v-img class="img" src="../assets/kimjangtalk.png" cover></v-img></v-col>
            <v-col>
                <div>도농상생프로젝트의 일환으로,<br>아동이 있는 가족을 대상으로 한 김장 체험 프로그램 입니다.</div>
            </v-col>
        </v-row>
        <div class="date">프로젝트 기간 : 2021.03 ~ 2021.06</div>
        <div id="btn"><v-btn class="button"
                href="https://drive.google.com/file/d/1yeqqXrV8drO22bOhmXfUtCeS0JM8XhJ5/view?usp=sharing" rounded="xl"
                color="#DDDDEE" elevation="0" size="large">비즈니스 모델 보러가기</v-btn></div>
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
<template>
    <header>
        <div @click="movePage('/')">Hey there!</div>
    </header>
    <div class="intro">
        <div class="header">'김장톡 프로젝트는'</div>
        <div>도농상생프로젝트의 일환으로, 아동이 있는 가족을 대상으로 한 김장 체험 프로그램 입니다.</div>
        <v-img src="../assets/kimjangtalk.png" class="thumbnail"></v-img>
        <div>이미지를 클릭해보세요!</div>
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
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;
}

.intro {
    padding: 10%;
    color: #6b4d38;
    font-size: medium;
    background-color: #f7f2f0;

    .header {
        font-size: larger;
    }
}
</style>
<!-- 个人主页-->
<!-- template source-->
<template>
    <div class="person">
        <!-- 头部 -->
        <div class="person-header">
            <div class="header-top">
                <div class="person-avatar">
                    <open-data class="avatar" type="userAvatarUrl"></open-data>
                </div>
                <open-data class="userName hidden-one" type="userNickName"></open-data>
                <div class="charge">充值</div>
            </div>
            <div class="header-mid">余额</div>
            <div class="header-bottom">
                <text class="amount">0</text>书币
            </div>
        </div>

        <!-- 列表 -->
        <div class="list">
            <div class="setting">
                <text class="title">我的书店</text>
                <text class="r">></text>
            </div>
            <div class="setting">
                <text class="title">帮助中心</text>
                <text class="r">></text>
            </div>
            <div class="setting">
                <text class="title">用户反馈</text>
                <text class="r">></text>
            </div>
        </div>
    </div>
</template>

<!-- script source -->
<script type="text/babel">
export default {
    onLoad() { },
    onShow() { },
    onReady() { },
    beforeMount() { },
    mounted() { },
    data() {
        return {

        }
    },
    components: { },

    methods: {  },

    computed: {  }

}
</script>

<!-- style source -->
<style lang="scss" scoped>
@import "./style";
</style>
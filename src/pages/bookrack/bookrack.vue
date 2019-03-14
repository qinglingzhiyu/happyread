<!-- 书架页面-->
<!-- template source-->
<template>
    <div class="book-rack">
        <!-- 头部 -->
        <div class="rack-header" @click="goPageWithPerson">
            <div class="rack-avatar">
                <open-data class="avatar" type="userAvatarUrl"></open-data>
            </div>
            <div class="header-container">
                <open-data type="userNickName"></open-data>
                <div class="header-text">新用户限免: 1小时27分钟</div>
            </div>
            <div class="rack-skip">></div>
        </div>
        
        <!-- 列表 -->
        <div class="book-list">
            <div class="book">
                <image class="book-bg" src="/static/images/book-img.jpg"></image>
                <div class="book-content">
                    <div class="book-title">美女总裁老婆</div>
                    <div class="book-introduce">更新至第2167章 终于见到你</div>
                </div>
                <div class="book-skip">
                    <div class="update">更新</div>
                    <div class="time">10小时之前</div>
                </div>
            </div> 
            <div class="book">
                <image class="book-bg" src="/static/images/book-img.jpg"></image>
                <div class="book-content">
                    <div class="book-title">美女总裁老婆</div>
                    <div class="book-introduce">更新至第2167章 终于见到你</div>
                </div>
                <div class="book-skip">
                    <div class="update">更新</div>
                    <div class="time">10小时之前</div>
                </div>
            </div>
            <div class="book">
                <image class="book-bg" src="/static/images/book-img.jpg"></image>
                <div class="book-content">
                    <div class="book-title">美女总裁老婆</div>
                    <div class="book-introduce">更新至第2167章 终于见到你</div>
                </div>
                <div class="book-skip">
                    <div class="update">更新</div>
                    <div class="time">10小时之前</div>
                </div>
            </div>
            <div class="book">
                <image class="book-bg" src="/static/images/book-img.jpg"></image>
                <div class="book-content">
                    <div class="book-title">美女总裁老婆</div>
                    <div class="book-introduce">更新至第2167章 终于见到你</div>
                </div>
                <div class="book-skip">
                    <div class="update">更新</div>
                    <div class="time">10小时之前</div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- script source -->
<script type="text/babel">
export default {
    onShow() { },
    mounted() { },
    data() {
        return {
        }
    },
    components: { },
    methods: {
        goPageWithPerson: function () {
            this.$promisify.jumpToPromisify('person')
        }
    },
    computed: {  }
}
</script>

<!-- style source -->
<style lang="scss" scoped>
@import "./style";
</style>
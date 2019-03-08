<!-- 书城-->
<!-- template source-->
<template>
    <div class="store">
        <!-- 顶部搜索 -->
        <div class="search">
             <div class="search-main">
                <i-icon type="search" size="28" color="#80848f"/>
                <span class="search-txt">搜索</span>
            </div>
        </div>

        <!-- 排行榜 -->
        <div class="rank">
            <div class="rank-title">排行榜</div>
            <div class="rank-container">
                <div class="rank-item">
                    <image src="/static/images/book-img.jpg"></image>
                    <span>热搜榜</span>
                </div>
                <div class="rank-item">
                    <image src="/static/images/book-img.jpg"></image>
                    <span>完结榜</span>
                </div>
                <div class="rank-item">
                    <image src="/static/images/book-img.jpg"></image>
                    <span>畅销榜</span>
                </div>
                <div class="rank-item">
                    <image src="/static/images/book-img.jpg"></image>
                    <span>风云榜</span>
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

    methods: {  },

    computed: {  }

}
</script>

<!-- style source -->
<style lang="scss" scoped>
@import "./style";
</style>
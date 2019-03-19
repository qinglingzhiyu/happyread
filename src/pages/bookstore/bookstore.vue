<!-- 书城-->
<!-- template source-->
<template>
    <div class="store">
        <!-- 顶部搜索 -->
        <div class="search" @click="goPagewithSearch">
             <div class="search-main">
                <i-icon type="search" size="28" color="#80848f"/>
                <span class="search-txt">搜索</span>
            </div>
        </div>

        <!-- 排行榜 -->
        <div class="rank">
            <div class="rank-title">排行榜</div>
            <div class="rank-container">
                <div class="rank-item" @click="goPageWithBookstore('热搜榜')">
                    <image mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <span>热搜榜</span>
                </div>
                <div class="rank-item" @click="goPageWithBookstore('完结榜')">
                    <image mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <span>完结榜</span>
                </div>
                <div class="rank-item" @click="goPageWithBookstore('畅销榜')">
                    <image mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <span>畅销榜</span>
                </div>
                <div class="rank-item" @click="goPageWithBookstore('风云榜')">
                    <image mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <span>风云榜</span>
                </div>
            </div>
        </div>

        <!-- 书单 -->
        <div class="book-list">
            <div class="book-list-title">书单</div>
            <div class="list-container" @click="goPageWithReadList">
                <div class="container-left">
                    <div class="container-title hidden-one">有意思的书柜:一个老书虫的推荐</div>
                    <div class="book-container hidden-second">推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,</div>
                </div>
                <image class="book-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
            </div>
            <div class="list-container" @click="goPageWithReadList">
                <div class="container-left">
                    <div class="container-title hidden-one">有意思的书柜:一个老书虫的推荐</div>
                    <div class="book-container hidden-second">推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,</div>
                </div>
                <image class="book-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
            </div>
            <div class="list-container" @click="goPageWithReadList">
                <div class="container-left">
                    <div class="container-title hidden-one">有意思的书柜:一个老书虫的推荐</div>
                    <div class="book-container hidden-second">推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,</div>
                </div>
                <image class="book-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
            </div>
            <div class="list-container" @click="goPageWithReadList">
                <div class="container-left">
                    <div class="container-title hidden-one">有意思的书柜:一个老书虫的推荐</div>
                    <div class="book-container hidden-second">推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,</div>
                </div>
                <image class="book-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
            </div>
        </div>

        <!-- 书库 -->
        <div class="stack-room">
            <div class="room-title">书库</div>
            <div class="stack-container">
                <div class="stack" @click="goPageWithBookstore('玄幻')">
                    <image class="stack-img" src="/static/images/book-img.jpg"></image>
                    <div class="stack-right">
                        <div class="stack-title">玄幻</div>
                        <div class="stack-container"><span class="amount">148133</span>册</div>
                    </div>
                </div>
                 <div class="stack" @click="goPageWithBookstore('都市')">
                    <image class="stack-img" src="/static/images/book-img.jpg"></image>
                    <div class="stack-right">
                        <div class="stack-title">都市</div>
                        <div class="stack-container"><span class="amount">148133</span>册</div>
                    </div>
                </div>
                 <div class="stack" @click="goPageWithBookstore('武侠')">
                    <image class="stack-img" src="/static/images/book-img.jpg"></image>
                    <div class="stack-right">
                        <div class="stack-title">武侠</div>
                        <div class="stack-container"><span class="amount">148133</span>册</div>
                    </div>
                </div>
                 <div class="stack" @click="goPageWithBookstore('灵异')">
                    <image class="stack-img" src="/static/images/book-img.jpg"></image>
                    <div class="stack-right">
                        <div class="stack-title">灵异</div>
                        <div class="stack-container"><span class="amount">148133</span>册</div>
                    </div>
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

        //跳转到搜索页面
        goPagewithSearch:async function () {
            this.$promisify.jumpToPromisify('search')
        },

        //跳转到booklist
        goPageWithBookstore: async function (from) {
            this.$promisify.jumpToPromisify('booklist','navigate',{from})
        },

        //跳转到书单页面
        goPageWithReadList: async function() {
            this.$promisify.jumpToPromisify('readlist')
        }
    },

    computed: {  }

}
</script>

<!-- style source -->
<style lang="scss" scoped>
@import "./style";
</style>
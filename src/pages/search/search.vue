<!-- 搜索-->
<!-- template source-->
<template>
    <div class="search-main">
        <!-- 顶部搜索 -->
        <div class="search" @click="goPagewithSearch">
            <div class="search-main">
                <i-icon type="search" size="28" color="#80848f"/>
                <input class="search-input" focus type="text" placeholder="请输入书名或者是作者名" />
            </div>
        </div>

        <!-- 热门搜索 -->
        <div v-if="isShow" class="hot">
            <div class="hot-title">热门搜索</div>
            <block v-for="item in hotBookList" :key="index">
                <span class="book-title">{{item}}</span>
            </block>
        </div>

        <!-- 搜索列表 -->
        <block v-else>
            <div class="list">
                <image class="book-bg" src="/static/images/book-img.jpg"></image>
                <div class="book-container">
                    <div class="book-title hidden-one">超品相师</div>
                    <div class="book-content hidden-second">连载于起点中文网一部玄幻小说，作者是九灯和善。全书已完结。该小说讲述了二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，机缘巧合一步步走上相师之巅的故事。</div>
                    <div class="bottom-part">
                        <div class="book-author">
                            <image class="avatar" src="/static/images/user.png"></image>
                            <span class="author">九灯和善</span>
                        </div>
                        <div class="book-tag">
                            <span>都市</span>
                            <span>玄学</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list">
                <image class="book-bg" src="/static/images/book-img.jpg"></image>
                <div class="book-container">
                    <div class="book-title hidden-one">超品相师</div>
                    <div class="book-content hidden-second">连载于起点中文网一部玄幻小说，作者是九灯和善。全书已完结。该小说讲述了二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，机缘巧合一步步走上相师之巅的故事。</div>
                    <div class="bottom-part">
                        <div class="book-author">
                            <image class="avatar" src="/static/images/user.png"></image>
                            <span class="author">九灯和善</span>
                        </div>
                        <div class="book-tag">
                            <span>都市</span>
                            <span>玄学</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list">
                <image class="book-bg" src="/static/images/book-img.jpg"></image>
                <div class="book-container">
                    <div class="book-title hidden-one">超品相师</div>
                    <div class="book-content hidden-second">连载于起点中文网一部玄幻小说，作者是九灯和善。全书已完结。该小说讲述了二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，机缘巧合一步步走上相师之巅的故事。</div>
                    <div class="bottom-part">
                        <div class="book-author">
                            <image class="avatar" src="/static/images/user.png"></image>
                            <span class="author">九灯和善</span>
                        </div>
                        <div class="book-tag">
                            <span>都市</span>
                            <span>玄学</span>
                        </div>
                    </div>
                </div>
            </div>
        </block>
       
    </div>
</template>

<!-- script source -->
<script type="text/babel">
export default {
    onShow() { },
    mounted() { },
    data() {
        return {
            hotBookList: ['斗破苍穹', '修真聊天群', '武动乾坤', '深夜书屋', '大王饶命','后宫如懿传', '香蜜沉沉经如霜', '你好, 旧时光', '那时喜欢你'],
            isShow: true,
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
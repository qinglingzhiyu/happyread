<!-- 书单-->
<!-- template source-->
<template>
    <div class="readlist">
        <div class="read-introduce">
            <div class="read-title hidden-one">有意思的书柜:一个老书虫的推荐</div>
            <div class="read-tip">共 21本, 57539收藏</div>
            <div class="read-container">
                推荐的书各类型都有,总有你喜欢的,给你带来不一样的视觉盛宴.喜欢了收藏下,点一颗❤
            </div>
        </div>
        <div class="list">
            <bookcard></bookcard>
            <bookcard></bookcard>
            <bookcard></bookcard>
            <bookcard></bookcard>
            <bookcard></bookcard>
            <bookcard></bookcard>
            <bookcard></bookcard>
            <bookcard></bookcard>
        </div>
    </div>
</template>

<!-- script source -->
<script type="text/babel">
import bookcard from '@/components/bookcard'
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
    components: {
        bookcard
    },

    methods: {  },

    computed: {  }

}
</script>

<!-- style source -->
<style lang="scss" scoped>
@import "./style";
</style>
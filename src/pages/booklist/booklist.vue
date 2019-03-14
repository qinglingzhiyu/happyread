<!-- 书单-->
<!-- template source-->
<template>
    pro
</template>

<!-- script source -->
<script type="text/babel">
import bookcard from '@/components/bookcard'
export default {
    onLoad() {
        let { from } = this.$root.$mp.query;
        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#f4f4f4',
        })
        from && wx.setNavigationBarTitle({
            title: from
        })
    },

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
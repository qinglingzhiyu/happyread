<!-- 推荐页面-->
<!-- template source-->
<template>
    <div class="recommend">
        <!-- 顶部搜索 -->
        <div class="search" @click="goPagewithSearch">
             <div class="search-main">
                <i-icon type="search" size="28" color="#80848f"/>
                <span class="search-txt">搜索</span>
            </div>
        </div>
       
        <!-- 顶部tab -->
        <i-tabs :current="tabCurrent" @change="handleTabChange">
            <i-tab key="man" title="男生"></i-tab>
            <i-tab key="woman" title="女生"></i-tab>
            <i-tab key="short" title="短篇"></i-tab>
        </i-tabs>

        <!-- 男生部分 -->
        <scroll-view :hidden="tabCurrent !== 'man'" :scroll-y="true" class="index-main">
            <image mode="aspectFill" class="index-top-img" src="/static/images/mybook.jpg"/>
            <div class="todayTitle">今日推荐</div>
            <div class="bookCard" @click="goPageWithDetail">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 <span style="text-decoration:line-through;">￥138.22</span></i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="todayTitle">往期推荐</div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
        </scroll-view>

        <!-- 女生部分 -->
        <scroll-view :hidden="tabCurrent !== 'woman'" :scroll-y="true" class="index-main">
            <image mode="aspectFill" class="index-top-img" src="/static/images/mybook.jpg"/>
            <div class="todayTitle">今日推荐</div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师2</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="todayTitle">往期推荐</div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
            <div class="bookCard">
                <div class="card-header">
                    <image class="card-img" mode="aspectFill" src="/static/images/book-img.jpg"></image>
                    <div class="card-pith">
                        <div class="card-title">超品相师</div>
                        <div class="card-author">九灯和善</div>
                        <div class="readed">
                            <span class="count">7</span>位好友读过 | 评分<span class="score">4.7</span>
                        </div>
                    </div>
                </div>
                <div class="card-synopsis">
                    相师分九品，一品一重天 [3]  ，二品是入门，三品算是登堂，四品之后才能真正的称为相师。风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前的玄学传承，从此混迹都市，游走于高官权贵之间，豪门千金，世家小姐身侧，秦宇说：“我为超品相师，相人，相地，相红颜” 六爻算尽天下事，八字测遍世间人！
                </div>
                <div class="card-tag">
                    <span>368w+读过</span>
                    <span>穿越</span>
                    <span>热血玄幻</span>
                    <span>完结</span>
                </div>
                <div class="merit">-编辑推荐-男频玄幻佳作-</div>
                <div class="card-footer">
                    <i-button class="join-btn" type="info" size="small" shape="circle">免费阅读 ￥138.22</i-button>
                    <div class="join-rack">
                        <image src="/static/images/book-icon.png"></image>
                    </div>
                </div>
            </div>
        </scroll-view >

        <!-- 短篇部分 -->
        <scroll-view :hidden="tabCurrent !== 'short'" :scroll-y="true" class="index-short">
            <div class="short">
                <image class="short-bg" mode="aspectFill" src="/static/images/short-bg.jpg"></image>
                <div class="short-title">都市默示录,十年阅龄的优质书单走心推荐</div>
            </div>
             <div class="short">
                <image class="short-bg" mode="aspectFill" src="/static/images/short-bg.jpg"></image>
                <div class="short-title">都市默示录,十年阅龄的优质书单走心推荐</div>
            </div>
             <div class="short">
                <image class="short-bg" mode="aspectFill" src="/static/images/short-bg.jpg"></image>
                <div class="short-title">都市默示录,十年阅龄的优质书单走心推荐</div>
            </div>
        </scroll-view>
    </div>
</template>

<!-- script source -->
<script type="text/babel">
export default {
    onShow() { },
    mounted() { },
    data() {
        return {
            tabCurrent: 'man'
        }
    },
    components: { },

    methods: { 
        handleTabChange: function ({mp}) {
            let { key } = mp.detail;
            this.tabCurrent = key;
        },

        //跳转到搜索页面
        goPagewithSearch:async function () {
            this.$promisify.jumpToPromisify('search')
        },

        //跳转到详情页面
        goPageWithDetail: async function () {
            this.$promisify.jumpToPromisify('bookdetail')
        }
    },

    computed: {  }

}
</script>

<!-- style source -->
<style lang="scss" scoped>
@import "./style";
</style>
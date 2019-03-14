<template>
    <div class="book">
        <image class="book-img" src="/static/images/book-img.jpg" />
        <div class="book-container">
            <div class="book-title hidden-one">1. 王者的脚下潜伏深渊</div>
            <div class="book-main hidden-second">王者的英雄们启程探索未知的世界: 幽暗森林中的阴影正在窥伺着机会,亡灵从死亡的国度返回,隐藏 幽暗森林中的阴影正在窥伺着机会,亡灵从死亡的国度返回</div>
            <div class="book-footer">
                <image class="avatar" src="/static/images/user.png" />
                <text class="userName">大瓜熊</text>
                <text class="book-type">异界</text>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    // props: ['text']
    }
</script>

<style lang="scss">
.book {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25rpx 0;
    font-size: 22rpx;
    border-bottom: 1rpx solid rgb(209, 204, 204);
    .book-img {
        margin-right: 20rpx;
        width: 115rpx;
        height: 150rpx;
    };  
    .book-container {
        flex:1;
        text-align: left;
        .book-title {
            font-size: 28rpx;
        };
        .book-main {
            margin-top: 13rpx;
            line-height: 30rpx;
        };
        .book-footer {
            position: relative;
            display: flex;
            align-items: center;
            margin-top: 10rpx;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            color: rgb(143, 140, 140);
            .avatar {
                margin-right:10rpx; 
                width: 30rpx;
                height: 30rpx;
                border-radius: 50%;
            };
            .book-type {
                position: absolute;
                padding: 0 10rpx;
                right: 0;
                line-height: 24rpx;
                border: 1rpx solid rgb(184, 178, 178);
            }
        }
    }
}
</style>

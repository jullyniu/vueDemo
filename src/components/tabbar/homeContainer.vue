<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="/home/newslist">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="">
                <span class="mui-icon mui-icon-email"></span>
                <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
        </ul> 
    </div>
</template>
<script>
    import {Toast } from 'mint-ui'
    export default {

        data() {
            return {
                lunboList:[]
            }
        },
        created() {
            this.getSwiper()
        },
        methods: {
            getSwiper(){
                this.$axios.get('static/data.json').then(res=>{
                    //console.log(res)
                    if(res.status===200){
                        this.lunboList=res.data.lunbo;
                    }
                    
                    
                }).catch(err=>{
                    Toast('获取数据失败')
                })
            }
        },
    }
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        img{
            display: block;width:100%;height: 100%;
        }
    }
    .mui-grid-view.mui-grid-9{
        background: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{border:0;}
</style>
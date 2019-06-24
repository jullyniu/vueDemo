<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">Home</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">Email</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">Chat</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">location</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">Search</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">Search</div></a>
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
                    console.log(res)
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
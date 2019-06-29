<template>
    <div class="newsinfo-container">
        <div class="title">{{newinfo.title}}</div>
        <div class="subtitle">
            <span>发布时间：{{newinfo.add_time | dataFormat}}</span>
            <span>点击次数：{{newinfo.click}}</span>
        </div>
        <div class="content" v-text="newinfo.zhaiyao"></div>

        <!-- 评论组件 -->
        <comment-box></comment-box>
    </div>
</template>
<script>
import comment from '../common/comment'
export default {
    data() {
        return {
            id:this.$route.params.id,
            newinfo:[]
        }
    },
    created() {
        this.getNewInfo()
    },
    methods: {
        getNewInfo(){
            console.log('当前id'+this.id)
            this.$axios.get('static/data.json').then(res=>{
                var newslist=res.data.newslist;
                var info=newslist.filter(item=>{
                    return item.id==this.id;
                })
                this.newinfo=info[0]
            })
        }
    },
    components:{//注册子组件
        'comment-box':comment
    }
}
</script>
<style lang="scss" scoped>
    .newsinfo-container{
        padding: 20px;
        .title{
            font-size: 24px;
            color: red;text-align: center;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;margin-top: 10px;
            border-bottom: 1px solid #eee;padding-bottom: 10px;
            color: #999;text-align: left;font-size: 14px;
        }
        .content{
            font-size: 16px;color: #333;line-height: 1.6;margin-top: 10px;
        }
    }
</style>


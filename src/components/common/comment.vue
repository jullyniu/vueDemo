<template>
    <div class="comment-box">
        <h4>评论区</h4>
        <textarea maxlength="120" placeholder="请输入评论的内容"></textarea>
        <div style="text-align:right;"><mt-button type="primary">发表评论</mt-button></div>
        <div class="commenttit">评论列表</div>
        <ul class="comment-list">
            <li>
                <div class="comment-body">棒棒的</div>
                <div class="comment-footer">
                    <span>评论人：匿名用户</span>
                    <span>2017-22</span>
                </div>
            </li>
        </ul>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .comment-box{
        text-align: left;
        .commenttit{
            font-size: 18px;
        }
        .comment-list{
            list-style: none;padding:0;
            li {
                padding-bottom: 4px;
                border-bottom: 1px solid #ddd;
                .comment-body{
                   color: #333;font-size: 16px;     
                }
                .comment-footer{
                    display: flex;
                    justify-content: space-between;color: #666;font-size: 14px;
                }
            }
        }
    }
    
</style>

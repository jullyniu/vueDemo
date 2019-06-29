<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <div class="mui-ellipsis">{{item.title}}</div>
            <p><span>发表时间：{{item.add_time | dataFormat('YYYY-MM-DD')}}</span><span>点击次数：{{item.click}}</span></p>
          </div>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        newslist:[]
    };
  },
  created() {
     this.getNewsList(); 
  },
  methods: {
      getNewsList(){
          this.$axios.get('static/data.json').then(res=>{
              //console.log(res.data.newslist)
              this.newslist=res.data.newslist
          })
      }
  }
};
</script>
<style lang="scss" scoped>
    .mui-table-view{
        .mui-media-body{
            .mui-ellipsis{
                text-align: left;
            }
            p{
                display: flex;
                justify-content: space-between;
                color:lightblue;
            }
        }
    }
</style>
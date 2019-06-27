<template>
<div class="pageecoCircle container active">
<el-card>
    <h2>环同济经济圈创业园区选址</h2>
    <span>结合环同济经济圈附近区域的房价和交通情况，分析经济圈中哪些区域适合作为新的文化创业产业园进行开发。</span>
    <el-divider></el-divider>
    <h3>房价</h3>
    <span>从房价网爬取50个写字楼的位置和租金，并使数据点均匀分布在杨浦区的各个区域：</span>
    <el-divider></el-divider>
    <h3>交通情况</h3>
    <el-divider></el-divider>
    <h3>建立模型</h3>
    <el-divider></el-divider>
    <h3>最终结论</h3>
    <div align="center">
    <el-button type="primary" icon="el-icon-search">
      <a  class="a-style" @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=https%3A%2F%2Flocalhost%3A6443%2Farcgis%2Frest%2Fservices%2F%25E7%258E%25AF%2FMapServer&source=sd')">查看地图

      </a>
    </el-button>
</div>
    
</el-card>
</div>


</template>

<script>

export default {
 
  components: {

  },
  data () {
    return {
      //
      linkDownload (url) {
    window.open(url,'_blank') // 新窗口打开外链接
},
    }
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
   .a-style {
  text-decoration:none
}
</style>
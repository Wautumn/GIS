<template>
<div class="pageecoCircle container active">
<el-card>
    <h2>环同济经济圈创业园区选址</h2>
    <span>结合环同济经济圈附近区域的房价和交通情况，分析经济圈中哪些区域适合作为新的文化创业产业园进行开发。</span>
    <el-divider></el-divider>
    <h3>房价</h3>
    <span>从房价网爬取30个写字楼的位置和租金，并使数据点均匀分布在杨浦区的各个区域：</span>
    <br>
    <br>
   <div align="center">
      <img src="../../static/image/img1.jpg" class="image">
   </div>
     <el-divider></el-divider>
    <h3>交通情况</h3>
      <span>杨浦区附近的轨道交通线分布如下：</span>
     <br><br>
<div align="center">
      <img src="../../static/image/c1.png" class="image">
  </div>
 <el-divider></el-divider>
    <h3>建立模型</h3>
    根据所选房源点的数据，生成泰森多边形，计算多边形区域内的房价水平:
    <br><br>
<div align="center">
  <el-row :gutter="50">
  <el-col :span="11">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../static/image/t1.png" class="image">
        <div style="padding: 14px;">
        <span>色调越暖房价水平越高</span>
      </div>
    </el-card>
  </el-col>

 <el-col :span="11">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../static/image/t2.png" class="image">
          <div style="padding: 14px;">
        <span>将地图栅格化</span>
      </div>
    </el-card>
 </el-col>
 </el-row>
 </div>
    <br><br>
<span>对环同济经济圈内的地铁轨交线路，使用多环缓冲区工具，建立100 米、200 米、……、800 米的区域。</span>
<br><br>
<div align="center">
<el-row :gutter="30">
  <el-col :span="11">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../static/image/k1.png" class="image">
       <div style="padding: 14px;">
        <span>将交通便利程度分为八个等级</span>
        </div>
    </el-card>
 </el-col>

 <el-col :span="11">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../static/image/k2.png" class="image">
       <div style="padding: 14px;">
        <span>将地图栅格化</span>
        </div>
    </el-card>
 </el-col>
 </el-row>
 </div>
   <el-divider></el-divider>
    <h3>最终结论</h3>
    <span>根据经验，房价对于选址成本的影响较交通便利程度更大，所以设其权重更大， 有如下选址成本公式：</span>
    <span>选址成本 = 0.8 × 房价指标 + 0.2 × 交通指标 </span>
    <span>根据上述公式使用栅格计算器将两个指标的栅格化结果叠加，得到如下图所示的结果：</span>
      <br><br>
     <div align="center">
      <img src="../../static/image/final.png" class="image">
      </div>
    <br><br>
    <div align="center">
    <el-button type="primary" icon="el-icon-search">
      <a  class="a-style" @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=https%3A%2F%2Flocalhost%3A6443%2Farcgis%2Frest%2Fservices%2F%25E7%258E%25AF%2FMapServer&source=sd')">查看地图

      </a>
    </el-button>
    </div>
 <br><br>
    <span>图中各点的选址成本越低，则对应图中点的色调就越暖，反之，选址成本越高， 则对应图中点的色调就越冷。</span>
    <span>可以看出，在环同济经济圈中，靠近虹口区和松花江路与内环交界处的区域的色调较暖，对应的选址成本就在整个环同济经济圈内较低，所以我们得出结论： 经济圈中靠近虹口区的区域适合作为新的文化创业产业园进行开发，因为这块区域的选址成本更低。</span>
 <br><br>
    
</el-card>
</div>


</template>

<script>
 /* eslint-disable */
export default {
 
  components: {

  },
  data () {
    return {
      //
    
    }
  },
  methods:{
  linkDownload (url) {
    window.open(url,'_blank') // 新窗口打开外链接
},
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
    width: 400px;
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
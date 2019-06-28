<template>

    <div>
        <el-card>
       <h1>上海文化产业分布</h1>
           <el-divider></el-divider>
    <div align="center">
          <el-button type="primary" icon="el-icon-search">
               <a class="a-style" @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=https%3A%2F%2Flocalhost%3A6443%2Farcgis%2Frest%2Fservices%2F%25E6%25A0%2585%25E6%25A0%25BC%2FMapServer&source=sd')">查看地图</a>
              </el-button>
    </div>
<br><br>
<div align="center">
    
      <img src="../../static/image/比例.png" class="image" style="height: 500px;width: 800px">
      </div>
    <br><br>
        <!-- <img src="../../static/image/比例.png" style="height: 600px;width: 1000px">
        <br>
       <br><br> -->
    <div align="center">
        <img src="../../static/image/比例地图.jpg" style="height: 500px;width: 780px">
        </div>
            <div align="center">
                <img src="../../static/image/比例.jpg" style="height: 500px;width: 780px">
            </div>
   
</el-card>
 </div>
</template>

<script>
    export default {
    
methods:{
          linkDownload (url) {
    window.open(url,'_blank') // 新窗口打开外链接
          }
},
    }
</script>

<style scoped>

</style>
<template>
    <!--历史对比-->
    <div>
        <el-card>
        <div>
           <h2> 嘉定区与杨浦区地图</h2>
             <el-divider></el-divider>
             <div align="center">
            <el-button type="primary" icon="el-icon-search">
                <a class="a-style"
                   @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2Fjiading%2FMapServer&source=sd')">查看嘉定区地图

                </a>
            </el-button>
            </div>
        </div>
     <br>
        <div>
          <div align="center">
            <el-button type="success" icon="el-icon-search">
                <a class="a-style"
                   @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2Fyangpu_reli%2FMapServer&source=sd')">查看杨浦区地图

                </a>
            </el-button>
            </div>
        </div>

        <h2>产业分析</h2>
         <el-divider></el-divider>
          <div align="center">
      <img src="../../static/image/yangpu.jpg" class="image">
      </div>
        <div style="font-size: 16px">
           分析图中数据可知，杨浦区的发展仍然有较大进步空间：
	<p>1. 尚未形成文创产业示范区——多产业同步发展、完善产业链，做出品牌。即品牌不够响亮，集聚效应有待培育，例如，在高新技术产业高速发展的同时，要注重其余设计关联产业、文化细分产业的拓展；</p>
	<p>2. 区校联动有待进一步提升——建议发展“文化创意街区”，“文化创意社区”，充分利用杨浦区丰富的高校资源，进行结合，彰显区域特色，建设智慧城市；</p>
	<p>3. 未能以点带面构建产业大格局——要有龙头园区来发挥主心骨作用；增长极理论认为，在现实中，经济增长通常是从一个或数个“增长中心”逐渐向其他部门或地区传导，但现有文创产业园区并没有发挥其应有的效应；</p>
	<p>4. 产业发展环境有待优化——鼓励跨界创新，组合创新，提供动力机制，调动整体产业氛围；</p>
	<p>5. 集聚人才，加大投入，构建文化创意产业支撑体系</p>
 <br> <br>
        </div>
         <el-divider></el-divider>
        <br> <br>
  <div align="center">
      <img src="../../static/image/jiading.jpg" class="image">
      </div>
            <div style="font-size: 16px">
                 <br> <br> 
        分析图中数据可知，嘉定区的发展仍然存在许多待改进之处：
	<p>1. 加快产业园区转型提升——针对传统企业，要积极进行二次开发，寻找出口，引进新兴模式，融合以往积累下来的资源与技术；</p>
	<p>2. 高素质人才整体数量较少——全球链接，借鉴其他区引进人才的方法，吸纳高层次人才，留住人才，并出台相应政策，同时完善科技中介服务体系；</p>
	<p>3. 大多数园区产业集约化水平不高，总体产业规模偏小，能级偏低，尚还停留在“拼资源、拼政策”的培育和提升阶段——加速要素融合，集聚效应的发挥需要主心骨产业带头扩大影响力，并有效进行资源整合与配置；</p>
	<p>4. 文化产业园区发展不平衡——像“南水北调”一般，进行资源调动，功能联动，可由优秀园区向外延伸，带动其他正在发展中的园区；</p>
	<p>5. 部分园区缺乏个性培育，粗放式经营居多，具体表现在主业不突出、业态不清晰、产业链平台功能打造不足等问题——对文创园区要有针对性的引导发展，一定要有“个性”，同时追求质量，求精；</p>
	<p>6. 交通、学校、公共设施等城市服务功能急需完善——要吸引更多的企业与人才，一个良好的产业环境与生活环境必不可少，期待进一步针对“一核三区”布局，进行交通等方面的规划，是整个生存环境更便利，舒适；</p>

        </div>
         <br> 
        <!-- <div id="main1" style="width: 80%;height:400px;"></div> -->
  </el-card>
    </div>
</template>

<script>
    export default {
        name: "page22",
        methods: {
            linkDownload(url) {
                window.open(url, '_blank') // 新窗口打开外链接
            },
        }
    }
</script>

<style scoped>

</style>
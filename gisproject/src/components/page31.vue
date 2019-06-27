<template>
    <!--热点分析-->
    <div>
        <el-card>
        <h2>文化产业在各个区的热点</h2>
 <el-divider></el-divider>
        <!-- <h2>
            <a href="http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2FPOI_Hot_Spot_wholeSH%2FMapServer&source=sd"
               target="view_window">查看热点图</a>
        </h2>
        <h2>
            <a href="http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2Fshanghai_reli%2FMapServer&source=sd"
               target="view_window">热力图</a>

        </h2> -->

 <div align="center">
            <el-button type="primary" icon="el-icon-search">
                <a class="a-style"
                   @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2FPOI_Hot_Spot_wholeSH%2FMapServer&source=sd')">查看热点图

                </a>
            </el-button>
         
        </div>
     <br>
       
          <div align="center">
            <el-button type="success" icon="el-icon-search">
                <a class="a-style"
                   @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2Fshanghai_reli%2FMapServer&source=sd')">热力图

                </a>
            </el-button>
            </div>


<br>


        <div id="viewDivHot"></div>
        <div>从图中可以得出，上海市文化创意产业主要密集分布的区域为杨浦区、虹口区、黄浦区、静安区、徐汇区、长宁区、
            普陀区等快速路分布区域
        </div>
</el-card>
    </div>
</template>

<script>
    export default {
        name: "page31",
          methods: {
            linkDownload(url) {
                window.open(url, '_blank') // 新窗口打开外链接
            },
        }
    }
</script>

<style scoped>

</style>
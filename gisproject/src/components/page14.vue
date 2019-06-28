<template>

    <div>
    <el-card>
        <h1>相似度分析</h1>
         <el-divider></el-divider>
        <!-- <a href="http://www.arcgis.com/home/webmap/viewer.html?url=https%3A%2F%2Flocalhost%3A6443%2Farcgis%2Frest%2Fservices%2F%25E6%25A0%2585%25E6%25A0%25BC%2FMapServer&source=sd"
           target="view_window">
            查看地图
        </a> -->
<div align="center">
            <el-button type="primary" icon="el-icon-search">
                <a class="a-style"
                   @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=https%3A%2F%2Flocalhost%3A6443%2Farcgis%2Frest%2Fservices%2F%25E6%25A0%2585%25E6%25A0%25BC%2FMapServer&source=sd')">地图

                </a>
            </el-button>
         
        </div> 
        <br>
        <div>
            根据上海市 POI 数据的 FEATCODE 将所有产业进行大致的分类，将分好类的
            POI 图层转化为栅格图层；再通过多元分析波段集统计输出相关统计情况。
        </div>
        <el-carousel :interval="5000" arrow="always" height="600px">
            <el-carousel-item v-for="(img,index) in imgs" :key="index">
                <h3 style="text-align: center"><img v-bind:src="img.url" style="width: 500px;height: 400px"></h3>
                <h3 style="text-align: center">{{img.name}}</h3>

            </el-carousel-item>
        </el-carousel>

       <h3>
           根据多元分析波段集统计数据：
           通过相关系数，发现文化创意产业与娱乐餐饮、建筑的 POI 空间相关度较高。
           因此我们得到如下结论：</h3>
          <h4> 1. 文化创意产业要有所发展，一定与场地空间密切相关。只有拥有足够的空 间，合理的地
           理位置，才能最大化地提升这个区域的文化创意氛围。所以政 餐饮产业 地标产业 电信邮
           政产业 建筑房产 交通运输产业 教育培训产业 金融服务业 零售产业 上海文化产业 府对
           文化创意产业的支持一定会吸引大批房产商和建筑设计人才聚集起来设 计构建建筑，建筑
           房产业的分布也因此和文化创意产业的分布相关。</h4>
           <h4>2. 文化创意产业是当代新兴的产业，能够培养当地文化创意氛围，并吸引大批游客前往此
           地参观，于是文化创意产业逐渐具有休闲娱乐功能。因此与娱乐休闲相关的餐饮产业在文化
               创意产业周遭也具有了很好的发展机遇。</h4>

    </el-card>
    </div>
</template>

<script>
    export default {
        name: "page14",
        data() {
            return {
                imgs: [
                    {
                        url: require("../../static/image/交通.jpg"),
                        name: "交通"
                    },
                    {
                        url: require("../../static/image/农牧.jpg"),
                        name: "农牧"
                    },
                    {
                        url: require("../../static/image/制造业.jpg"),
                        name: "制造业"
                    },
                    {
                        url: require("../../static/image/娱乐.jpg"),
                        name: "娱乐"
                    },
                    {
                        url: require("../../static/image/广告.jpg"),
                        name: "广告"
                    },
                    {
                        url: require("../../static/image/建筑.jpg"),
                        name: "建筑"
                    },
                    {
                        url: require("../../static/image/文化.jpg"),
                        name: "文化"
                    },
                    {
                        url: require("../../static/image/生活.jpg"),
                        name: "生活"
                    },
                    {
                        url: require("../../static/image/金融.jpg"),
                        name: "金融"
                    },
                    {
                        url: require("../../static/image/餐饮.jpg"),
                        name: "餐饮"
                    },

                ]


            }
        },
         methods: {
            linkDownload(url) {
                window.open(url, '_blank') // 新窗口打开外链接
            },
        }
    }
</script>

<style scoped>

</style>
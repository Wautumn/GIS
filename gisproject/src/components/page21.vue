<template>
    <!--历史对比-->
    <div>
        <div>
            嘉定区地图
            <el-button type="primary" icon="el-icon-search">
                <a class="a-style"
                   @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2Fjiading%2FMapServer&source=sd')">查看地图

                </a>
            </el-button>
        </div>
        <hr>
        <br>
        <div>
            杨浦区地图
            <el-button type="primary" icon="el-icon-search">
                <a class="a-style"
                   @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2Fyangpu_reli%2FMapServer&source=sd')">查看地图

                </a>
            </el-button>
        </div>

        <h2>历史文化因素</h2>
        <div style="font-size: 16px">
            <span>杨浦区历史上作为沪东工业区，聚集了强盛的工业资源与力量，经济快速发展的同时，工厂群众文化也相应而生。境内先后建立起杨浦区工人俱乐部、杨浦区电影院、沪东工人文化宫、杨浦区文化宫、杨浦区图书馆等一批文化事业单位和街道文化站。</span>
            <p>黄浦区是海派文化的发源地、民族工业的发祥地、中国共产党的诞生地，在历史发展的过程中，形成了以豫园为代表的老城厢文化、以江南造船厂为代表的近现代工业文化、以外滩万国建筑和上海石库门等经典建筑为代表的建筑文化，和以中共一大会址为代表的红色文化等四大特色文化。</p>

            <p>综合分析以上数据可得出以下结论：</p>
            <p>-	杨浦区在科技创新、人才引进方面做的比黄浦区好很多。过去十年，杨浦一直在为“工业杨浦”向“知识杨浦”的转型而努力；杨浦成为国家创新型试点城区，为杨浦转型指引了方向，也给杨浦带来了一个新的发展机遇。</p>
            <p>-	黄浦区的精神文化建设丰富多彩，尤其是社区文化建设尤为突出。专业机构组织的引入，为社区文化活动中心，注入了更丰富的文化服务种类，也带来了更专业的文化服务层次。如此蜕变，最显著的效果，就是社区文化活动中心对居民的吸引力越来越大。</p>
            <p>-	想真正做到文化创意产业的蓬勃发展，就必须兼顾包括科技创新，人才引进，人才培养，社区文化建设、基础文化设施建设等各个方面，在政府的支持下培养文化创新氛围。</p>
        </div>
        <div id="main1" style="width: 80%;height:400px;"></div>
    </div>
</template>

<script>
    export default {
        name: "page21",
        methods: {
            linkDownload(url) {
                window.open(url, '_blank') // 新窗口打开外链接
            },
        }
    }
</script>

<style scoped>

</style>
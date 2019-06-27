<template>
    <!--压力分析-->
    <div >
<el-card>

        <h2>交通压力分析
             <el-divider></el-divider>
            <!-- <a href="	http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2Fhot_line%2FMapServer&source=sd"
               target="view_window">
                通勤压力
            </a> -->
            </h2>
 <div align="center">
            <el-button type="primary" icon="el-icon-search">
                <a class="a-style"
                   @click="linkDownload('http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2Fhot_line%2FMapServer&source=sd')">通勤压力

                </a>
            </el-button>
         
        </div>

        <span style="width: 1400px;font-size: 16px">
        <h3>嘉定区</h3>
        <ul>
        <li>地铁11号线(嘉定北--江苏路)</li>
            <li>地铁11号线(安亭--江苏路)</li>
            <li>(在建)地铁13号线(华江路--华夏中路)</li>
        </ul>

        <h3>松江区</h3>
        <ul>
            <li>地铁9号线(松江新城--杨高中路)</li>
        </ul>

        <h3>浦东新区</h3>
        <ul>
            <li>地铁2号线(浦东国际机场--广兰路)</li>
            <li>地铁2号线(广兰路--徐泾东)</li>
            <li>地铁4号线内环(宜山路--宜山路)</li>
            <li>地铁4号线外环(宜山路--宜山路)</li>
            <li>地铁6号线(东方体育中心--港城路)</li>
            <li>地铁7号线(花木路--美兰湖)</li>
            <li>地铁8号线(航天博物馆--市光路)</li>
            <li>地铁9号线(杨高中路--松江新城)</li>
            <li>(在建)地铁12号线(金穗路--七莘路)</li>
            <li>(在建)地铁13号线(华夏中路--华江路)</li>
        </ul>

        <h3>金山区</h3>
        <ul>
        <li>无地铁线路</li>
        </ul>
               <h3> 青浦区</h3>
        <ul><li>地铁2号线(徐泾东--广兰路)</li></ul>

    </span>
        <br/>
        <span style="width: 1400px;font-size: 16px">
        <h3>嘉定区</h3>
        <ul>
        <li>曹安公路</li>
        <li>沪宜公路</li>
        <li>嘉西立交桥</li>
        <li>清河路</li>
        <li>嘉松北路</li>
        <li>外环沪宁立交桥</li>
        <li>真南路</li>
        <li>G15沈海高速</li>
        <li>G1501上海绕城高速</li>
        <li>S5沪嘉高速</li>
        <li>S20外环高速</li>
        <li>G2京沪高速</li>
        </ul>
        <h3>松江区</h3>
        <ul>
        <li>车亭公路</li>
        <li>G15沈海高速</li>
        <li>北松公路</li>
        <li>G60沪昆高速</li>
        <li>S32申嘉湖高速</li>
        <li>G1501上海绕城高速</li>
        </ul>
        <h3>浦东新区</h3>
        <ul>
        <li>中环路</li>
        <li>南北高架路</li>
        <li>内环高架路</li>
        <li>华夏高架路</li>
        <li>五洲大道</li>
        <li>翔殷路隧道</li>
        <li>S20外环高速</li>
        <li>S32申嘉湖高速</li>
        <li>G1501上海绕城高速</li>
        <li>S2沪芦高速</li>
        <li>环东二大道立交桥</li>
        <li>S1迎宾高速</li>
            </ul>
        <h3>金山区</h3>
        <ul>
        <li>G60沪昆高速</li>
        <li>亭枫公路</li>
        <li>车亭公路</li>
        <li>松金公路</li>
        <li>亭卫公路</li>
        <li>S36亭枫高速</li>
        <li>S19新卫高速</li>
        <li>G15沈海高速</li>
        <li>S4沪金高速</li>
        <li>G1501上海绕城高速</li>
        <li>新农立交桥</li>
            </ul>
        <h3>青浦区</h3>
        <ul>
        <li>G50沪渝高速</li>
        <li>嘉闵高架路</li>
        <li>崧泽高架路</li>
        <li>G15沈海高速</li>
        <li>沪青平公路</li>
        <li>S26沪常高速</li>
        <li>G1501上海绕城高速</li>
        <li>G2京沪高速</li>
            </ul>
    </span>
        <div id="viewDiv4"></div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "page32",
         methods: {
            linkDownload(url) {
                window.open(url, '_blank') // 新窗口打开外链接
            },
        }
    }
</script>

<style scoped>

</style>
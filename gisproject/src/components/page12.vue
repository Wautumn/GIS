<template>
<el-card>
    <div>
        <h2>内中外环分布</h2>
        <a href="http://www.arcgis.com/home/webmap/viewer.html?url=https%3A%2F%2Flocalhost%3A6443%2Farcgis%2Frest%2Fservices%2F%25E7%258E%25AF%25E6%2595%25B0%25E6%258D%25AE%2FMapServer&source=sd"
           target="view_window">
            查看地图
        </a>
        <br>
       
        <div>
            <div>主要操作：按位置选择，内环外环中环面，按位置选择，选出在面内的所有点</div>
            <div>内环：22087</div>
            <div>中环：11599</div>
            <div>外环：6847</div>
            <div>外环外：12537</div>
            总：53070
        </div>
        <img src="../../static/image/环数量.jpg">

        <h3>直线距离</h3>
        <div>以人民广场为中心点，分别构建半径不同的同心圆，每个同心圆之间的半径差值相同，
            两个同心圆间所含的文化创新点的数量作为外圈同心圆下的文化产业数量。（选择密度，即
            单位面积的文化产业的数量而不是数量的原因：研究的是中心点的分布，在占地面积不同的
            情况下，数量的比较没有意义）
        </div>
        <img src="../../static/image/环.jpg">

        <h4>构建模型</h4>
        <div>模型猜测：</div>
        <div> 曲线分布，利用多项式回归模型拟合数据</div>
        <img src="../../static/image/模型拟合.jpg">
        <div>最大次幂为 5：</div>
           <div> 次数分别为 0，-4.55155036e+01 ， 2.97867147e+00， -9.72419100e-02， 1.56039741e-
            03， -9.76548447e-06
        </div>

        <h4>结论</h4>
        <div>上海市文化产业分布主要围绕人民广场呈辐射状展开，且相关性
            较强</div>


        <h3>实际距离</h3>
        <div>
            根据 ArcGIS 的路径分析生成的每个创新文化点距离人民广场的距离，（OD）处理数据
            并按照第二问的思路将距离数据和距离人民广场“直线距离”的数据进行回归模型的误差值
            分析。

        </div>
    </div>
</el-card>
</template>

<script>
    export default {
        name: "page12"
    }
</script>

<style scoped>

</style>
<template>
    <div >
        <h2>重新规划
            <a href="http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2Fyangpu_reli%2FMapServer&source=sd"
               target="view_window">地图
            </a>
        </h2>
        <span style="width: 1400px;">
        以五角场商业圈为新的文化产业区域，将同济大学、复旦大学、上海财经大学等附近沿线高校联系在一起，融合五角场的经济体系，打造一种商业——科技——教育等多方面一体化的文化创意产业区。
    </span>
        <h2>Huff模型
            <a href="http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2FHuff_Center_and_Result%2FMapServer&source=sd"
               target="view_window">地图
            </a>
        </h2>
        <span style="width: 1400px;">
        将杨浦区按街道划分为不同街区，考虑人口、科技产业数量、高等院校个数、街区房价为因素，计算Huff模型的吸引指数，检查五角场是否为兴趣最大的点。
    根据经验判断，四个因素的优先级初步确定为：高校数量>人口数量>产业数量>房屋均价，因此取经验系数为3，2，4，1。
        由计算结果可知，五角场街道的A值最大，即得出结论，以五角场为中心建立文化创意产业示范区是合理的改进措施。
    </span>
        <h2>经济适用房选址
            <a href="http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2F10.60.42.201%3A6447%2Farcgis%2Frest%2Fservices%2FDu%2FCommute_Route_Start_End%2FMapServer&source=sd"
               target="view_window">地图
            </a>
        </h2>
        <span style="width: 1400px;">
        取产业人才缺口和交通便利性为考虑因素。
        产业人才缺口使用该区的人口量和产业量进行估算，考虑到户籍人口和常住人口差异较大，且常住人口更加符合实际情况，因此使用常住人口来进行估算。
        交通便利度以地铁为主要考虑因素，因为考虑到经济适用房及价格问题，此处以公共交通为主要考虑因素。衡量标准为到地铁线的距离，使用缓冲区功能，为距离地铁线2km的区域提供较高的权重。
        对人才缺口和地铁交通便利度进行综合考虑，可以得到人才缺口较大、公共交通较为便利的区域。
    </span>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "page41"
    }
</script>

<style>
    #viewDivEcoCircle {
        padding: 0;
        margin: 40px 10px;
        height: 40%;
        width: 100%;
        max-width: calc(100% - 202px);

    }

    #viewDivEcoCircle.active {
        display: none;
    }

    .myclass.container {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow-y: auto;
    }

    .myclass.container > div {
        margin: 20px;
    }

    .myclass.container > h2 {
        align-self: flex-start;
        color: #0088f5;
        font-size: 5em;
        margin: 20px;
        text-indent: 30px;
    }

    .myclass.container > span {
        font-size: 2em;
        width: 100rem;
        text-indent: 30px;
        letter-spacing: 1px;
        line-height: 2;
    }

    .myclass.container.active {
        display: none;
    }

    .selectecoCircle {
        position: relative;
        display: block;
        margin: 0 auto;
        width: 10%;
        max-width: 325px;
        color: #cccccc;
        vertical-align: middle;
        text-align: left;
        user-select: none;
        -webkit-touch-callout: none;
    }

    .selectecoCircle .placeholder {
        position: relative;
        display: block;
        background-color: #393d41;
        z-index: 1;
        padding: 1em;
        border-radius: 2px;
        cursor: pointer;
    }

    .selectecoCircle .placeholder:hover {
        background: #34383c;
    }

    .selectecoCircle .placeholder:after {
        position: absolute;
        right: 1em;
        top: 50%;
        transform: translateY(-50%);
        font-family: 'FontAwesome';
        content: '\f078';
        z-index: 10;
    }

    .selectecoCircle.is-open .placeholder:after {
        content: '\f077';
    }

    .selectecoCircle.is-open ul {
        display: block;
    }

    .selectecoCircle.selectecoCircle--white .placeholder {
        background: #fff;
        color: #999;
    }

    .selectecoCircle.selectecoCircle--white .placeholder:hover {
        background: #fafafa;
    }

    .selectecoCircle.selectecoCircle--green .placeholder {
        background: #5BF36E;
        color: #FFF;
    }

    .selectecoCircle.selectecoCircle--green .placeholder:hover {
        background: #5BF36E;
    }

    .selectecoCircle ul {
        display: none;
        position: absolute;
        overflow: hidden;
        width: 100%;
        background: #fff;
        border-radius: 2px;
        top: 100%;
        left: 0;
        list-style: none;
        margin: 5px 0 0 0;
        padding: 0;
        z-index: 100;
    }

    .selectecoCircle ul li {
        display: block;
        text-align: left;
        padding: 0.8em 1em 0.8em 1em;
        color: #999;
        cursor: pointer;
    }

    .selectecoCircle ul li:hover {
        background: #4ebbf0;
        color: #fff;
    }
</style>
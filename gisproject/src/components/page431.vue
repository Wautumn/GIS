<template>
<div class="pageecoCircle container active">
<el-card>
    <h2>环同济经济圈</h2>
    <span>环同济经济圈，即“环同济研发设计服务特色产业基地”，重点发展创意和设计产业，国际工程咨询服务业，新能源新材料和环保科技产业三大密集群。</span>
      <el-divider></el-divider>


      
    <h3>核心区</h3>
    <span>该产业基地的“核心圈”以同济大学四平路校区为核心，包括密云路、中山北二路、江浦路、控江路、大连路围合组成的区域，面积约2.6平方公里。</span>
    <!-- <el-divider></el-divider> -->
    <h3>扩展区</h3>
    <span>环同济经济圈扩展区以曲阳路、大连西路-大连路、周家嘴路、黄兴路、邯郸路围合组成，面积约 10 平方公里。</span>
    <span>在此基础上进一步向外扩展，形成四个“辐射点”，包括新江湾城辐射点、森林公园辐射点、黄兴公园辐射点、滨江辐射点。</span>
    <br><br>
    <div align="center">
          <el-button type="primary" icon="el-icon-search">
               <a class="a-style" @click="linkDownload('https://www.baidu.com')">查看地图</a>
              </el-button>
    </div>
    <br><br>
  <el-divider></el-divider>
    <h3>环同济经济圈文化产业</h3>
    <el-row gutter="20">
  <el-col :span="12">
    <el-card :body-style="{ width:'120px' }">
      <img src="@/assets/img411.png" class="image">
    </el-card>
  </el-col>
  <el-col :span="12">
    <el-card :body-style="{ width:'60px' }">
      <img src="@/assets/img412.png" class="image">
     <div style="width: 400px;">
      <br> <br> <br>
      <span>  杨浦区文化产业经济规模：646.695亿元</span>
      <br>
         <span>    环同济经济圈：102.56亿元    </span>
          <br> <br>
      </div>
    </el-card>
  </el-col>
</el-row>
 
<el-divider></el-divider>
    <h3>文化产业企业</h3>
      <el-card>
      <el-row>
  <el-col :span="12"><div class="grid-content bg-purple">
       <img src="@/assets/img413.png" class="image">
      </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">
      
        <el-card>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date1"
      label="类别"
     >
    </el-table-column>
    <el-table-column
      prop="name1"
      label="数量"
      >
    </el-table-column>
     <el-table-column
      prop="date2"
      label="类别"
     >
    </el-table-column>
    <el-table-column
      prop="name2"
      label="数量"
     >
    </el-table-column>
     <el-table-column
      prop="date3"
      label="类别"
      >
    </el-table-column>
    <el-table-column
      prop="name3"
      label="数量"
      >
    </el-table-column>
  </el-table>
  </el-card>
      
      
      
      
      </div></el-col>
</el-row>
     
    </el-card>

    <br><br>
    <span>对核心区及扩展区文化企业名称进行分词，前 80 位关键词根据其词频生成的词云：</span>
     <br><br>
          <div align="center">
      <img src="../../static/image/clous.png" class="image">
      </div>
      <br><br>
      <span>环同济经济圈内的文化产业的企业类型主要以设计、城规等为主，与同济大学的特色专业城市规划、设计相关。</span>
  <h3>文化产业链</h3>
<span>目前，环同济知识经济圈中集聚的企业以建筑与城市规划设计为龙头，辅以景观设计、环保工程设计、工程咨询、汽车设计、软件设计、艺术传媒设计、教育培训等知识服务业。这些企业中有2.4万余人的高素质就业人口，形成了中国最大的设计产业集群。</span>
<span>同济大学以学科链嵌入产业链实现全面功能对接，积极形成紧密的产学研战略联盟。</span>
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
      tableData: [{
          date1: '会展、布展',
          name1: '2',
          date2: '商标事务所',
          name2: '1',
          date3: '书刊销售',
          name3: '12',
        }, {
          date1: '书店',
          name1: '23',
          date2: '新华书店',
          name2: '3',
          date3: '科研机构',
          name3: '66',
        }, {
          date1: '书店',
          name1: '23',
          date2: '新华书店',
          name2: '3',
          date3: '科研机构',
          name3: '66',
          
        }, {
          date1: '设计机构',
          name1: '9',
          date2: '设计院&事务所',
          name2: '142',
          date3: '监测检测、认证',
          name3: '3',
        },
         {
          date1: '高新技术',
          name1: '131',
          date2: '文化艺术团体',
          name2: '18',
          date3: '图书馆、博物馆',
          name3: '4',
         },
          {
          date1: '艺术展览',
          name1: '2',
          date2: '档案馆',
          name2: '1',
          date3: '文化活动场所',
          name3: '16',
         },
        

        ]
    }
  },
   methods: {
    jumpto()
    {
     window.location.href ="https://blog.csdn.net/gang456789/article/details/78115589"
     console.log("hhhkkj")
    },
     linkDownload (url) {
      window.open(url,'_blank') // 新窗口打开外链接
    }
      
    }
}
</script>

<style>

  .image {
    width: 100%;
    display: block;
  }
  .a-style {
  text-decoration:none
}

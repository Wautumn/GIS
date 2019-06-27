<template>
<div>
<el-container height="800px" background-color="#545c64">
  <el-aside width="250px" height="800px" background-color="#545c64">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文化产业分布</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">上海文化产业分布图</el-menu-item>
          <el-menu-item index="1-2">人民广场分布</el-menu-item>
          <el-menu-item index="1-3">文化产业查询</el-menu-item>
          <el-menu-item index="1-4">环线文化产业分布图</el-menu-item>
        </el-menu-item-group>   
      </el-submenu>

        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文化历史因素</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">历史对比</el-menu-item>
        </el-menu-item-group>   
      </el-submenu>

         <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文化产业空间合理性</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">热点分析</el-menu-item>
           <el-menu-item index="3-2">压力分析</el-menu-item>
        </el-menu-item-group>   
      </el-submenu>


      
         <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文化产业重新规划</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">房价水平</el-menu-item>
          <el-menu-item index="5-2">Huff模型</el-menu-item>
          <el-menu-item index="5-3">经济适用房</el-menu-item>
        </el-menu-item-group>   
      </el-submenu>

        <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>环同济经济圈文化产业</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">环同济经济圈文化产业</el-menu-item>
          <el-menu-item index="6-2">环同济经济圈创业园区选址</el-menu-item>
        </el-menu-item-group>   
      </el-submenu>
    
    </el-menu>
    </el-aside>
    <el-main>
        <page11></page11>
    </el-main>
</el-container>

  <!--<el-container>-->
      <!--<el-main>-->
          <!--<ecocircle></ecocircle>-->
      <!--</el-main>-->
  <!--</el-container>-->


 </div>
</template>

<script>
    import ecocircle from '@/components/ecocircle.vue';
    import page11 from '@/components/page11.vue';
    import page31 from '@/components/page31.vue';
    import page32 from '@/components/page32.vue';
    import page41 from '@/components/page41.vue';
    import page42 from '@/components/page42.vue';
    import page43 from '@/components/page43.vue';
    
  export default {
      components: {
          ecocircle,
          page11,
          page31,
          page32,
          page41,
          page42,
          page43,

      },
    methods: {
      handleOpen() {
        //console.log(key, keyPath);
      },
      handleClose() {
        //console.log(key, keyPath);
      }
    }
  }
</script>

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
          <span>文化产业热点</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">热点分析</el-menu-item>
        </el-menu-item-group>   
      </el-submenu>
  
         <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>交通压力分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">压力分析</el-menu-item>
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
</el-container>

  <el-container>
      <el-main>

      </el-main>
  </el-container>


 </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }
    }
  }
</script>

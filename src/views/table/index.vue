<template>
  <div class="">
    <div class="search-bar">
      <el-input
        v-model.trim="searchContent.todo_name"
        placeholder="请输入名称"
        class="search"
      ></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <el-table :data="data" v-loading="loading" border style="width: 100%">
      <el-table-column prop="todo_name" label="名称"> </el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="is_completed" label="状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="refresh"
      @current-change="reload"
      :page-sizes="[10, 20, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page.sync="pageNumber"
      :page-size.sync="pageSize"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script setup>
import { useTable, Config } from "./useTable";
import axios from "axios";

const getList = (params) => {
  params.pageNum = params[Config.PAGE_NUMBER];
  Reflect.deleteProperty(params, params[Config.PAGE_NUMBER]);
  return axios({
    method: "get",
    url: "http://110.42.240.50:9000/getTodoListByPages",
    params,
  }).then((res) => {
    const response = res.data?.data;
    return {
      [Config.TOTAL]: response?.total,
      [Config.DATA]: response?.list,
    };
  });
};

const {
  searchParams,
  data,
  pageSize,
  pageNumber,
  total,
  refresh,
  reload,
  loading,
} = useTable(getList);

const searchContent = ref({
  todo_name: "",
});

const search = () => {
  searchParams.value = { ...searchContent.value };
  refresh();
};
</script>

<style scoped>
.search-bar {
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-end;
}
.search {
  width: 220px;
  margin-right: 10px;
}
</style>

<template>
  <div class="editor-panel">
    <el-tabs type="border-card">
      <el-tab-pane label="SELECT">
        <ColumnList></ColumnList>
      </el-tab-pane>
      <el-tab-pane label="FROM">
        <FromTab></FromTab>
      </el-tab-pane>
      <el-tab-pane label="WHERE"></el-tab-pane>
      <el-tab-pane label="GROUP BY"></el-tab-pane>
      <el-tab-pane label="HAVING"></el-tab-pane>
      <el-tab-pane label="ORDER BY"></el-tab-pane>
      <el-tab-pane label="LIMIT"><LimitTab></LimitTab></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ColumnList from "./ColumnList";
import FromTab from './FromTab';
import LimitTab from './LimitTab';
export default {
  name: "component-editor-panel",
  components: {
    ColumnList,
    FromTab,
    LimitTab
  },
};
</script>

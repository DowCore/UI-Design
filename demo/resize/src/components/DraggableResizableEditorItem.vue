<template>
  <div class="editor">
    <el-row style="height:250px;">
      <el-col>
        <div class="selectedTable">
          <TableEditor v-for="(item,index) in selectedTables" :key="item.uid" :resizor="{ x:5+index*150 }" :uid="item.uid" :id="item.id" :name="item.name" :alias="item.alias" :columns="item.child"></TableEditor>
        </div>
      </el-col>
    </el-row>
    <el-row style="top:260px;">
      <el-col>
        <div class="my">
          <EditorPanel></EditorPanel>
        </div>
      </el-col>
    </el-row>
   <!-- <el-row>
      <DrapResize :x="200" :y="50" :minw="150" :minh="100" :w="300" :h="200">
        <Header
          :header-name="input"
          @on-change="onChange"
          @header-change="headerChange"
        ></Header>
        <Body
          :details="detail"
          @detail-checked-changed="detailCheckedChanged"
        ></Body>
      </DrapResize>
    </el-row>-->
    <el-row>
      <el-button type="primary" @click="openDialog">打开弹窗</el-button>
      <Dialog v-model="isOpen"></Dialog>
    </el-row>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import DrapResize from "./DragResize";
import Dialog from "./Dialog";
import { store ,mution } from "./SharedModel";
import EditorPanel from "./EditorPanel";
import TableEditor from "./TableEditor";
export default {
  name: "DraggableResizableEditorItem",
  props: {},
  watch: {},
  components: {
    Dialog,
    EditorPanel,
    TableEditor
  },
  data() {
    return {
      input: "firstTable",
      detail: ["Aaa", "Brereerrere", "Crererereerr"],
      isOpen: false,
    };
  },
  created() {
    mution.initTables(this.$store.state.tableList.tables);
    let list=this.$store.state.tableList.tables.filter((t,index)=>{
         return  index<2 && !!t;
    });
    list.forEach(t=>{
      mution.SelectedTable(t);
    });
  },
  mounted() {},
  computed: {
      selectedTables(){
          return store.SelectedTables;
      }
  },
  methods: {
    headerChange(val) {
      console.log("标题变化了" + val);
    },
    detailCheckedChanged(val) {
      console.log(val);
    },
    openDialog() {
      this.isOpen = true;
    },
    onChange(val) {
      console.log("捕捉" + val);
    },
  },
};
</script>
<style lang="scss" scope>
</style>
<template>
<div class="editor">
  <el-row>
  <el-col>
      <div class='my'>
       <ColumnList></ColumnList>
      </div>
  </el-col>
  </el-row>
  <el-row>
   <DrapResize :x="200" :y="50" :minw="150" :minh="100" :w="300" :h="200">
        <Header  :header-name="input" @on-change="onChange" @header-change="headerChange"></Header>
        <Body :details="detail" @detail-checked-changed="detailCheckedChanged"></Body>
    </DrapResize> 
  </el-row>
  <el-row>
   <el-button type="primary" @click="openDialog">打开弹窗</el-button> 
    <Dialog v-model="isOpen"></Dialog>
  </el-row>
    
</div>
</template>

<script>
import Header from './EditorItemHeader';
import Body from './EditorItemBody';
import DrapResize from './DragResize';
import Dialog from './Dialog';
import ColumnList from './ColumnList';
import {mution} from './SharedModel';
export default {
    name: "DraggableResizableEditorItem",
    props: {

    },
    watch:{
     
    },
    components: {
        Header,
        Body,
        DrapResize,
        Dialog,
        ColumnList
    },
    data() {
        return {
            input: "firstTable",
            detail: ["Aaa", "Brereerrere", "Crererereerr"],
            isOpen:false
        };
    },
    mounted(){
      mution.initTables(this.$store.state.tableList.tables);
    },
    computed:{

    },
    methods: {
        headerChange(val) {
            console.log("标题变化了" + val);
        },
        detailCheckedChanged(val) {
            console.log(val);
        },
        openDialog(){
            this.isOpen=true;
        },
        onChange(val){
            console.log("捕捉"+val);
        }
    }
};
</script>
<style lang="scss" scope>

</style>
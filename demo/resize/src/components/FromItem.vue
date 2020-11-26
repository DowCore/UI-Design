<template>
  <div class="fi">
    <div v-show="!!name">
      <a class="fi-item fi-content" @click="onEdifitem">{{ name }}</a>
      <a class="fi-content fi-alias fi-spacing-col-lg" @click="onEditAlias"
        >{{ aliasValue }}</a
      >
    </div>
    <div class="fi-icon-add fi-spacing-col-lg">
      <i class="el-icon-plus" @click="onAddRow"></i>
    </div>
    <div class="fi-hidden fi-icon-right">
      <i class="el-icon-close" @click="onDelete"></i>
    </div>
    <el-dialog
      class="fi-alias-dialog"
      :visible="aliasEditorVisible"
      width="360px"
      height="50px"
      @opened="$refs.aliasInput.focus()"
    >
      <el-input
        v-model="input"
        ref="aliasInput"
        @blur="onAliasInputBlur"
        @keyup.enter.native="onEnterKeyUp"
      ></el-input>
    </el-dialog>
    <el-dialog
      class="fi-alias-dialog"
      :visible.sync="isOpen"
      width="80%"
      :destroy-on-close="true"
      :before-close="
        () => {
          isOpen = false;
        }
      "
    >
      <ExpandableList
        :is-expand-all="true"
        :item-datas="itemData"
        @on-select="onSelect"
      >
      </ExpandableList>
    </el-dialog>
  </div>
</template>
<script>
import ExpandableList from "./ExpandableList";
import { mution} from "./SharedModel";
export default {
  props: {
    name: {
      type: String,
    },
    uid: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
    },
  },
  data() {
    return {
      aliasEditorVisible: false,
      input: "",
      isOpen: false,
      isAdd:false,
      itemData:[]
    };
  },
  computed: {
    aliasValue(){
      return this.alias? `(${this.alias})`: '<别名>';
    }
  },
  components: {
    ExpandableList,
  },
  mounted() {
   
  },
  methods: {
    onEditAlias() {
      this.aliasEditorVisible = true;
      this.input = this.alias;
    },
    onEnterKeyUp() {
      this.aliasEditorVisible = false;
      mution.UpdateTableAlias(this.uid, this.input);
    },
    onAliasInputBlur() {
       this.aliasEditorVisible = false;
    },
    onDelete() {
      mution.DeleteRow(this.uid);
    },
    onEdifitem() {
      this.isOpen = true;
    },
    onAddRow(){
      this.isAdd=true;
      this.isOpen = true;
    },
    onSelect(val) {
      if(this.isAdd){
        mution.AddRowByNode(val.parenfid,val.node);
      }
      else{
        //
      }
      this.isOpen = false;
    },
  },
};
</script>
<style lang="scss">
.fi {
  display: flex;
  &:hover {
    background-color: #2b85e4;
    .fi-icon-right {
      display: block;
      color: #fff;
    }
  }
  &-content {
    cursor: pointer;
  }
  &-hidden {
    display: none;
  }
  &-spacing-row {
    margin-left: 1.8rem;
  }
  &-spacing-col-sm {
    margin-left: 0.3rem;
  }
  &-spacing-col-lg {
    margin-left: 0.8rem;
  }
  &-alias {
    color: #808695;
  }
  &-icon-add {
    background-color: #808695;
    display: none;
    cursor: pointer;
  }
  &-icon-right {
    margin-left: auto;
    cursor: pointer;
  }
  &-alias-dialog {
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }
  }
}
</style>
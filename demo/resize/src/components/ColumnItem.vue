<template>
  <div class="ti">
    <div v-show="!!itemValue">
      <a class="ti-item ti-content" @click="onEditItem">{{ itemValue }}</a>
      <a class="ti-content ti-alias ti-spacing-col-lg" @click="onEditAlias"
        >&lt;{{ aliasValue }}&gt;</a
      >
    </div>
    <div class="ti-icon-add ti-spacing-col-lg">
      <i class="el-icon-plus" @click="onAddRow"></i>
    </div>
    <div class="ti-hidden ti-icon-right">
      <i class="el-icon-close" @click="onDelete"></i>
    </div>
    <el-dialog
      class="ti-alias-dialog"
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
      class="ti-alias-dialog"
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
        :checked-item="itemValue"
        :item-datas="itemData"
        @on-select="onSelect"
      >
      </ExpandableList>
    </el-dialog>
  </div>
</template>
<script>
import ExpandableList from "./ExpandableList";
import { store, mution } from "./SharedModel";
export default {
  props: {
    item: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
      default: "别名",
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      itemValue: this.item,
      aliasValue: this.alias,
      aliasEditorVisible: false,
      input: "",
      isOpen: false,
    };
  },
  computed: {
    itemData() {
      return store.AllTables;
    },
  },
  components: {
    ExpandableList,
  },
  mounted() {},
  methods: {
    onEditAlias() {
      this.aliasEditorVisible = true;
      this.input = "";
    },
    onEnterKeyUp() {
      this.aliasEditorVisible = false;
      this.aliasValue = this.input || this.aliasValue;
      mution.UpdateTableName(this.id, this.aliasValue);
    },
    onAliasInputBlur() {
       this.aliasEditorVisible = false;
    },
    onDelete() {
      mution.DeleteRow(this.id);
    },
    onEditItem() {
      this.isOpen = true;
    },
    onAddRow(){
      this.isOpen = true;
    },
    onSelect(val) {
      this.itemValue = val.name;
      mution.AddRow({ id: val.id, name: val.name });
      this.isOpen = false;
    },
  },
};
</script>
<style lang="scss">
.ti {
  display: flex;
  &:hover {
    background-color: #2b85e4;
    .ti-icon-right {
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
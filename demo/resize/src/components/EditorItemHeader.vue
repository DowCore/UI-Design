<template>
  <div class="editor-item-header">
    <div v-show="!isEdit" @click="onClick">
      {{ displayName }}
    </div>
    <div v-show="isEdit">
      <el-input
        v-model="input"
        ref="edit_input"
        @blur="onBlur"
        placeholder="编辑别名"
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditorHeader",
  props: {
    name: {
      type: String,
      required: true,
    },
    alias:{
       type: String
    }
  },
  data() {
    return {
      isEdit: false,
      clickTimes: 0,
      timer: "",
      input:''
    };
  },
  mounted() {
    
  },
  beforeDestroy() {
    /*
     *** 清理掉定时器，变量也要清理
     */
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = null;
  },
  computed:{
    displayName(){
      return !this.alias ?  this.name: `${this.name}(${this.alias})`;
    }
  },
  watch: {
    isEdit(val) {
      if(!val){
       this.$emit("change-alias", this.input);
      }
    }
  },
  methods: {
    onClick() {
      /*
       *** 通过在有限的时间内多次点击实现双击效果
       */
      this.clickTimes++;
      if (this.clickTimes === 2) {
        this.clickTimes = 0;
        this.isEdit = true;
        //立即获得焦点
        this.$nextTick(() => {
          this.input= this.alias;
          this.$refs.edit_input.focus();
        });
      }
      this.timer = setTimeout(() => {
        if (this.clickTimes === 1) {
          this.clickTimes = 0;
        }
      }, 500);
    },
    onBlur() {
      this.isEdit = false;
    }
  },
};
</script>

<style scoped>
.editor-item-header {
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;

  text-align: justify;
  background: #000;
  margin: 0 auto;
  color: #fff;
  height: 2rem;
  cursor: pointer;
}
</style>
<style>
.el-input .el-input__inner {
  width: 100%;
  height: 1.8rem;
}
</style>

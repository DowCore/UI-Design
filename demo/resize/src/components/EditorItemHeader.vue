<template>
<div class="editor-item-header">
    <div v-if="!isEdit" @click="onClick">
        {{ displayName }}
    </div>
    <div v-if="isEdit">
        <el-input v-model="input"  @blur="onBlur" placeholder="请输入内容"></el-input>
    </div>
</div>
</template>

<script>
export default {
    name: "EditorHeader",
    props: {
        headerName: {
            type: String,
            default: "table",
        },
    },
    data() {
        return {
            isEdit: false,
            clickTimes: 0,
            timer: "",
            input: '',
            displayName: ''
        };
    },
    mounted() {
        this.displayName = this.headerName;
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
    watch: {
        isEdit(val) {
            if (val) {
                this.input = this.displayName;
            } else {
                this.displayName = this.input || this.headerName;
                this.$emit("header-change", this.displayName);
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
}
</style>
<style>
.el-input .el-input__inner {
  width:100%;
  height: 1.8rem;
}
</style>

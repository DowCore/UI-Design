<template>
<div class="editor-item-body">
    <div v-for="(item) in details" :key="item">
        <el-checkbox :label="item" @change="onChange"></el-checkbox>
    </div>
</div>
</template>

<script>
export default {
    name: "EditorItemBody",
    props: {
        details: {
            type: Array,
        },
    },
    data() {
        return {
            checkList: []
        };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    watch: {

    },
    methods: {
        onChange(val, el) {
            let set = new Set(this.checkList);
            let itemName = el.currentTarget.defaultValue;
            if (val) {
                set.add(itemName);
            } else {
                if (set.has(itemName)) {
                    set.delete(itemName);
                }
            }
            this.checkList = Array.from(set);
            this.$emit("detail-checked-changed", this.checkList);
        }
    },
};
</script>

<style scoped>
.editor-item-body {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
}

.editor-item-body>div {
    width: 100%;
    height: 1.5rem;
    border: 1px solid black;
    line-height: 1rem;
    margin: 0px 0px -1px -1px;
    text-align: left;
    padding-left: 0.5rem;
}
</style>

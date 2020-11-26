<template>
  <div class="editor-item-body">
    <div v-for="item in details" :key="item.id">
      <el-checkbox :label="item.name" v-model="item.isChecked" @change="onChange"></el-checkbox>
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
  mounted() {
    
  },
  beforeDestroy() {},
  watch: {},
  methods: {
    onChange(val, el) {
      let itemName = el.currentTarget.defaultValue;
      let item = this.details.find((t) => {
        return t.name === itemName;
      });
      this.$emit("checked-changed", val, item);
    },
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

.editor-item-body > div {
  width: 100%;
  height: 1.5rem;
  border: 1px solid black;
  line-height: 1rem;
  margin: 0px 0px -1px -1px;
  text-align: left;
  padding-left: 0.5rem;
  margin-left: 1px;
}
</style>

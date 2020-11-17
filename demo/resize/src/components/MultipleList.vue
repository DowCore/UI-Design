<template>
  <div>
    <div class="wrapper">
      <ul class="wrapper-ul-first">
        <li
          class="wrapper-li-first"
          v-for="item in itemDatas"
          :key="item.id"
          @click="checkedItem(item)"
        >
          <div
            class="wrapper-item-first"
            :class="item.isChecked ? 'wrapper-item-active' : ''"
          >
            <div style="width: 1.5rem">
              <i
                v-show="isHasChild(item)"
                @click.stop="onExpand(item)"
                :class="
                  item.isExpand ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
                "
              ></i>
            </div>
            <div class="wrapper-item-first-icon">
              <slot name="firstIcon">
                <i class="el-icon-postcard"></i>
              </slot>
            </div>
            <div class="item-name">{{ item.name }}</div>
          </div>
          <ul class="wrapper-ul-second" v-show="item.isExpand">
            <li
              v-for="second in item.child"
              :key="second.id"
              @click.stop="checkedItem(second)"
            >
              <div
                class="wrapper-item-second"
                :class="second.isChecked ? 'wrapper-item-active' : ''"
              >
                <div class="wrapper-item-first-icon">
                  <slot name="secondIcon">
                    <i class="el-icon-postcard"></i>
                  </slot>
                </div>
                <div class="item-name">{{ second.name }}</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "component-multiple-list",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    isExpandAll: {
      type: Boolean,
      default: true,
    },
    itemDatas: {
      type: Array,
      validator: function (t) {
        return !t || (Object.keys(t[0]).indexOf('id')>-1&& Object.keys(t[0]).indexOf('name')>-1)
      },
      required: true
    },
    checkedId: [String, Array],
    isMultiple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconExpand: function () {
      return "el-icon-arrow-down";
    },
  },
  data() {
    return {
      virtualTree: [],
    };
  },
  mounted() {
    this.initExpand();
    this.bulidVirtualTree();
    this.initChecked();
  },
  methods: {
    isHasChild(item) {
      return item.child && item.child.length > 0;
    },
    onExpand(item) {
      let findIndex = this.itemDatas.findIndex((t) => {
        return t.id === item.id;
      });
      if (findIndex > -1) {
        this.itemDatas[findIndex].isExpand = !this.itemDatas[findIndex]
          .isExpand;
      }
    },
    checkedItem(item) {
      //单选
      if (!this.isMultiple) {
        this.virtualTree.forEach((s) => {
          if (s.node.isChecked) {
            s.node.isChecked = false;
          }
        });
      }
      let findIndex = this.virtualTree.findIndex((t) => {
        return t.id === item.id;
      });
      if (findIndex > -1) {
        this.$set(this.virtualTree[findIndex].node, "isChecked", true);
        this.$emit("on-select", { ...item });
      }
    },
    bulidVirtualTree() {
      //将数据转换成一维结构
      this.itemDatas.forEach((t) => {
        this.virtualTree.push({ id: t.id, node: t });
        if (t.child && t.child.length > 0) {
          t.child.forEach((s) => {
            this.virtualTree.push({ id: s.id, parentId: t.id, node: s });
          });
        }
      });
    },
    initExpand() {
      if (this.isExpandAll) {
        this.itemDatas.forEach((t) => {
          this.$set(t, "isExpand", true);
        });
      } else {
        this.itemDatas.forEach((t) => {
          this.$set(t, "isExpand", false);
        });
        let firstIndex = this.itemDatas.find((t) => {
          return t.child && t.child.length > 0;
        });
        if (firstIndex > -1) {
          this.itemDatas[firstIndex].isExpand = true;
        }
      }
    },
    initChecked() {
      if (Array.isArray(this.checkedId)) {
        this.checkedId.forEach((t) => {
          let findIndex = this.virtualTree.findIndex((tn) => {
            return tn.id == t;
          });
          if (findIndex > -1) {
            this.$set(this.virtualTree[findIndex].node, "isChecked", true);
          }
        });
      } else {
        let findIndex = this.virtualTree.findIndex((tn) => {
          return tn.id == this.checkedId;
        });
        if (findIndex > -1) {
          this.$set(this.virtualTree[findIndex].node, "isChecked", true);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 1.5rem;
  &-item-first {
    display: flex;
    &-icon {
      margin-left: 0.1em;
      margin-right: 0.3em;
    }
    &:hover {
      background-color: #5cadff;
      color: white;
    }
  }
  &-item-active {
    background-color: #2b85e4;
    color: white;
  }
  &-item-second {
    display: flex;
    padding-left: 0.8em;
    &:hover {
      background-color: #5cadff;
      color: white;
    }
  }
}
ul,
li {
  list-style: none;
}
</style>

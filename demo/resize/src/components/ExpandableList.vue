<template>
  <div>
    <div class="exl">
      <ul>
        <li v-for="item in itemDatas" :key="item.id" @click="checkedItem(item)">
          <div class="exl-content" :class="item.isChecked ? 'exl-active' : ''">
            <div class="exl-content-expand">
              <i
                v-show="isHasChild(item)"
                @click.stop="onExpand(item)"
                :class="
                  item.isExpand ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
                "
              ></i>
            </div>
            <div class="exl-content-icon exl-spacing-col-sm">
              <slot name="main-icon">
                <i :class="mainIconClass"></i>
              </slot>
            </div>
            <div class="exl-content-main exl-spacing-col-lg">
              <slot :main-data="item">
                {{ item.name }}
              </slot>
            </div>
            <div class="exl-content-main-right">
              <slot name="main-right"></slot>
            </div>
          </div>
          <ul v-show="item.isExpand">
            <li
              v-for="sub in item.child"
              :key="sub.id"
              @click.stop="checkedItem(sub)"
            >
              <div
                class="exl-content exl-spacing-row"
                :class="sub.isChecked ? 'exl-active' : ''"
              >
                <div class="exl-content-icon">
                  <slot name="sub-content">
                    <i :class="subIconClass"></i>
                  </slot>
                </div>
                <div class="exl-content-sub exl-spacing-col-lg">
                  {{ sub.name }}
                </div>
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
    mainIconClass: {
      type: String,
      default: "el-icon-postcard",
    },
    subIconClass: {
      type: String,
      default: "el-icon-postcard",
    },
    isExpandAll: {
      type: Boolean,
      default: true,
    },
    itemDatas: {
      type: Array,
      validator: function (t) {
        return (
          !t ||
          t.length == 0 ||
          (Object.keys(t[0]).indexOf("id") > -1 &&
            Object.keys(t[0]).indexOf("name") > -1)
        );
      },
      required: true,
    },
    checkedId: [String, Array],
    isMultiple: {
      type: Boolean,
      default: false,
    },
    expandIds: [String, Array],
  },
  computed: {},
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
        this.$emit("on-select", this.virtualTree[findIndex]);
      }
    },
    bulidVirtualTree() {
      //将数据转换成一维结构
      this.itemDatas.forEach((t) => {
        this.virtualTree.push({ id: t.id, node: t });
        if (t.child && t.child.length > 0) {
          t.child.forEach((s) => {
            this.virtualTree.push({ id: s.id, parentId: t.uid, node: s });
          });
        }
      });
    },
    initExpand() {
      if (!this.isExpandAll) {
        this.itemDatas.forEach((t) => {
           t.isExpand=false;
        });
        if (this.expandIds) {
          if (Array.isArray(this.expandIds)) {
            this.expandIds.forEach((t) => {
              let findIndex = this.itemDatas.findIndex((item) => {
                return item.id == t && t.child && t.child.length > 0;
              });
              if (findIndex > -1) {
                this.itemDatas[findIndex].isExpand = true;
              }
            });
          } else {
            let findIndex = this.itemDatas.findIndex((t) => {
              return t.id == this.expandIds && t.child && t.child.length > 0;
            });
            if (findIndex > -1) {
              this.itemDatas[findIndex].isExpand = true;
            }
          }
        } else {
          let firstIndex = this.itemDatas.findIndex((t) => {
            return t.child && t.child.length > 0;
          });
          if (firstIndex > -1) {
            this.itemDatas[firstIndex].isExpand = true;
          }
        }
      }
    },
    initChecked() {
      if (this.checkedId) {
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
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin font {
  font-size: 1.5rem;
}
.exl {
  /* Box-model */
  width: 100%;
  height: 100%;
  overflow: auto;
  @include font;

  &-content {
    display: flex;
    &:hover {
      background-color: #5cadff;
      color: white;
    }
    &-expand {
      width: 1.6rem;
      cursor: pointer;
    }
    &-main-right {
      margin-left: auto;
    }
  }
  &-active {
    background-color: #2b85e4;
    color: white;
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
}
ul,
li {
  list-style: none;
}
</style>

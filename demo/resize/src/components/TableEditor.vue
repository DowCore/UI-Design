<template>
  <div class="table-editor">
    <DragResize v-bind="resizor">
      <ItemHeader
        :name="name"
        :alias="alias"
        @change-alias="onChangedAlias"
      ></ItemHeader>
      <ItemBody
        :details="recolumns"
        @checked-changed="onCheckedChanged"
      ></ItemBody>
    </DragResize>
  </div>
</template>
<script>
import DragResize from "./DragResize";
import ItemHeader from "./EditorItemHeader";
import ItemBody from "./EditorItemBody";
import { mution } from "./SharedModel";
export default {
  name: "table-editor",
  props: {
    resizor: {
      type: Object,
      default() {
        return {
          stickSize: 10,
          w: 150,
          h: 300,
          x: 10,
          y: 5,
        };
      },
    },
    id: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  components: {
    DragResize,
    ItemHeader,
    ItemBody,
  },
  computed: {
    recolumns() {
      return this.columns;
    },
  },
  methods: {
    onCheckedChanged(isCheck, node) {
      if (isCheck) {
        mution.AddRowByNode(this.uid, node);
      } else {
        mution.DeleteRow(node.id);
      }
    },
    onChangedAlias(alias) {
      mution.UpdateTableAlias(this.uid, alias);
    },
  },
};
</script>
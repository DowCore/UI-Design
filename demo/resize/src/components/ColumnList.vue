<template>
  <div class="cl">
      <ColumnItem v-for="item in dataList" :id="item.uid" :alias="item.alias" :name="item.name" :parent-name="item.parentName" :parent-alias="item.parentAlias" :key="item.uid"></ColumnItem>
  </div>
</template>

<script>
import ColumnItem from "./ColumnItem";
import {store} from './SharedModel'
export default {
  name: "ColumnList",
  props: {},
  data() {
    return {
      
    };
  },
  mounted() {
     
  },
  beforeDestroy() {},
  components: {
    ColumnItem
  },
  computed: {
     dataList(){
        return store.SelectedRows || [{uid:"null001",name:''}];
     }
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss">
.ti:last-child{
   .ti-icon-add{
       display: block;
   }
 }
 .ti:only-child{
    .ti-icon-right{
        display: none;
    }
 }
</style>

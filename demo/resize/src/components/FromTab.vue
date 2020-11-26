<template>
  <div class="from-tab ft">
     <FromItem v-for="item in selectTables" :key="item.id" v-bind="item"></FromItem>
  </div>
</template>
<script>
import { store } from "./SharedModel";
import FromItem from './FromItem';
export default {
  components:{
     FromItem
  },
  computed: {
    selectTables() {
      return store.SelectedTablesWithRelation;
    },
  },
  methods: {
    
  },
};
</script>
<style lang="scss">
 .fi:last-child{
   .fi-icon-add{
       display: block;
   }
 }
 .fi:only-child{
    .fi-icon-right{
        display: none;
    }
 }
</style>
<template>
  <div class="limit-tab">
    <el-row>
      <el-col>
        偏移量：<a>{{ offsetDisplay}}</a>
       </el-col>
    </el-row>
     <el-row>
      <el-col>
         限制：<a>{{ limitDisplay}}</a>
       </el-col>
    </el-row>
  </div>
</template>
<script>
import { store } from './SharedModel';
export default {
    data(){
      return {
          
      }
    },
    computed:{
        offsetDisplay(){
            return store.Limit.offset || '<指定跳过N条记录>';
        },
        limitDisplay(){
            return store.Limit.limit || '<指定跳过N条记录>';
        }
    }
}
</script>
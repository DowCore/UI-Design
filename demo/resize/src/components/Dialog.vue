<template>
  <div class="dialog-component">
    <el-dialog
      :visible.sync="isOpen"
      width="80%"
      :before-close="handleClose"
    >
    <MultipleList :checked-id="['eere123','34333444']" :item-datas="itemData" @on-select="onSelect">
    <template #firstIcon>
      <i class="el-icon-share" ></i>
    </template>
    </MultipleList>
    </el-dialog>
  </div>
</template>
<script>
import MultipleList from './MultipleList';
export default {
  name: "component-dialog-tree",
  model: {
      prop:'isOpen',
      event:'change'
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    isExpandAll:{
      type: Boolean,
      default: true,
    }
  },
  data(){
    return {
        itemData:[
            {id:123,name:'asdssd',child:[{id:'e123',name:'asdssd'},{id:'er123',name:'asdsrsd'}]},
            {id:343,name:'asdss44d',child:[]},
             {id:12343,name:'as43dssd',child:[]},
            {id:34334,name:'asdss434434d',child:[]},
            {id:1233223,name:'asdssd',child:[{id:'eere123',name:'asdssd'},{id:'ererre123',name:'asdsrsd'}]},
            {id:33343,name:'asdss44d',child:[]},
             {id:124344343,name:'as43dssd',child:[]},
            {id:'34333444',name:'asdss434434d',child:[]}
        ]
    }
  },
  components:{
      MultipleList
  },
  methods:{
     handleClose(){
        this.$emit('change',false);
     },
     onSelect(node){
       console.log(node);
     }
  }
};
</script>

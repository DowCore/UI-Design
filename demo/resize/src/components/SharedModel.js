import vue from "vue";
import _ from 'lodash';
export const store = vue.observable({
  AllTables: [],
  SelectedTables: [],
  SelectedRows: "",
  Limit:{
    offset:'',
    limit:''
  },

});
export const Bus = new vue();
export const mution = {
  initTables(tables) {
    store.AllTables = tables;
  },
  SelectedTable(table) {
    //深拷贝，并增加别名,uid
    let copy = JSON.parse(JSON.stringify(table));
    let model = {
      ...copy,
      alias: "",
      uid: `table_${_.uniqueId()}`,
    };
    //增加新的属性
    if(model.child){
        model.child.forEach(t=>{
            t.isCkecked=false;
        });
    }
    store.SelectedTables.push(model);
  },
  UpdateTableAlias(uid, newName) {
    let model = store.SelectedTables.find((t) => {
      return t.uid === uid;
    });
    if (model) {
      model.alias= newName;
    }
    Bus.$emit("on-table-alias-change",{uid,alias:newName});
    //对所有的选中行进行更改
    if(!store.SelectedRows) return;
    let rows= store.SelectedRows.filter(t=>{
        return t.parentId=== uid;
    });
    rows.forEach(t=>{
      t.parentAlias= newName;
    });
  },
  UpdateRowAlias(uid,alias){
     let row= store.SelectedRows.find(t=>{
       return t.uid===uid;
     });
     if(row){
       row.alias=alias;
     }
  },
  SetSelectRows(tableId, selectedRows) {
    let table = store.SelectedTables.find((t) => {
      return t.id === tableId;
    });
    if (table) {
      selectedRows.forEach((t) => {
        t.isCkecked = true;
      });
    }
  },
  AddRowByNode(parentUId,node) {
    let table= store.SelectedTables.find(t=>{
        return t.uid===parentUId;
    });
    if(!table) return;
    let row = { ...node,parentId:parentUId, parentAlias:table.alias, parentName:table.name, uid:`Row_${_.uniqueId()}` };
    this.AddRow(row);
  },
  AddRow(row) {
    store.SelectedRows = store.SelectedRows || [];
    let findIndex = store.SelectedRows.findIndex((t) => {
      return t.uid === row.uid;
    });
    if (findIndex < 0) {
      store.SelectedRows.push(row);
    }
  },
  DeleteRow(id) {
    if (!store.SelectedRows) return;
    let findIndex = store.SelectedRows.findIndex((t) => {
      return t.id === id;
    });
    if (findIndex > -1) {
      store.SelectedRows.splice(findIndex, 1);
    }
    if (store.SelectedRows.length == 0) {
      store.SelectedRows = "";
    }
  },
};

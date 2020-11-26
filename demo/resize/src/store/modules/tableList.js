const state = {
  tables: [{
     name:"User",
     id:"user",
     child:[
         {id:'user.id',name:"Id"},
         {id:"user.name",name:'Name'}
     ]
  },{
    name:"Service",
    id:"service",
    child:[
        {id:'service.id',name:"Id"},
        {id:"service.name",name:'Name'}
    ]
  },{
    name:"Mydb",
    id:"mydb",
    child:[
        {id:'mydb.table',name:"Table"},
        {id:"mydb.view",name:'View'}
    ]
  }],
  currentTables: [],
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

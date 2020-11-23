const state = {
  tables: [{
     name:"User.",
     id:"user",
     child:[
         {id:'id',name:"Id"},
         {id:"name",name:'Name'}
     ]
  },{
    name:"Service.",
    id:"service",
    child:[
        {id:'id',name:"Id"},
        {id:"name",name:'Name'}
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

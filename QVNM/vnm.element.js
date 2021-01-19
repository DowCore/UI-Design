class Element {
    constructor() {
      this.events = new PubSub();
      let value='';
      this.model={};
      this.children=[];
      this.watchers={};
      this.bindModel= function(mValue){
        Object.defineProperty(this.model,mValue,{
          set:(val)=>{
            if(value !== val){
              this.watchers[mValue] && this.watchers[mValue].notify(val,value);
            }
            value=val;
          }
        })
      }
    }
    SetAttributes(attrs) {
      if (Array.isArray(attrs)) {
          attrs.forEach((item) => {
              this.node.attr(item[0], item[1]);
            });
      } else {
         throw new Error("参数类型不对")
      }
    }
    SetStyles(styles){
        
    }
    AddEvent(property,event,target){
      
    }
    Watch(property,event,target){
      this.watchers[property]=  this.watchers[property] || new Subject();
      this.watchers[property].add({property, event, target});
    }
  }
  class Component extends Element {
    constructor(el, config) {
      super();
      if (typeof el === "string") {
        this.node = $(el);
      } else {
        this.node = el;
      }
      this.bindModel(config.model);
    }
    AddNode(type,config){
       let constructor = plugin.plugin.find(item=>{return item.type===type}).constructor;
       let _node= new constructor(config);
       _node.appendTo(this.node);
       this.children.push({key:config.key, node:_node});
    }
    SetNodeValue(key,value){
        let node= this.children.find(item => { return item.key===key}).node;
        node.setValue(value);
    }
  }
  class Range extends Component{
    constructor(el,config){
      super(el,config);
    }
    Render=()=>{ 
       $(this.node).append("<input></input");
       $(this.node).append("<button>点击我</button");
       $(this.node).children('input').on('change',(target)=>{
         this.events.publish("input:change",target);
       });
       $(this.node).children('button').on('click',(target)=>{
        this.events.publish("button:click",target);
      });
    }
  }
  class Plugin{
    constructor(){
      this.plugin=[];
    }
    register(key,constructor){
      this.plugin.push({type:key , constructor:constructor});
    }
  }

  function Input(parent){
      this.html=function(){
          return '<input></input';
      }
      this.el= $('<div/>',{html:this.html()});
      this.appendTo= function(parent){
          $(parent).append(this.el);
      }

      this.setValue=function(val){
          $(this.el).children('input').val(val);
      }
  }

  //通过 先设置元素dispaly:none，添加所有元素后再显示
  function Subject(){
    this.observers = [];
  }
   
  Subject.prototype = {
    add:function(observer){  // 添加
      this.observers.push(observer);
    },
    remove:function(observer){  // 删除
      var observers = this.observers;
      for(var i = 0;i < observers.length;i++){
        if(observers[i] === observer){
          observers.splice(i,1);
        }
      }
    },
    notify:function(){  // 通知
      var observers = this.observers;
      for(var i = 0;i < observers.length;i++){
        let arg = arguments;
        observers[i].event.apply(this.observers.target || this, arg);
      }
    }
  }
  function PubSub() {
    this.list={},
    this.subscribe=function(key,fn){  // 订阅
      if (!this.list[key]) {
        this.list[key] = [];
      }
      this.list[key].push(fn);
    },
    this.publish=function(){  // 发布
      let arg = arguments;
      let key = [].shift.call(arg);
      let fns = this.list[key];
   
      if(!fns || fns.length<=0) return false;
   
      for(var i=0,len=fns.length;i<len;i++){
        fns[i].apply(this, arg);
      }
   
    },
    this.unSubscribe=function(key) {  // 取消订阅
      delete this.list[key];
    }
  };
  

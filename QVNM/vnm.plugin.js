var plugin = new Plugin();
    plugin.register('input',Input);
    var page = new Component("#app", { model: "value" });
    page.SetAttributes([["title", "我的应用"]]);
    page.Watch("value", function (val, old) {
      alert(val);
    });
    page.model.value = "123";
    page.AddNode('input',{key:'234'});
    page.SetNodeValue('234',567);

    var range= new Range('#test',[]);
    range.events.subscribe("input:change",function(target){
          $("#input").html(`上面的文本内容变成了这样${$(target.currentTarget).val()}`);
    });
    let count=0;
    range.events.subscribe("button:click",function(target){
         count++;
         $("#button").html(`上面那个按钮被点击了${count}次`);
    });
    range.Render();
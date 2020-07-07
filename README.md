# vList

|  初始化字段   | 数据类型  | 说明  |
|  ----  | ----  | ---- |
| itemHeight  | Number | 每项高度  |
| container | DOM | 滚动容器  |
| containerContent  | DOM | 滚动内容  |
| maxHeight | Number | 不撑起滚动条的最大高度  |
| initData  | Array | 加载的数据  |
| render  | FUNCTION | 渲染item的具体函数。参数为itemData和索引值，希望在此处能够挂载某个flag标识，即可如实反映勾选/非勾选状态。  |
| itemEventHandlers | Array | item内的时间处理函数，支持class绑定。  |

使用示例

```js
const vlist = new Vlist({
    itemHeight: 65,
    container: document.querySelector("#list"),
    containerContent:document.querySelector('.ul'),
    maxHeight: document.documentElement.clientHeight,
    isDebounce:true,
    initData: data,
    render: function (itemData, index) {
        return `<div class="item">
                    <div data-index="${index}" class="left">
                    </div>
                    <div class="right">
                        <div class="title">${itemData.id}</div>
                        <div class="price">${itemData.name}</div>
                        <div class="price">${itemData.address}</div>
                    </div>
                </div>`
    },
    itemEventHandlers:[
        {
            eventTargetClass:'left',
            eventType:'click',
            handler:function(e){
                console.log(e.target)
            }
        }
    ]
});
```

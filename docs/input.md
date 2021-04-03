---
title: Input
---

# Input

```js
    import { Input } from 'zhu-vue-ui';
    Vue.component("Input", Input);
```

支持双向数据绑定
```vue
    <template>
        <Input @model="inputValue"/>
    </template>
    <script>
        export default {
            data(){
                return {
                    inputValue: ""
                }
            }
        }
    </script>
```

### props
| props   | 说明  | 类型 | 默认 |
| --      | ---  | --  | --   |
|readonly |是否只读。                                           | boolean |false    |
|disabled |是否被禁用。                                         | boolean | false   |
|type     |定义类型。可选值:text/password                        | string  | text    |
|suffix   |添加后缀字符                                         | string  | 无       |
|lineType |定义边框线样式。可选值:default/single_line(下划线输入框) | string  | default |
|autocomplete   |是否启用自动完成                                         | string  | 无 |

### events
| event         | 说明       | 类型       | 默认 |
| --            | ---       | --        | --   |
|suffixClick    |后缀点击事件   |Function   | 无    |
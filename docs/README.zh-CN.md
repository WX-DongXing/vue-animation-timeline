<h1 align="center">Vue Animation Timeline</h1>

<div align="center">

一个基于时间轴的动画编辑器。

![github][github] ![npm][npm] ![support][support] ![jetBrains][jetBrains]

![preview](./preview.gif)

[github]:https://img.shields.io/github/license/WX-DongXing/vue-animation-timeline?style=flat&logo=github
[npm]:https://img.shields.io/npm/v/vue-animation-timeline?style=flat&logo=npm
[support]:https://img.shields.io/badge/support-2%263-%234FC08D?style=flat&logo=Vue.js
[jetBrains]:https://img.shields.io/badge/thanks-JetBrains-%23000?style=flat&logo=jetBrains
</div>

[English](./README.md) | 简体中文

## ✨ 特性

- 🚀 基于时间轴的可视化元素动画配置
- 💫 支持 CSS Transform 动画属性
- ✅ 兼容 vue2.x 以及 vue3


## 📦 安装

##### vue2.x
```bash
yarn add vue-animation-timeline
```

##### vue3
```bash
yarn add vue-animation-timeline@next
```

## 🧐 使用

##### vue2.x

```javascript
import Vue from 'vue';
import VueAnimationTimeline from 'vue-animation-timeline';

Vue.use(VueAnimationTimeline)
```

##### vue3

```javascript
import { createApp } from 'vue';
import VueAnimationTimeline from 'vue-animation-timeline';

const app = createApp({});

app.use(VueAnimationTimeline);

app.mount('#app');
```

## 💡 示例

```vue
<template>
  <main>
    <section class="widgets">
      <div
          class="widget"
          v-for="widget in widgets"
          :key="widget.id"
          v-animation="widget"
      >
        {{ widget.name }}
      </div>
    </section>
    
    <animation-timeline :widgets="widgets" :fields="fields" @onUpdate="handleUpdate" />
  </main>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  // vue2.x
  data () {
    return {
      widgets: [
        { id: 1, name: 'A', y: 32, x: 72, width: 84, height: 84 },
      ],
      fields: {
        name: 'name',
        width: 'width',
        height: 'height',
        top: 'y',
        left: 'x',
      }
    }
  },
  methods: {
    handleUpdate(widgets) {
      this.widgets = widgets;
    },
  },
  // vue3
  setup() {
    const widgets = ref([
      { id: 1, name: 'A', y: 32, x: 72, width: 84, height: 84 },
    ]);

    const fields = reactive({
      name: 'name',
      width: 'width',
      height: 'height',
      top: 'y',
      left: 'x',
    });
    
    const handleUpdate = (widgets) => {
      widgets.value = widgets;
    };
    
    return {
      widgets,
      fields,
      handleUpdate,
    }
  },
})
</script>
<style scoped>
.widgets {
  position: relative;
}

.widget {
  position: absolute;
}
</style>
```

## 🔧 配置

### 属性
##### `widgets`: 动画元素数组
##### `fields`: 字段映射，将widgets对象中自定义字段进行映射

| 属性     | 描述                  |
|--------|---------------------|
| name   | 元素名称，默认为 'name'                |
| width  | 元素宽度字段映射，默认为 'width'     |
| height | 元素高度字段映射，默认为 'width'     |
| top    | 元素绝对定位top字段映射，默认为 'top'  |
| left   | 元素绝对定位left字段映射，默认为 'left' |

### 实例属性
##### `animate`: 动画实例对象

| 方法     | 描述                  |
|--------|---------------------|
|  play  | 执行动画               |
| pause  | 暂停动画    |
| restart | 动画重新开始执行     |
| seek    | 执行动画到具体时刻，如 animate.seek(1000): 将动画执行至1s位置  |

### 事件
##### `onUpdate`: 配置动画时更新对象，参数为已经添加动画配置的`widgets`数组

## 证书
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021 Dong Xing

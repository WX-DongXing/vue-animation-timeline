<h1 align="center">Vue Animation Timeline</h1>

<div align="center">

A visual element animation configuration editor based on timeline。

![github][github] ![npm][npm] ![support][support] ![jetBrains][jetBrains]

![preview](./docs/preview.gif)

[github]:https://img.shields.io/github/license/WX-DongXing/vue-animation-timeline?style=flat&logo=github
[npm]:https://img.shields.io/npm/v/vue-animation-timeline?style=flat&logo=npm
[support]:https://img.shields.io/badge/support-2%263-%234FC08D?style=flat&logo=Vue.js
[jetBrains]:https://img.shields.io/badge/thanks-JetBrains-%23000?style=flat&logo=jetBrains
</div>

English | [简体中文](./docs/README.zh-CN.md)

## ✨ Features

- 🚀 Visual element animation configuration based on timeline
- 💫 Support CSS Transform animation Properties
- ✅ Compatible with vue2.x and vue3


## 📦 Install

##### vue2.x
```bash
yarn add vue-animation-timeline
```

##### vue3
```bash
yarn add vue-animation-timeline@next
```

## 🧐 Usage

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

## 💡 Example

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

## 🔧 Config

### Properties
##### `widgets`: Element arrays
##### `fields`: Field mapping

| Properties     | Description                  |
|--------|---------------------|
| key    | Unique identifier                |
| name   | Name field mapping，default 'name'                |
| width  | Width field mapping，default 'width'     |
| height | Width field mapping，default 'width'     |
| top    | Absolute positioning top field mapping，default 'top'  |
| left   | Absolute positioning left field mapping，default 'left' |

### Instance Properties
##### `animate`: animate instance

| Function     | Description                  |
|--------|---------------------|
|  play  | Execute animation               |
| pause  | Pause animation    |
| restart | Restart animation     |
| seek    | Execute animation to a given time，example animate.seek(1000): execute animation to 1s  |

### Event
##### `onUpdate`: Update widgets configs，The parameter is the `widgets` array to which the animation configuration has been added

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021 Dong Xing

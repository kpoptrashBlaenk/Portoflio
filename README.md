After following normal tutorial from my vue repo:

```bash
npm install vue-router
mkdir "src/router"
```


create src/router/index.ts (change repo-name)
```typescript
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
    { path: '/repo-name/', name: 'Home', component: HomePage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
```
choose routes inside routes[] constant

Place pages in here:
```bash
mkdir "src/pages"
```

main.ts:
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
```

App.vue:
```vue
<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">

export default {
  name: 'App',
  components: {
  }
};
</script>

<style scoped>
</style>
```
HomePage.vue:
```vue
<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to my portfolio!</p>
  </div>
</template>

<script setup lang="ts">

  defineOptions({
    name: 'HomePage'
  })

</script>

<style scoped>

</style>
```

Install .env:
```bash
npm install dotenv
```
Create .env in root
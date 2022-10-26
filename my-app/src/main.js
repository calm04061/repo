// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import {createRouter, createWebHistory} from "vue-router";
import {createApp} from "vue";

const Home = {template: '<div>Home</div>'}
const About = {template: '<div>About</div>'}

// 2. 定义路由
// 每个路由应该映射一个组件。
const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = createRouter({
    // 4. 通过 createWebHashHistory() 创建 hash 模式。
    history: createWebHistory('/'),
    routes, // (缩写) 相当于 routes: routes
})
// 5. 创建和挂载根实例。
const app = createApp({})
// 记得要通过 use 配置参数注入路由，
// 从而让整个应用都有路由功能
app.use(router)

app.mount('#app')

// 现在，应用已经启动了！

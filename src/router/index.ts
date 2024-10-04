import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Parcours from '../pages/Parcours.vue'
import Projects from '../pages/Projects.vue'
import Knowledge from '../pages/Knowledge.vue'
import BTS from '../pages/BTS.vue'
import AboutMe from '../pages/AboutMe.vue'
import NotFound from '../pages/404.vue'

const routes = [
    {path: '/Portfolio-Custom/', name: 'Home', component: Home},
    {path: '/Portfolio-Custom/parcours', name: 'Parcours', component: Parcours},
    {path: '/Portfolio-Custom/projects', name: 'Projects', component: Projects},
    {path: '/Portfolio-Custom/knowledge', name: 'Knowledge', component: Knowledge},
    {path: '/Portfolio-Custom/bts', name: 'BTS', component: BTS},
    {path: '/Portfolio-Custom/aboutme', name: 'AboutMe', component: AboutMe},
    { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(''),
    routes,
})

export default router
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Parcours from '../pages/Parcours.vue'
import Projects from '../pages/Projects.vue'
import Knowledge from '../pages/Knowledge.vue'
import BTS from '../pages/BTS.vue'
import AboutMe from '../pages/AboutMe.vue'
import NotFound from '../pages/404.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/parcours', name: 'Parcours', component: Parcours},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/knowledge', name: 'Knowledge', component: Knowledge},
    {path: '/bts', name: 'BTS', component: BTS},
    {path: '/aboutme', name: 'AboutMe', component: AboutMe},
    { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(''),
    routes,
})

export default router
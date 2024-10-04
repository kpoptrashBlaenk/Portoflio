import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import $ from 'jquery'

// CSS
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/styles.css'
import './assets/styles/theme.css'

const app = createApp(App)

$(document).ready(() => {
    $('body').addClass('d-flex flex-column overflow-x-hidden overflow-y-auto')
})

app.use(router)
app.mount('#app')
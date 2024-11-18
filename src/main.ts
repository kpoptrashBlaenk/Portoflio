import { createApp } from "vue"
import App from "./App.vue"
// @ts-ignore
import $ from "jquery"

// CSS
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "./assets/styles/styles.css"
import "./assets/styles/theme.css"

const app = createApp(App)

app.mount("#app")

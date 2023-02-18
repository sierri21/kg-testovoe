import { createApp } from 'vue'
import 'src/style.css'
import App from 'src/App.vue'
import { routes } from "src/routes.js";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes,
})


createApp(App).use(router).mount('#app')

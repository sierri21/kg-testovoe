import AppTable from 'src/components/app-table.vue'
import AppPostUpdate from 'src/components/app-post-update.vue'


export const routes = [
	{ path: '/', name: 'index', component: AppTable },
	{ path: '/update-post/:id', name: 'change-post', component: AppPostUpdate },
]

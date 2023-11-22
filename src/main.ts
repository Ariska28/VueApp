import './styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/ui'

const app = createApp(App)

components.forEach((component: {name: string}) => {
  app.component(component.name, component)
})

app
  .use(store)
  .use(router)
  .mount('#app')

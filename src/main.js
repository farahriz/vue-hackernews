import Vue from 'vue'
import App from './App'
import ProgressBar from './components/ProgressBar'
import { fetchListData } from './api/api'

Vue.config.productionTip = false

// fetchListData('top')
//   .then((items) => {
//     window.items = items
//     new Vue({
//       el: '#app',
//       render: h => h(App)
//     })
//   })

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

new Vue({
  el: '#app',
  render: h => h(App)
})
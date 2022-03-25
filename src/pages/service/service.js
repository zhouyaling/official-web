import Vue from 'vue'
import 'jquery'
import service from './service.vue'
import router from './router.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GoTop from '../../components/GoTop'
import 'swiper/dist/css/swiper.min.css';
import '../../assets/css/reset.min.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/js/bootstrap.min'
import 'animate.css'

// import axios from './api'
// import api from './api/api'
// Vue.prototype.http = axios;
// Vue.prototype.api = api;

Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(GoTop.name, GoTop)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { service },
    template: '<service/>'
    // render: h => h(App)
})

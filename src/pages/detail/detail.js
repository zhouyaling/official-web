import Vue from 'Vue'
import 'jquery'
import detail from './detail.vue'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GoTop from '../../components/GoTop'
import '../../assets/css/reset.min.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/js/bootstrap.min'
import 'animate.css'

Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(GoTop.name, GoTop)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(detail)
})
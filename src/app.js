import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
})
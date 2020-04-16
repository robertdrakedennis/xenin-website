require('./start.js');

import VueTippy from 'vue-tippy';

import axios from 'axios';

import Vue from 'vue'


window.Vue = require('vue');


Vue.prototype.$http = axios;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueTippy);

Vue.component('hovercard-component', require('./components/vue/HovercardComponent.vue'));
Vue.component('community-component', require('./components/vue/MegaNavbar/CommunityComponent.vue'));
Vue.component('social-component', require('./components/vue/MegaNavbar/SocialComponent.vue'));
Vue.component('profile-component', require('./components/vue/MegaNavbar/ProfileComponent.vue'));
Vue.component('quill-component', require('./components/vue/Editor/QuillComponent.vue'));
Vue.component('static-quill-component', require('./components/vue/Content/StaticQuillComponent.vue'));



const app = new Vue({
    el: '#app',
});
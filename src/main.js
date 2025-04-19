// import Vue from 'vue';

// import './plugins/vuetify';
// import App from './App.vue';
// import router from './router';
// import {
//   GC_USER_NAME, GC_PICTURE, GC_USER_EMAIL,
// } from './constants/settings';
// import './registerServiceWorker';
// import { Capacitor } from '@capacitor/core';
// import { StatusBar, Style } from '@capacitor/status-bar';
// const app = createApp(App);
// Vue.config.productionTip = false;
// StatusBar.setOverlaysWebView({ overlay: true })
//   .then(() => console.log('Status bar overlay set'))
//   .catch((error) => {
//     if (error.code === 'UNIMPLEMENTED') {
//       console.warn('StatusBar feature not supported on this platform.');
//     } else {
//       console.error('Error setting StatusBar overlay:', error);
//     }
//   });
// StatusBar.setStyle({ style: Style.Light }); // Choose Light or Dark
// const name = localStorage.getItem(GC_USER_NAME);
// const email = localStorage.getItem(GC_USER_EMAIL);
// const picture = localStorage.getItem(GC_PICTURE);

// new Vue({
//   router,
//   data: {
//     name,
//     email,
//     picture,
//   },
//   render: (h) => h(App),
// }).$mount('#app');


import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './styles/global.css';
import {
  GC_USER_NAME, GC_PICTURE, GC_USER_EMAIL,
} from './constants/settings';
import './registerServiceWorker';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

Vue.config.productionTip = false;

// Ensure StatusBar settings are only applied on native platforms
if (Capacitor.isNativePlatform()) {
  StatusBar.setOverlaysWebView({ overlay: true })
    .then(() => console.log('Status bar overlay set'))
    .catch((error) => {
      if (error.code === 'UNIMPLEMENTED') {
        console.warn('StatusBar feature not supported on this platform.');
      } else {
        console.error('Error setting StatusBar overlay:', error);
      }
    });

  StatusBar.setStyle({ style: Style.Light })
    .then(() => console.log('Status bar style set to Light'))
    .catch(console.error);
}

// Retrieve user details from localStorage
const name = localStorage.getItem(GC_USER_NAME);
const email = localStorage.getItem(GC_USER_EMAIL);
const picture = localStorage.getItem(GC_PICTURE);

// Initialize Vue app
new Vue({
  router,
  data: {
    name,
    email,
    picture,
  },
  render: (h) => h(App),
}).$mount('#app');
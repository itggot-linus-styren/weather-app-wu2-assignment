import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';

const emitter = mitt();
const app = createApp(App);

/*
 * För att vi ska kunna använda "mitt" i alla våra komponenter behöver vi lägga till en global
 * property som Vue lägger under "this" i våra komponenter.
 * 
 * Namnet $bus är användardefinerat men hänvisar till konceptet "eventBus" som beskriver ett
 * sätt att skicka och lyssna på custom events utan att behöva uttrycka vilken komponent som
 * är källan eller destinationen.
 */
app.config.globalProperties.$bus = emitter;
app.mount('#app');

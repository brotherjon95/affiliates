import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import BaseButton from './components/UI/BaseButton.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseInput from './components/UI/BaseInput.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-dialog', BaseDialog);
app.component('base-input', BaseInput);

app.mount('#app');

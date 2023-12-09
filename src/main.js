import { createApp } from 'vue';
import App from './App';

import components from '@/components/UI/exportUiComponents';
import { router } from './router/router';
import VIntersection from './directives/VIntersection';


const app = createApp(App);

app.directive('intersection', VIntersection)

components.forEach(component => {
    app.component(component.name, component);
})

app.use(router).mount('#app');

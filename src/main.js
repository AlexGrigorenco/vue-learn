import { createApp } from 'vue';
import App from './App';

import components from '@/components/UI/exportUiComponents';
import { router } from './router/router';
import directives from './directives/ExportDirectives';


const app = createApp(App);

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

components.forEach(component => {
    app.component(component.name, component);
})

app.use(router).mount('#app');

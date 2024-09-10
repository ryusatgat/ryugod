import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify/lib/framework';

Vue.use(VueRouter)
Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: "#B3E5FC",
                yellow: "#FFF59D",
                green: "#A5D6A7",                
                error: "#EF9A9A",
                toolbar: "#212121",
            },
            light: {
                primary: "#01579B",
                yellow: "#F57F17",
                green: "#2E7D32",                
                toolbar: "#E0E0E0",                
            }
        },
    }
});

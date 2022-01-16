import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "./components/Contact"
import About from "./components/About"

Vue.use(VueRouter);

export default new VueRouter({
    base:"/",
    routes:[
        {path:"/test",component:Contact},
        {path:"/about",component:About}

    ]
})
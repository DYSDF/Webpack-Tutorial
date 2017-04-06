// 引入 Vue
import Vue from "vue";

// 引入 组件
import Index from "./component/index.vue";

const app = new Vue(Index);

app.$mount("#app");
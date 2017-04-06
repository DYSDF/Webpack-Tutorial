import Vue from "vue";
const app = document.querySelector("#app");
const vm = new Vue({
	el: app,
	data: {
		h2: "这个部分完全就是用 Vue 构建出来的",
		ul: {
			li_1: "el 参数：这个参数类型可以是字符串，也可以是一个 DOM 对象，为字符串时，其表示的是一个 CSS 选择器；这个参数规定了 Vue 实例的作用范围，处在 el 参数内的元素都可以引用 Vue 实例中的方法变量",
			li_2: "data、methods 参数：data 参数定义了 Vue 实例的初始化数据，methods 参数定义了 Vue 实例中新增的方法"
		}
	},
	methods: {
		alert(msg){
			alert(msg)
		}
	}
})

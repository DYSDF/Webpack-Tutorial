<template>
    <div class="box-app">
        <h3>{{h2}}</h3>
        <pre>
			<code>
				var app = document.querySelector("#app");
			 	var vm = new Vue({
				 	el: app,
				 	// el: "#app"
				 	data: {
				 		h2: "这个部分完全就是用 Vue 构建出来的",
				 		ul: {
				 			li_1: ""
				 		}
				 	},
				 	methods: {
				 		alert: function(msg){
				 			alert(msg)
				 		}
				 	}
				})
			</code>
		</pre>
        <p>主要需要了解的一下两点</p>
        <ul>
            <li>{{ul.li_1}}</li>
            <li>{{ul.li_2}}</li>
        </ul>
        <span @click="alert('调用 Vue 实例方法成功')">点击我试试</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                h2: "这个部分完全就是用 Vue 构建出来的",
                ul: {
                    li_1: "el 参数：这个参数类型可以是字符串，也可以是一个 DOM 对象，为字符串时，其表示的是一个 CSS 选择器；这个参数规定了 Vue 实例的作用范围，处在 el 参数内的元素都可以引用 Vue 实例中的方法变量",
                    li_2: "data、methods 参数：data 参数定义了 Vue 实例的初始化数据，methods 参数定义了 Vue 实例中新增的方法"
                }
            }
        },
        methods: {
            alert: function (msg) {
                alert(msg)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .box-app {
        border: 1px solid;

        h3 {
            color: red;
        }
    }
</style>
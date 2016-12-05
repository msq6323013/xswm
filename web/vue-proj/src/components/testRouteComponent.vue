<template>
	<div id="testRouteComponent">
		<h1>title</h1>
		<a>written by {{name}}</a>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<p>测试路由结合模版的页面</p>
			</div>
			<div v-for="article in articles" class="text item">
				{{article.title}}
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "loki",
				articles: []
			}
		},
		mounted() {
			this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
				headers: {},
				emulateJSON: true
			}).then(function (res) {
				// success
				this.articles = res.data.subjects
			}, function (res) {
				// err
				console.log(res)
			})
		}
	}
</script>

<style></style>
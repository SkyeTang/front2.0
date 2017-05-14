<template>
	<div class="head">
		恭喜你，进入了vue2.0时代 ~
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import t from './test.vue'
	const te = Vue.extend(t)
	export default {
		mounted(){
			let overlay = new te({
				el:document.createElement('div')
			})
			console.log(overlay)
			console.log('恭喜你，进入了Vue2.0的时代.')
			console.log(te)
			document.body.append(overlay.$el)
		}
	}
</script>

<style lang="less">

</style>
<template>
	<div>
		<div class="head">
			恭喜你，进入了vue2.0时代 ~
		</div>
		<editor></editor>
	</div>
</template>

<script type="text/javascript">
	/*import Vue from 'vue'
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
			console.log(overlay.$el)
			document.body.append(overlay.$el)
		}
	}*/
	import editor from './editor/index.vue'
	export default{
		components:{
			editor
		},
	}
</script>

<style lang="less">

</style>
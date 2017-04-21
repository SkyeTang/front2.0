<template>
	<div class="head">
		恭喜你，进入了vue2.0时代 ~
	</div>
</template>

<script type="text/javascript">
	export default {
		ready(){
			console.log('恭喜你，进入了Vue2.0的时代')
			console.log('恭喜你，进入了新的vue2.0时代')
		}
	}
</script>

<style>
	body{
		background-color: gray;

		.head{
			width: 100%;
			height: 30px;
			background-color: blue;
		}
	}
</style>
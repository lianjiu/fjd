<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//	import shou from "@/components/shou"
export default {
  name: 'App',
  components:{
//	myshou:shou
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	font-size: 0.13rem;
}
html{
	font-size: calc(26.66666667vw);
}
html,body,#app{
	width: 100%;
	height: 100%;
}
#app{
	display: flex;
}
</style>

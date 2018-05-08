<template>
  <div class="register">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/signin'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		注册
   	</div>
   </div>
   
   
   
   <div class="footer">
   	<button>注册</button>
   </div>
   
  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.register{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.header{
		width: 100%;
		height: 0.49rem;
		background: white;
		display: flex;
		flex-direction: row;
		border-bottom: 0.02rem solid #efefef;
	}
	.header .a{
		display: block;
		width: 0.25rem;
		margin-top: 0.12rem;
	}
	.header .a img{
		width: 0.28rem;
		height: auto;
	}
	.header .b{
		flex: 1;
		text-align: center;
		line-height: 0.47rem;
		font-size: 0.16rem;
		color: #323232;
	}
	.footer{
		width: 100%;
		height: 0.61rem;
		border-top: 0.02rem solid #efefef;
		display: flex;
	}
	.footer button{
		width: 90%;
		margin-left: 0.2rem;
		margin-top: 0.1rem;
		margin-bottom: 0.1rem;
		text-align: center;
		background: red;
		border: 0.02rem solid red;
		border-radius: 0.02rem;
		color: white;
	}
</style>

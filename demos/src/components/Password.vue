<template>
  <div class="password">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/my'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		修改密码
   	</div>
   </div>
   <div class="main">
   	<div class="pwd">
   		<input type="text" style="outline: none;" placeholder=" 请输入大于6位的登录密码" />
   		<div class="updateSwitch">
   			<mt-switch v-model="value"></mt-switch>
   		</div>
   	</div>
   	<div class="btn">
   		<button>提交</button>
   	</div>
   </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			value:true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.password{
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
		background: white;
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
	.main{
		flex: 1;
		background: #efefef;
	}
	.main .pwd {
		width: 100%;
		height: 0.4rem;
		display: flex;
		margin-top: 0.22rem;
		position: relative;
	}
	.main .pwd input{
		height: 0.5rem;
		width: 90%;
		margin-left: 0.18rem;
		border-radius: 0.05rem;
		border: 0.02rem solid #ced3d7;
		color: black;
		padding-left: 0.1rem;
	}
	.main .btn{
		margin-top: 0.18rem;
		display: flex;
	}
	.main .btn button{
		width: 90%;
		height: 0.38rem;
		margin-left: 0.2rem;
		background: red;
		border: 0.02rem solid red;
		border-radius: 0.05rem;
		color: white;
	}
	.updateSwitch{
		position: absolute;
		top: 18%;
		right: 0.35rem;
	}
</style>

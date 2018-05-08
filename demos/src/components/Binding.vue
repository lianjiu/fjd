<template>
  <div class="binding">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/my'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		绑定手机
   	</div>
   </div>
   <div class="active">
   	<div class="tu"><img src="../../static/images/user/mobile/tip.png"/></div>
   	<div class="info">新手机号验证后，即可绑定成功</div>
   </div>
   <div class="bang">
   	<input type="text" style="outline: none;" placeholder="绑定手机号" />
   </div>
   <div class="yan">
   	<input type="text" style="outline: none;" placeholder="请输入手机验证码" /><button>获取验证码</button>
   </div>
   <div class="btn">
   	<button>下一步</button>
   </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.binding{
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
	.active{
		width: 100%;
		height: 0.48rem;
		background: #f3f4c6;
		color: #d1b975;
		display: flex;
		flex-direction: row;
		line-height: 0.48rem;
	}
	.active .tu{
		width: 10%;
		margin-left: 0.2rem;
		margin-top: 0.05rem;
	}
	.active .tu img{
		width: 0.2rem;
		height: auto;
	}
	.active .info{
		flex: 1;
	}
	.bang{
		width: 100%;
		height: 0.4rem;
		display: flex;
		margin-top: 0.22rem;
	}
	.bang input{
		width: 90%;
		margin-left: 0.18rem;
		border-radius: 0.05rem;
		border: 0.02rem solid #ced3d7;
	}
	.yan{
		width: 100%;
		height: 0.4rem;
		display: flex;
		margin-top: 0.22rem;
	}
	.yan input{
		width: 90%;
		margin-left: 0.18rem;
		border-radius: 0.05rem 0 0 0.05rem;
		border: 0.02rem solid #ced3d7;
	}
	.yan button{
		width: 1.58rem;
		margin-right: 0.18rem;
		background: white;
		border: 0.02rem solid #ced3d7;
		border-radius: 0 0.05rem 0.05rem 0;
	}
	.btn{
		margin-top: 0.18rem;
		display: flex;
	}
	.btn button{
		width: 90%;
		height: 0.38rem;
		margin-left: 0.2rem;
		background: red;
		border: 0.02rem solid red;
		border-radius: 0.05rem;
		color: white;
	}
</style>

<template>
  <div class="sign">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/shou'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		登录
   	</div>
   </div>
   <div class="main">
   	<input type="text" style="outline: none;" placeholder="手机号"/>
   	<input type="text" style="outline: none;" placeholder="密码"/>
   	<div class="updateSwitch">
   			<mt-switch v-model="value"></mt-switch>
   		</div>
   	<button>登录</button>
   </div>
   <div class="footer">
   	<div class="footer-l">
   		<div class="a"><img src="../../static/images/home/index/forget.png"/></div>
   		<div class="b">忘记密码</div>
   	</div>
   	<div class="footer-r">
   		<div class="a"><router-link :to="{path:'/register'}"><img src="../../static/images/home/index/reg.png"/></router-link></div>
   		<div class="b"><router-link :to="{path:'/register'}">快速注册</router-link></div>
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
	a{
		text-decoration: none;
		color: black;
	}
	.sign{
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
		border-bottom: 0.01rem solid #efefef;
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
		/*background: red;*/
		text-align: center;
		position: relative;
	}
	.main .updateSwitch{
		position: absolute;
		top: 47%;
		right: 0.35rem;
	}
	.main input{
		width: 3.36rem;
		height: 0.42rem;
		margin-top: 0.2rem;
		border: 0.02rem solid #EFEFEF ;
		padding-left: 0.1rem;
	}
	.main button{
		border: 0;
		width: 3.24rem;
		height: 0.4rem;
		background: #EB1625;
		border-radius: 0.05rem;
		margin-top: 0.2rem;
		color: #FFFFFF;
	}
	.footer{
		display: flex;
		flex-direction: row;
		margin-top: 0.1rem;
		color: #323232;
	}
	.footer .footer-l .a img{
		width: 0.2rem;
    height: 0.2rem;
	}
	.footer .footer-l .a{
		text-align: left;
		width: 30%;
	}
	.footer .footer-l .b{
		flex: 1;
	}
	.footer .footer-l{
		width: 50%;
		height: 100%;
		margin-left: 0.2rem;
		display: flex;
		flex-direction: row;
	}
	.footer .footer-r .a img{
		width: 0.2rem;
    height: 0.2rem;
	}
	.footer .footer-r .a{
		width: 50%;
	}
	.footer .footer-r .b{
		flex: 1;
	}
	.footer .footer-r{
		text-align: right;
		width: 50%;
		height: 100%;
		margin-right: 0.2rem;
		display: flex;
		flex-direction: row;
	}
</style>

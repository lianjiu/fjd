<template>
  <div class="my">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/shou'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		个人中心
   	</div>
   </div>
   
   <div style="overflow-y: auto;">
   	<div class="tu">
   	<div class="tou">
   		<img src="../../static/images/home/index/funset_2.png"/>
   	</div>
   	<div class="info">
   		<span>李四</span>
   		<p>我的积分:0</p>
   	</div>
   </div>
   <div class="ding">
   	<div class="l">
   		全部订单
   	</div>
   	<div class="r">
   		<router-link :to="{path:'/order'}">查看全部订单 ></router-link>
   	</div>
   </div>
   <div class="nav">
   	<dl>
   		<dt><img src="../../static/images/user/my/pay.png"/></dt>
   		<dd><router-link :to="{path:'/order'}">待支付 </router-link></dd>
   	</dl>
   	<dl>
   		<dt><img src="../../static/images/user/my/shouhuo.png"/></dt>
   		<dd>待收货</dd>
   	</dl>
   	<dl>
   		<dt><img src="../../static/images/user/my/comment.png"/></dt>
   		<dd>待评价</dd>
   	</dl>
   </div>
   <div class="main">
   	<router-link :to="{path:'/personal'}">
   		<div class="list">
	   		<div class="left">个人资料</div>
	   		<div class="right"><img src="../../static/images/common/right_arrow.png"/></div>
	   	</div>
   	</router-link>
   	<router-link :to="{path:'/address'}">
	   	<div class="list">
	   		<div class="left">地址管理</div>
	   		<div class="right"><img src="../../static/images/common/right_arrow.png"/></div>
	   	</div>
   	</router-link>
   	<router-link :to="{path:'/binding'}">
	   	<div class="list">
	   		<div class="left">绑定手机</div>
	   		<div class="right"><img src="../../static/images/common/right_arrow.png"/></div>
	   	</div>
   	</router-link>
   	<router-link :to="{path:'/password'}">
	   	<div class="list">
	   		<div class="left">修改密码</div>
	   		<div class="right"><img src="../../static/images/common/right_arrow.png"/></div>
	   	</div>
   	</router-link>
   	<router-link :to="{path:'/collection'}">
	   	<div class="list">
	   		<div class="left">我的收藏</div>
	   		<div class="right"><img src="../../static/images/common/right_arrow.png"/></div>
	   	</div>
   	</router-link>
   </div>
   </div>
   <div class="bot">
   	<button>退出</button>
   </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a{
		text-decoration: none;
		color: black;
	}
	.my{
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
	.tu{
		width: 100%;
		height: 1.34rem;
		/*background: #eb4737;*/
		display: flex;
		flex-direction: row;
		background: url(../../static/images/common/mybg.7627611.png);
	}
	.tu .tou{
		width: 20%;
		height: 100%;
		margin-left: 0.16rem;
		margin-top: 0.58rem;
	}
	.tu .tou img{
		width: 0.6rem;
		height: auto;
	}
	.tu .info{
		flex: 1;
		color: white;
		font-weight: bold;
	}
	.tu .info span{
		display: block;
		margin-top: 0.75rem;
	}
	.tu .info p{
		margin-top: 0.08rem;
	}
	.ding{
		width: 100%;
		height: 0.39rem;
		line-height: 0.39rem;
		/*background: blue;*/
		display: flex;
		flex-direction: row;
		border-bottom: 0.02rem solid #efefef;
	}
	.ding .l{
		width: 20%;
		height: 100%;
		margin-left: 0.1rem;
		font-size: 0.15rem;
	}
	.ding .r{
		flex: 1;
		text-align: right;
		margin-right: 0.08rem;
		font-size: 0.11rem;
	}
	.nav{
		width: 100%;
		/*height: 0.69rem;*/
		/*background: yellow;*/
		border-bottom: 0.2rem solid #efefef;
		display: flex;
		flex-direction: row;
		text-align: center;
	}
	.nav dl{
		flex: 1;
		margin-top: 0.15rem;
	}
	.nav dl dt img{
		width: 0.23rem;
		height: auto;
	}
	.nav dl dd{
		margin-bottom: 0.05rem;
	}
	.main{
		width: 100%;
		height: 1.97rem;
		/*background: red;*/
		display: flex;
		flex-direction: column;
	}
	.main .list{
		flex: 1;
		height: 0.38rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		border-bottom: 0.02rem solid #efefef;
	}
	.main .list .left{
		width: 30%;
		height: 100%;
		font-size: 0.18rem;
		margin-left: 0.3rem;
		line-height: 0.38rem;
	}
	.main .list .right{
		flex: 1;
		text-align: right;
		margin-right: 0.12rem;
	}
	.main .list .right img{
		width: 0.26rem;
		height: auto;
		margin-top: 0.06rem;
	}
	.bot{
		flex: 1;
		text-align: center;
	}
	.bot button{
		width: 2.53rem;
		height: 0.38rem;
		background: #e32025;
		border-radius: 0.05rem;
		margin-top: 0.18rem;
		color: white;
		font-size: 0.16rem;
		outline: none;
	}
</style>

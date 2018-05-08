<template>
  <div class="address">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/my'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		收货地址管理
   	</div>
   </div>
   
   <div class="main">
   	<div class="list">
   		<div class="l">
   			<div class="a">
   				<span>赵四</span>13701036048
   			</div>
   			<div class="b">
   				<span>[默认]</span>重庆南岸区223123213
   			</div>
   		</div>
   		<div class="r">
   			<img src="../../static/images/common/right_arrow.png"/>
   		</div>
   	</div>
   	
   	<div class="list">
   		<div class="l">
   			<div class="a">
   				<span>王五</span>18610047048
   			</div>
   			<div class="b">
   				北京朝阳区详细地址
   			</div>
   		</div>
   		<div class="r">
   			<img src="../../static/images/common/right_arrow.png"/>
   		</div>
   	</div>
   </div>
   
   <div class="footer">
   	<router-link :to="{path:'/newadd'}"><button>+ 添加收货地址</button></router-link>
   </div>
   
  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.address{
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
	.main{
		flex: 1;
		overflow-y: auto;
	}
	.main .list{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 0.56rem;
		border-bottom: 0.02rem solid #efefef;
	}
	.main .list .l{
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-left: 0.15rem;
	}
	.main .list .l .a{
		width: 100%;
		height: 0.28rem;
		line-height: 0.38rem;
	}
	.main .list .l .b{
		flex: 1;
		line-height: 0.28rem;
		color: gray;
	}
	.main .list .l .b span{
		color: #fbb62e;
	}
	.main .list .r{
		width: 10%;
		line-height: 0.56rem;
	}
	.main .list .r img{
		width: 0.2rem;
		height: auto;
		margin-right: 0.15rem;
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
		background: #e81c2e;
		border: 0.02rem solid #e81c2e;
		border-radius: 0.02rem;
		color: white;
	}
	.footer a{
		width: 90%;
		margin-left: 0.2rem;
		margin-top: 0.1rem;
		margin-bottom: 0.1rem;
		text-align: center;
		background: #e81c2e;
		border: 0.02rem solid #e81c2e;
		border-radius: 0.02rem;
		color: white;
	}
	.main .list{
		flex: 1;
	}
</style>

<template>
  <div class="shopping">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/shou'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		购物车
   	</div>
   </div>
   <div class="main">
   	
   	<div class="list">
   		<div class="a">
   			<input type="checkbox" />
   		</div>
   		<div class="b">
   			<dl>
   				<dt><img src="../../static/images/home/goods/goodsdesc1.jpg"/></dt>
   				<dd>删除</dd>
   			</dl>
   		</div>
   		<div class="c">
   			<h3>裙装裙装5</h3>
   			<p>颜色:灰色 尺寸:M</p>
   			<span>￥100</span>
   		</div>
   		<div class="d">
   			<div class="d-a">
   				<span class="d-a1">-</span>
   				<input type="text" placeholder="5" />
   				<span class="d-a2">+</span>
   			</div>
   		</div>
   	</div>
   	
   </div>
   
   <div class="footer">
   	<div class="l"><input type="checkbox" />全选</div>
   	<div class="c">合计:<span>￥0</span></div>
   	<div class="r"><button>去结算</button></div>
   </div>
  </div>
</template>

<script>
export default {
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.shopping{
		flex: 1;
		display: flex;
		flex-direction: column;
		background: #ffffff;
	}
	.header{
		width: 100%;
		height: 0.47rem;
		/*background: red;*/
		display: flex;
		flex-direction: row;
		border-bottom: 0.01rem solid #f0f0f0;
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
		overflow-y: scroll;
	}
	.main .list{
		width: 100%;
		height: 1.14rem;
		border-bottom: 0.01rem solid #f0f0f0;
		display: flex;
		flex-direction: row;
	}
	.main .list .a{
		width: 0.26rem;
		height: 100%;
		line-height: 1.14rem;
		text-align: center;
	}
	.main .list .b{
		width: 0.78rem;
		height: 100%;
		text-align: center;
	}
	.main .list .b dl dt{
		margin-top: 0.26rem;
	}
	.main .list .b dl dt img{
		width: 0.58rem;
		height: auto;
	}
	.main .list .b dl dd{
		/*margin-top: 0.06rem;*/
	}
	.main .list .c{
		flex: 1;
		margin-left: 0.13rem;
	}
	.main .list .c h3{
		margin-top: 0.12rem;
	}
	.main .list .c p{
		margin-top: 0.12rem;
		color: #c6c6c6;
	}
	.main .list .c span{
		display: block;
		margin-top: 0.1rem;
		color: red;
	}
	.main .list .d{
		width: 1.41rem;
		height: 100%;
	}
	.main .list .d .d-a{
		margin-left: 0.21rem;
		margin-top: 0.76rem;
		width: 0.97rem;
		height: 0.25rem; 
		border: 0.02rem solid black;
		text-align: center;
		border-radius: 0.02rem;
	}
	.main .list .d .d-a input{
		text-align: center; 
		width: 0.35rem; 
		/*height: 0.24rem;*/ 
		border: 0;
	}
	.main .list .d .d-a .d-a1{
		font-size: 0.1rem; 
		border-right: 0.01rem solid black;
		padding-right: 0.09rem;
	}
	.main .list .d .d-a .d-a2{
		font-size: 0.1rem; 
		border-left: 0.01rem solid black;
		padding-left: 0.09rem;
	}
	.footer{
		width: 100%;
		height: 0.47rem;
		/*background: red;*/
		display: flex;
		flex-direction: row;
		border-top: 0.01rem solid #f0f0f0;
	}
	.footer .l{
		width: 0.6rem;
		height: 100%;
		line-height: 0.47rem;
		font-size: 0.13rem;
	}
	.footer .l input{
		margin-left: 0.1rem;
		margin-right: 0.05rem;
	}
	.footer .c{
		flex: 1;
		text-align: right;
		line-height: 0.47rem;
		margin-right: 0.1rem;
	}
	.footer .c span{
		color: red;
		font-size: 0.13rem;
	}
	.footer .r{
		width: 1.1rem;
		height: 100%;
	}
	.footer .r button{
		background: red;
		width: 100%;
		height: 100%;
		border-radius: 0.1rem;
		color: white;
		font-size: 0.16rem;
	}
</style>

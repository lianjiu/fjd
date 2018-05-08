<template>
  <div class="newadd">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/address'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		新增地址
   	</div>
   </div>
   <div class="name">
   	<div class="a">收货人</div>
   	<div class="b"><input style="outline: none;" type="text" placeholder="收货人姓名" /></div>
   </div>
   <div class="tel">
   	<div class="a">联系方式</div>
   	<div class="b"><input style="outline: none;" type="text" placeholder="联系人手机号" /></div>
   </div>
   <div class="address">
   	<div class="a">所在地区</div>
   	<div class="b"><input style="outline: none;" type="text" placeholder="请选择收货地区" /></div>
   </div>
   <div class="xiang">
   	<div class="a">详细地址</div>
   	<div class="b"><input style="outline: none;" type="text" placeholder="街道详细地址" /></div>
   </div>
   
   <div class="footer">
   	<button>保存并使用</button>
   </div>
   
  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.newadd{
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
	.name{
		display: flex;
		flex-direction: row;
		height: 0.47rem;
		line-height: 0.47rem;
		border-bottom: 0.02rem solid #efefef;
	}
	.name .a{
		width: 15%;
		margin-left: 0.2rem;
	}
	.name .b{
		flex: 1;
	}
	.name .b input{
		border: 0;
		width: 100%;
		height: 100%;
	}
	.tel{
		display: flex;
		flex-direction: row;
		height: 0.47rem;
		line-height: 0.47rem;
		border-bottom: 0.02rem solid #efefef;
	}
	.tel .a{
		width: 20%;
		margin-left: 0.2rem;
	}
	.tel .b{
		flex: 1;
	}
	.tel .b input{
		border: 0;
		width: 100%;
		height: 100%;
	}
	.address{
		display: flex;
		flex-direction: row;
		height: 0.47rem;
		line-height: 0.47rem;
		border-bottom: 0.02rem solid #efefef;
	}
	.address .a{
		width: 20%;
		margin-left: 0.2rem;
	}
	.address .b{
		flex: 1;
	}
	.address .b input{
		border: 0;
		width: 100%;
		height: 100%;
	}
	.xiang{
		display: flex;
		flex-direction: row;
		height: 0.47rem;
		line-height: 0.47rem;
		border-bottom: 0.02rem solid #efefef;
	}
	.xiang .a{
		width: 20%;
		margin-left: 0.2rem;
	}
	.xiang .b{
		flex: 1;
	}
	.xiang .b input{
		border: 0;
		width: 100%;
		height: 100%;
	}
	.footer{
		width: 100%;
		height: 0.61rem;
		display: flex;
	}
	.footer button{
		width: 90%;
		margin-left: 0.2rem;
		margin-top: 0.1rem;
		margin-bottom: 0.1rem;
		text-align: center;
		background: #fab32e;
		border: 0.02rem solid #fab32e;
		border-radius: 0.02rem;
		color: #fffffe;
		font-size: 0.16rem;
		outline: none;
	}
</style>

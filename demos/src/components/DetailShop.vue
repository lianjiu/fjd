<template>
<div class="detailshop">
	<div class="tu">
		<img src="../../static/images/common/1484283964.jpg"/>
	</div>
	<div class="main">
		<div class="tit">裙装裙装5</div>
		<div class="price">￥100</div>
		<div class="info">
			<div class="left">快递：<span>10</span>元</div>
			<div class="right">月销量<span>0</span>件</div>
		</div>
	</div>
	<div class="ping">
		没有相关评价!
	</div>
	<div class="btn">
		<div class="col">收藏</div>
		<div class="shop">收入购物车</div>
	</div>
</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.tu{
		width: 100%;
		height: 3.6rem;
		/*background: red;*/
	}
	.tu img{
		width: 100%;
		height: auto;
	}
	.main{
		border-bottom: 0.1rem solid #efefef;
		padding-left: 0.16rem;
	}
	.main .tit{
		width: 100%;
		height: 0.67rem;
		line-height: 0.67rem;
	}
	.main .price{
		width: 100%;
		height: 0.32rem;
		line-height: 0.32rem;
	}
	.main .info{
		width: 100%;
		height: 0.43rem;
		line-height: 0.43rem;
		display: flex;
		flex-direction: row;
	}
	.main .info .left{
		width: 50%;
	}
	.main .info .right{
		flex: 1;
		text-align: right;
		margin-right: 0.16rem;
	}
	.ping{
		width: 100%;
		height: 1rem;
		/*background: red;*/
		margin-bottom: 0.57rem;
		text-align: center;
		line-height: 1rem;
		font-size: 0.2rem;
	}
	.btn{
		width: 100%;
		height: 0.57rem;
		/*background: blue;*/
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: row;
	}
	.btn .col{
		width: 50%;
		background: #fab32e;
		color: white;
		text-align: center;
		line-height: 0.57rem;
		font-size: 0.18rem;
	}
	.btn .shop{
		width: 50%;
		background: #ca0816;
		color: white;
		text-align: center;
		line-height: 0.57rem;
		/*border-radius: 0.05rem;*/
		font-size: 0.18rem;
	}
</style>

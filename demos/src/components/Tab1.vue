<template>
<div class="tab1">
	<div class="ding">
		<div class="top">
			<div class="top-left">订单编号：<span>539662016</span></div>
			<div class="top-right">代付款</div>
		</div>
		<div class="center">
			<div class="center-s">
				<div class="l"><img src="../../static/images/common/1484283665.jpg"/></div>
				<div class="c"><p>国家队全英赛比赛裤阿迪达斯阿迪达国家队全英赛比赛</p></div>
				<div class="r"><span>×5</span></div>
			</div>
			<div class="center-s">
				<div class="l"><img src="../../static/images/common/1484284042.jpg"/></div>
				<div class="c"><p>牛仔裤阿迪达斯阿迪达斯2016秋季新款女子运动休闲下装针织裤</p></div>
				<div class="r"><span>×1</span></div>
			</div>
			<div class="center-s">
				<div class="l"><img src="../../static/images/common/1484288512.jpg"/></div>
				<div class="c"><p>运动休闲下装针织裤阿迪达斯2017秋季新款女子运动休闲下</p></div>
				<div class="r"><span>×3</span></div>
			</div>
		</div>
		<div class="bot">
			<div class="bot-left">实付金额：<span>539662016</span></div>
			<div class="bot-right"><span>取消订单</span></div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.tab1{
		background: #efefef;
	}
	.ding{
		width: 100%;
		height: auto;
		background: white;
		display: flex;
		flex-direction: column;
		margin-top: 0.1rem;
	}
	.top{
		width: 100%;
		height: 0.37rem;
		/*background: red;*/
		display: flex;
		flex-direction: row;
		line-height: 0.37rem;
		border-bottom: 0.02rem solid #efefef;
	}
	.top-left{
		flex: 1;
		margin-left: 0.1rem;
	}
	.top-right{
		width: 15%;
		height: 100%;
	}
	.center{
		flex: 1;
		flex-direction: column;
	}
	.center-s{
		display: flex;
		flex-direction: row;
		border-bottom: 0.02rem solid #efefef;
	}
	.center .l{
		width: 20%;
		height: 100%;
		margin: 0.1rem;
	}
	.center .l img{
		width: 100%;
		height: auto;
	}
	.center .c{
		flex: 1;
		line-height: 0.22rem;
		margin-top: 0.3rem;
		font-size: 0.14rem;
		margin-left: 0.1rem;
	}
	.center .r{
		width: 10%;
		height: 100%;
	}
	.center .r span{
		display: inline-block;
		margin-top: 0.8rem;
		color: gray;
		font-size: 0.1rem;
	}
	.bot{
		width: 100%;
		height: 0.37rem;
		/*background: blue;*/
		display: flex;
		flex-direction: row;
		line-height: 0.37rem;
	}
	.bot-left{
		flex: 1;
		margin-left: 0.1rem;
	}
	.bot-right{
		width: 20%;
		height: 100%;
	}
	.bot-right span{
		margin-top: 0.08rem;
		display: block;
		width: 0.67rem;
		height: 0.22rem;
		border: 0.02rem solid red;
		color: red;
		font-size: 0.12rem;
		text-align: center;
		line-height: 0.22rem;
		border-radius: 0.05rem;
	}
</style>

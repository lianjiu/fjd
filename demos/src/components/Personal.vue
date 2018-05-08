<template>
  <div class="personal">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/my'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">个人资料</div>
   	<div class="c">保存</div>
   </div>
   <div class="main">
   	<div class="tou">
   		<div class="a">头像</div>
   		<div class="b"><img src="../../static/images/home/index/funset_2.png"/></div>
   	</div>
   	<div class="name">
   		<div class="a">昵称</div>
   		<div class="b">李四</div>
   		<div class="c"><img src="../../static/images/common/right_arrow.png"/></div>
   	</div>
   	<div class="sex">
   		<div class="a">性别</div>
   		<div class="b">男</div>
   		<div class="c"><img src="../../static/images/common/right_arrow.png"/></div>
   	</div>
   </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.personal{
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
	.header .c{
		width: 15%;
		line-height: 0.49rem;
		margin-right: 0.1rem;
		font-size: 0.16rem;
	}
	.main{
		flex: 1;
		background: #efefef;
	}
	.main .tou{
		width: 100%;
		height: 0.57rem;
		background: white;
		margin-bottom: 0.01rem;
		display: flex;
		flex-direction: row;
	}
	.main .tou .a{
		width: 15%;
		line-height: 0.57rem;
		margin-left: 0.17rem;
	}
	.main .tou .b{
		flex: 1;
		text-align: right;
		margin-right: 0.55rem;
	}
	.main .tou .b img{
		width: 0.48rem;
		height: auto;
		margin-top: 0.05rem;
	}
	.main .name{
		width: 100%;
		height: 0.37rem;
		background: white;
		margin-bottom: 0.01rem;
		display: flex;
		flex-direction: row;
	}
	.main .name .a{
		width: 15%;
		line-height: 0.37rem;
		margin-left: 0.17rem;
	}
	.main .name .b{
		flex: 1;
		text-align: right;
		line-height: 0.37rem;
	}
	.main .name .c{
		width: 15%;
	}
	.main .name .c img{
		width: 0.2rem;
		height: auto;
		margin-left: 0.2rem;
		margin-top: 0.08rem;
	}
	.main .sex{
		width: 100%;
		height: 0.37rem;
		background: white;
		margin-bottom: 0.01rem;
		display: flex;
		flex-direction: row;
	}
	.main .sex .a{
		width: 15%;
		line-height: 0.37rem;
		margin-left: 0.17rem;
	}
	.main .sex .b{
		flex: 1;
		text-align: right;
		line-height: 0.37rem;
	}
	.main .sex .c{
		width: 15%;
	}
	.main .sex .c img{
		width: 0.2rem;
		height: auto;
		margin-left: 0.2rem;
		margin-top: 0.08rem;
	}
</style>

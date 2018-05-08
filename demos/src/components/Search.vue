<template>
  <div class="search">
  	
   <div class="head">
   	<div class="l">
   		<router-link :to="{path:'/shou'}"><img src="../../static/images/home/goods/back.png"/></router-link>
   	</div>
   	<div class="c">
   		<input type="text" style="outline: none;" />
   	</div>
   	<div class="r">筛选</div>
   </div>
   
   <div class="nav">
   	综合 <img src="../../static/images/home/goods/down.png"/> <span>销量</span>
   </div>
   
   <div class="main">
   	<div class="list">
   		<div class="left">
   			<img src="../../static/images/common/1484284030.jpg"/>
   		</div>
   		<div class="right">
   			<div class="a">裙装裙装5</div>
   			<div class="b">￥100.00</div>
   			<div class="c">评论<span>1059</span>条</div>
   		</div>
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
	.search{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	.head{
		width: 100%;
		/*height: 0.3rem;*/
		display: flex;
		flex-direction: row;
		background: white;
		/*z-index: 2;*/
		border-bottom: 0.01rem solid #EAEAEA;
		padding-bottom: 0.05rem;
	}
	.head .l{
		width: 0.5rem;
		height: 100%;
		margin-left: 0.13rem;
		margin-top: 0.06rem;
	}
	.head .l img{
		width: 0.24rem;
		height: auto;
	}
	.head .c{
		flex: 1;
		margin-top: 0.04rem;
	}
	.head .c input{
		width: 2.3rem;
		height: 0.27rem;
		background: #EAEAEA;
		border-radius: 0.05rem;
		border: 0.02rem solid #EFEFEF ;
		background-image: url(../../static/images/common/searchs.png);
		background-repeat: no-repeat;
		background-size: 0.2rem;
		background-position: 0.05rem;
		padding-left: 0.25rem;
	}
	.head .c img{
		width: 0.2rem;
		height: auto;
		margin-left: 0.06rem;	
	}
	.head .r{
		width: 0.35rem;
		height: 100%;
		margin-right: 0.12rem;
		margin-top: 0.08rem;
		color: black;
		font-size: 0.16rem;
	}
	.head .r img{
		width: 100%;
		height: auto;
	}
	.nav{
		width: 100%;
		height: 0.38rem;
		border-bottom: 0.01rem solid #EAEAEA;
		line-height: 0.38rem;
		padding-left: 0.2rem;
	}
	.nav img{
		width: 0.15rem;
		height: auto;
	}
	.main{
		flex: 1;
		/*display: flex;
		flex-direction: column;*/
		overflow-y: auto;
	}
	.main .list{
		width: 100%;
		height: 1.46rem;
		/*background: red;*/
		display: flex;
		flex-direction: row;
	}
	.main  .list .left{
		width: 30%;
		height: 100%;
		/*background: red;*/
	}
	.main  .list .left img{
		width: 100%;
		height: auto;
		margin-top: 0.21rem;
	}
	.main  .list .right{
		flex: 1;
		margin-right: 0.1rem;
		border-bottom: 0.01rem solid #EAEAEA;
	}
	.main  .list .right .a{
		margin-top: 0.21rem;
	}
	.main  .list .right .b{
		margin-top: 0.21rem;
		color: red;
	}
	.main  .list .right .c{
		margin-top: 0.21rem;
	}
	.main  .list .right .c span{
		color: #fd9a27;
	}
</style>

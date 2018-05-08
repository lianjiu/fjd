<template>
  <div class="collection">
   <div class="header">
   	<div class="a"><router-link to="/my"><img src="../../static/images/home/goods/back.png" alt="" /></router-link></div>
   	<div class="b">
   		我的收藏
   	</div>
   </div>
   
   <div style="margin-top: 0.49rem;overflow-y: auto;">
	   	<div class="main" v-for="(item,index) in goodslists" :key="index">
	   	<div class="listImg">
	   		<a href="javascript:;"><img :src="item.url"/></a>
	   	</div>
	   	<div class="listTitle">
	   		<p>{{item.title}}</p>
	   	</div>
	   	<div class="listPrice">
	   		<p>￥{{item.price}}</p>
	   	</div>
	   	<div class="listBtn">
	   		<a class="btnLeft" href="javascript:;">购买</a>
	   		<a class="btnRight" href="javascript:;">删除</a>
	   	</div>
	   </div>
   </div>
   
   
   
  </div>
</template>

<script>
export default {
	data(){
		return{
			goodslists:[
				{title:'阿迪达斯2016秋季新款女子运动休闲下装针织裤',price:'257',url:'../../static/images/common/1484284042.jpg'},
				{title:'阿迪达斯2017秋季新款女子运动休闲下装针织裤',price:'168',url:'../../static/images/common/1484285074.jpg'},
				{title:'阿迪达斯2018秋季新款女子运动休闲下装针织裤',price:'250',url:'../../static/images/common/1484284042.jpg'},
				{title:'阿迪达斯2021秋季新款女子运动休闲下装针织裤',price:'333',url:'../../static/images/common/1484285074.jpg'},
				{title:'阿迪达斯2022秋季新款女子运动休闲下装针织裤',price:'444',url:'../../static/images/common/1484284042.jpg'},
				{title:'阿迪达斯2023秋季新款女子运动休闲下装针织裤',price:'555',url:'../../static/images/common/1484285074.jpg'}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a{text-decoration: none; color: #000000;}
	.collection{
		width: 100%;
		background: #efefef;
	}
	.header{
		width: 100%;
		height: 0.49rem;
		background: white;
		position: fixed;
		left: 0;
		top: 0;
	}
	.header .a{
		display: block;
		width: 0.25rem;
		padding-top: 0.12rem;
	}
	.header .a img{
		width: 0.28rem;
		height: auto;
	}
	.header .b{
		width: 90%;
		margin-left: 0.25rem;
		text-align: right;
		display: inline-block;
		text-align: center;
		line-height: 0.47rem;
		font-size: 0.16rem;
		color: #323232;
		position: absolute;
		top: 0.2%;
	}
	.main{
		width: 1.77rem;
		height: 2.75rem;
		background: white;
		margin-top: 0.1rem;
		float: left;
		margin-left: 0.08rem;
	}
	
	.listImg{
		width: 1.77rem;
	}
	.listImg img{
		width: 100%;
		height: 1.63rem;
	}
	.listTitle{
		height: 0.42rem;
		margin-left: 0.13rem;
		margin-bottom: 0.06rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.listPrice{
		margin-left: 0.13rem;
		color: red;
		height: 0.3rem;
		line-height: 0.3rem;
	}
	.listBtn a{
		color: red;
		margin-left: 0.13rem;
		height: 0.3rem;
		line-height: 0.3rem;
		border: 0.02rem solid red;
		width: 0.47rem;
		height: 0.22rem;
		display: inline-block;
		text-align: center;
		line-height: 0.22rem;
		border-radius: 0.03rem;
	}
</style>

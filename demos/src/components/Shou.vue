<template>
  <div class="shou">
  	<!--头部-->
   <div class="head">
   	<div class="l">
   		<router-link :to="{path:'/classify'}"><img src="../../static/images/common/aa.png"/></router-link>
   	</div>
   	<div class="c">
   		<div class="c-a"><img src="../../static/images/common/searchs.png"/></div>
   		<div class="c-b">
   			<router-link :to="{path:'/search'}"><span style="color: white;">输入喜欢的宝贝名称</span></router-link>
   		</div>
   	</div>
   	<div class="r">
   		<router-link :to="{path:'/signIn'}"><span style="color: white;">登录</span></router-link>
   	</div>
   </div>
   <!--banner-->
   <div>
   <div class="banner">
   	<!--<img src="../../static/images/home/index/banner_1.jpg" alt="" />-->
   	<carousel></carousel>
   </div>
   <!--导航栏-->
   	<div class="nav">
   	<dl>
   		<dt><img src="../../static/images/home/index/funset_5.png"/></dt>
   		<dd>分类</dd>
   	</dl>
   	<dl v-for="(data,index) in nav">
   		<dt><img :src="data.image"/></dt>
   		<dd>{{data.title}}</dd>
   	</dl>
   </div>
   <!--主体部分-->
   <div class="main">
   		<girl></girl>
   		<boy></boy>
   		<work></work>
	   <div class="list-s">
	   	<div class="s">
	   		<div class="line-l"></div>
	   		<div class="c">为您推荐</div>
	   		<div class="line-r"></div>
	   	</div>
	   	<div class="list-s-a" v-for="(item,index) in goodslists" :key="index">
		   	<div class="listImg">
		   		<a href="javascript:;"><img :src="item.image"/></a>
		   	</div>
		   	<div class="listTitle">
		   		<p>{{item.title}}</p>
		   	</div>
		   	<div class="listPrice">
		   		<p>￥{{item.price}}</p>
		   	</div>
		   </div>
	   </div>
   </div>
   </div>
   <div class="foot">
   		<dl>
	   		<dt><router-link :to="{path:'/shou'}"><img src="../../static/images/common/home1.png"/></router-link></dt>
	   		<dd>
	   			<router-link :to="{path:'/shou'}">首页</router-link>
	   		</dd>
	   	</dl>
	   	<dl>
	   		<dt><router-link :to="{path:'/shopping'}"><img src="../../static/images/common/cart1.png"/></router-link></dt>
	   		<dd>
	   			<router-link :to="{path:'/shopping'}">购物车</router-link>
	   		</dd>
	   	</dl>
	   	<dl>
	   		<dt><router-link :to="{path:'/my'}"><img src="../../static/images/common/my1.png"/></router-link></dt>
	   		<dd>
	   			<router-link :to="{path:'/my'}">我的</router-link>
	   		</dd>
	   	</dl>
   </div>
  </div>
</template>

<script>
	import axios from "axios"
	import carousel from '@/components/HomeCarousel'
	import girl from '@/components/Shou-girl'
	import boy from '@/components/Shou-boy'
	import work from '@/components/Shou-work'
export default {
	data(){
		return{
			nav:[],
			goodslists:[]
		}
	},
	created(){
		var url = "http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f"
		axios.get(url).then((res)=>{
//			console.log(res.data.data)
			this.nav = res.data.data
		})
		var url2 = "http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f"
		axios.get(url2).then((res)=>{
//			console.log(res.data.data)
			this.goodslists = res.data.data
		})
	},
 components: {
    carousel:carousel,
    girl:girl,
    boy:boy,
    work:work
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.shou{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	.head{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0.28rem;
		display: flex;
		flex-direction: row;
		z-index: 2;
		background: linear-gradient(rgba(1, 1, 1, 0.2) 60%, rgba(255, 255, 255, 0) 100%);
		/*justify-content: space-between;*/
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
		margin-right: 0.23rem;
		margin-top: 0.04rem;
		color: white;
		background: rgba(255,255,255,0.6);
		border-radius: 0.05rem;
		display: flex;
		flex-direction: row;
	}
	.head .c .c-a{
		width: 15%;
		height: 100%;
		margin-top: 0.02rem;
	}
	.head .c .c-b{
		flex: 1;
		line-height: 0.25rem;
	}
	.head .c img{
		width: 0.2rem;
		height: auto;
		margin-left: 0.06rem;	
	}
	.head .r{
		width: 0.35rem;
		height: 100%;
		margin-right: 0.22rem;
		margin-top: 0.04rem;
		color: white;
		font-size: 0.16rem;
	}
	.head .r img{
		width: 100%;
		height: auto;
	}
	.banner{
		width: 100%;
		height: 1.75rem;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	.nav{
		width: 100%;
		display: flex;
		flex-direction: row;
		border-top: 0.08rem solid #efefef;
		border-bottom: 0.1rem solid #efefef;
	}
	.nav dl{
		flex: 1;
		text-align: center;
		margin-top: 0.07rem;
	}
	.nav dl dd{
		margin-bottom: 0.08rem;
	}
	.nav dl dt img{
		width: 0.39rem;
		height: auto;
	}
	.main{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.list-s{
		background: #efefef;
		margin-bottom: 0.5rem;
		border-bottom: 0.1rem solid #efefef;
	}
	.list-s .s{
		width: 100%;
		height: 0.3rem;
		display: flex;
	}
	.list-s .s .line-l{
		width: 35%;
    height: 1px;
    background-color: #D4D4D4;
    margin-top: 4%;
	}
	.list-s .s .c{
		width: 28%;
		line-height: 0.3rem;
		text-align: center;
		background-image: url(../../static/images/home/index/recom.png);
		background-size: 0.2rem;
    background-repeat: no-repeat;
    background-position: 0.0rem 0.05rem;
    font-size: 0.16rem;
    overflow: hidden;
    margin-left: 0.2rem;
    padding-left: 0.05rem;
	}
	.list-s .s .line-r{
		width: 35%;
    height: 1px;
    background-color: #D4D4D4;
    margin-top: 4%;
	}
	.list-s-a{
		width: 1.77rem;
		height: 2.5rem;
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
	
	.foot{
		width: 100%;
		background: white;
		display: flex;
		flex-direction: row;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.foot dl{
		flex: 1;
		text-align: center;
	}
	.foot dl dt img{
		width: 0.3rem;
		height: auto;
	}
	a{
		text-decoration: none;
		color: gray;
	}
</style>

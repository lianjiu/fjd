<template>
  <div class="classify">
  	
   <div class="head">
   	<div class="l">
   		<router-link :to="{path:'/shou'}"><img src="../../static/images/home/goods/back.png"/></router-link>
   	</div>
   	<div class="r">
   		<input type="text" style="outline: none;" placeholder="请输入宝贝名称" />
   	</div>
   </div>
   <div class="main">
   	<div class="left">
   		<div v-for="(item,index) in leftarr" class="left-s">
   			{{item.title}}
   		</div>
   	</div>
   	<div class="right">
   		<div class="r" v-for="(item,index) in datas">
   			<div class="right-title">裙裝</div>
	   		<div class="right-content">
	   			<div class="items" v-for="(items,indexs) in item" :key="indexs">
	   				<div class="img"><img :src="items.img"/></div>
	   				<div class="wen">{{items.name}}</div>
	   			</div>
	   		</div>
   		</div>
   	</div>
   </div> 
   
  </div>
</template>

<script>
	import axios from "axios"
export default {
 		data(){
 			return{
 				leftarr:[],
 				rightarr:[],
 				datas:[
 						[
		 					{name:"裙装裙装5",img:"../../static/images/common/1484284030.jpg"},
		 					{name:"裙装裙装4",img:"../../static/images/common/1484283665.jpg"},
		 					{name:"裙装裙装3",img:"../../static/images/common/1484283964.jpg"},
		 					{name:"裙装裙装2",img:"../../static/images/common/1484283964.jpg"},
		 					{name:"裙装裙装1",img:"../../static/images/common/1484283665.jpg"},
		 					{name:"裙装裙装6",img:"../../static/images/common/1484284042.jpg"},
		 					{name:"裙装裙装7",img:"../../static/images/common/1484285074.jpg"}
		 				],[
		 					{name:"没动态胖妹妹",img:"../../static/images/common/1484284030.jpg"},
		 					{name:"没动态胖妹妹",img:"../../static/images/common/1484283665.jpg"}
		 				],[
		 					{name:"阿迪达斯2016",img:"../../static/images/common/1484284030.jpg"},
		 					{name:"国家全英赛",img:"../../static/images/common/1484285074.jpg"},
		 					{name:"李宁运动裤男",img:"../../static/images/common/1484283665.jpg"}
		 				]
 				]
 			}
 		},
 		created(){
 			var url = "http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f"
 			axios.get(url).then((res)=>{
// 				console.log(res.data.data)
 				this.leftarr = res.data.data
 			})
// 			var url2 = "http://vueshop.glbuys.com/api/home/category/show?cid=493&token=1ec949a15fb709370f"
// 			axios.get(url2).then((res)=>{
// 				console.log(res)
// 			})
 		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.classify{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	.head{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		/*height: 0.45rem;*/
		display: flex;
		flex-direction: row;
		background: white;
		/*z-index: 2;*/
		border-bottom: 0.01rem solid #EAEAEA;
		padding-bottom: 0.13rem;
	}
	.head .l{
		width: 0.5rem;
		height: 100%;
		margin-left: 0.13rem;
		margin-top: 0.2rem;
	}
	.head .l img{
		width: 0.24rem;
		height: auto;
	}
	.head .r{
		flex: 1;
		margin-top: 0.12rem;
	}
	.head .r input{
		width: 2.3rem;
		height: 0.3rem;
		border-radius: 0.05rem;
		border: 0.03rem solid #EFEFEF ;
		padding-left: 0.1rem;
	}
	.head .r img{
		width: 0.2rem;
		height: auto;
		margin-left: 0.06rem;	
	}
	.main{
		flex: 1;
		background: #efefef;
		display: flex;
		flex-direction: row;
		margin-top: 0.58rem;
	}
	.main .left{
		width: 25%;
		height: auto;
		/*background: red;*/
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
	.main .left .left-s{
		text-align: center;
		width: 100%;
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.15rem;
		border-top: 0.02rem solid #efefef;
		background: white;
		color: #383838;
	}
	.main .right{
		flex: 1;
		margin-left: 0.17rem;
		overflow: auto;
	}
	.main .right .right-title{
		width: 100%;
		height: 0.42rem;
		line-height: 0.42rem;
		font-size: 0.14rem;
	}
	.main .right .right-content{
		width: 95%;
    height: auto;
    background: #FFFFFF;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
	}
	.main .right .right-content .items{
		width: 0.83rem;
		/*height: 1rem;*/
		background: white;
		text-align: center;
	}
	.main .right .right-content .items img{
		width: 0.58rem;
		height: auto;
		margin-top: 0.1rem;
	}
	.main .right .right-content .items .wen{
		font-size: 0.11rem;
		margin-top: 0.1rem;
		margin-bottom: 0.1rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>

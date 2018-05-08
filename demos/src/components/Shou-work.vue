<template>
<div class="girl">
	<div class="list">
   		<div class="tit">
   		<span>—— {{girlTitle}} ——</span>
   	</div>
   	<div class="x">
   		
   			<div class="shang">
   			<div class="left" v-for="(data,index) in arr" v-if="index == 0">
						<div class="left-s">
							<div class="title">{{data.title}}</div>
							<div class="jing" style="color: red;">精品打折    <span>{{data.price}}元</span></div>
						</div>
						<div class="left-x">
							<img :src="data.image"/>
						</div>
   			</div>
   			<div class="right">
   				<div class="s" v-for="(data,index) in arrtwo">
   					<div class="a">
   						<div class="h2">{{data.title}}</div>
   						<p>品质精挑</p>
   					</div>
   					<div class="b">
   						<img :src="data.image"/>
   					</div>
   				</div>
   			</div>
   		</div>
   		<div class="xia">
   			<div>
   				<div class="list" v-for="(data,index) in arrfour">
	   				<div class="h3">{{data.title}}</div>
	   				<img :src="data.image"/>
	   				<span class="a">￥{{data.price}}</span><br />
	   				<span class="b">￥{{data.price*2}}</span>
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
			arr:[],
			arrtwo:[],
			arrfour:[],
			girlTitle:''
		}
	},
	created(){
		var url = "http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f"
		axios.get(url).then((res)=>{
//			console.log(res.data.data)
			var girlList = res.data.data[2].items
			this.girlTitle = res.data.data[2].title
			this.arr = girlList
			this.arrtwo = girlList.slice(1,3)
			this.arrfour = girlList.slice(3)
//			console.log(this.arr)
		})
	}
}
</script>

<style scoped>
	.girl .list{
		/*border-bottom: 0.06rem solid #efefef;*/
	}
	.girl .list .tit{
		width: 100%;
		text-align: center;
		line-height: 0.3rem;
		color: #5fc600;
		font-size: 0.26rem;
	}
	.girl .list .x{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.girl .list .x .shang{
		width: 100%;
		height: 1.27rem;
		/*background: red;*/
		display: flex;
		flex-direction: row;
		border-top: 0.02rem solid #efefef;
		border-bottom: 0.02rem solid #efefef;
	}
	.girl .list .x .shang .left{
		width: 50%;
		height: 100%;
		border-right: 0.02rem solid #efefef;
		display: flex;
		flex-direction: column;
	}
	.girl .list .x .shang .left .left-s{
		width: 100%;
		height: 0.53rem;
		/*background: red;*/
		margin-left: 0.06rem;
	}
	.girl .list .x .shang .left .left-s .title{
		color: #323232;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-bottom: 0.05rem;
	}
	.girl .list .x .shang .left .left-s .jing span{
		display: inline-block;
		width: 0.4rem;
		height: 0.2rem;
		line-height: 0.2rem;
		text-align: center;
		background: red;
		border-radius: 0.1rem;
		color: white;
		margin-left: 0.13rem;
	}
	.girl .list .x .shang .left .left-x{
		flex: 1;
		text-align: center;
	}
	.girl .list .x .shang .left .left-x img{
		width: 0.74rem;
		height: 0.7rem;
	}
	.girl .list .x .shang .right{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.girl .list .x .shang .right .s{
		width: 100%;
		height: 0.7rem;
		border-bottom: 0.02rem solid #efefef;
		display: flex;
		flex-direction: row;
	}
	.girl .list .x .shang .right .s .a{
		flex: 1;
		margin-left: 0.1rem;
	}
	.girl .list .x .shang .right .s .a .h2{
		color: #323232;
		font-size: 0.14rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-top: 0.05rem;
	}
	.girl .list .x .shang .right .s .a p{
		color: #7b7f82;
	}
	.girl .list .x .shang .right .s .b{
		width: 40%;
	}
	.girl .list .x .shang .right .s .b img{
		width: 0.6rem;
		height: 0.5rem;
		margin-top: 0.06rem;
	}
	.girl .list .x .xia{
		flex: 1;
		border-bottom: 0.1rem solid #efefef;
		/*display: flex;
		flex-direction: row;*/
		/*background: pink;*/
	}
	.girl .list .x .xia .list{
		width: 25%;
		float: left;
		flex: 1;
		text-align: center;
		border-right: 0.02rem solid #efefef;
	}
	.girl .list .x .xia .list .h3{
		color: #323232;
		margin-top: 0.1rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.girl .list .x .xia .list img{
		width: 0.75rem;
		height: 0.78rem;
		margin-top: 0.02rem;
		margin-left: 0.08rem;
	}
	.girl .list .x .xia .list .a{
		color: red;
		margin-top: 0.05rem;
		display: inline-block;
	}
	.girl .list .x .xia .list .b{
		color: #7c8083;
		margin-bottom: 0.05rem;
		display: inline-block;
		text-decoration: line-through;
	}
</style>

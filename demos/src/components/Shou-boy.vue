<template>
<div class="boy">
	<div class="list">
   		<div class="tit">
	   		<span style="color: #fe6719;">—— 品牌男装 ——</span>
	   	</div>
   	<div class="x">
   		<div class="shang">
   			<div class="left" v-for="(data,index) in arrtwo">
						<div class="left-s">
							<div class="a">{{data.title}}</div>
							<div class="b">火爆开售</div>
						</div>
						<div class="left-x">
							<div class="img"><img :src="data.image"/></div>
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
		var url2 = "http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f"
		axios.get(url2).then((res)=>{
//			console.log(res.data.data)
			var girlList = res.data.data[1].items
			this.girlTitle = res.data.data[1].title
			this.arr = girlList
			this.arrtwo = girlList.slice(0,2)
			this.arrfour = girlList.slice(2)
//			console.log(this.arr)
		})
	}
}
</script>

<style scoped>
	.boy .list{
		border-bottom: 0.06rem solid #efefef;
	}
	.boy .list .tit{
		width: 100%;
		text-align: center;
		line-height: 0.3rem;
		color: #f43e63;
		font-size: 0.26rem;
	}
	.boy .list .x{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.boy .list .x .shang{
		width: 100%;
		height: 1.27rem;
		/*background: red;*/
		display: flex;
		flex-direction: row;
		border-top: 0.02rem solid #efefef;
		border-bottom: 0.02rem solid #efefef;
	}
	.boy .list .x .shang .left{
		width: 50%;
		height: 100%;
		border-right: 0.02rem solid #efefef;
		display: flex;
		flex-direction: column;
	}
	.boy .list .x .shang .left .left-s{
		width: 100%;
		height: 0.53rem;
		/*background: red;*/
		margin-left: 0.06rem;
	}
	.boy .list .x .shang .left .left-s .a{
		color: #323232;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		/*margin-right: 0.15rem;*/
	}
	.boy .list .x .shang .left .left-s .b{
		text-align: center;
		color: gray;
	}
	.boy .list .x .shang .left .left-x{
		flex: 1;
		text-align: center;
	}
	.boy .list .x .shang .left .left-x .img{
		text-align: center;
	}
	.boy .list .x .shang .left .left-x img{
		width: 0.74rem;
		height: 0.7rem;
	}
	.boy .list .x .xia{
		flex: 1;
	}
	.boy .list .x .xia .list{
		width: 25%;
		float: left;
		flex: 1;
		text-align: center;
		border-right: 0.02rem solid #efefef;
	}
	.boy .list .x .xia .list .h3{
		color: #323232;
		margin-top: 0.1rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.boy .list .x .xia .list img{
		width: 0.75rem;
		height: 0.78rem;
		margin-top: 0.02rem;
		margin-left: 0.08rem;
	}
	.boy .list .x .xia .list .a{
		color: red;
		margin-top: 0.05rem;
		display: inline-block;
	}
	.boy .list .x .xia .list .b{
		color: #7c8083;
		margin-bottom: 0.05rem;
		display: inline-block;
		text-decoration: line-through;
	}
</style>

<template>
<div class="details">
	<div class="header">
		<div class="left">
			<router-link :to="{path:'/shou'}"><img src="../../static/images/home/goods/back.png"/></router-link>
		</div>
		<div class="center">
		  <mu-tabs :value="activeTab" @change="handleTabChange">
		    <mu-tab value="detailshop" title="商品"/>
		    <mu-tab value="detailxq" title="详情"/>
		    <mu-tab value="detailevaluate" title="评价"/>
		  </mu-tabs>
		  
		 </div>
		 <div class="right">
		 	<img src="../../static/images/home/goods/cart.png"/>
		 </div>
	</div>
	<div class="main">
		<div v-if="activeTab === 'detailshop'">
	    <detailshop></detailshop>
	  </div>
	  <div v-if="activeTab === 'detailxq'">
	    <detailxq></detailxq>
	  </div>
	  <div v-if="activeTab === 'detailevaluate'">
	    <detailevaluate></detailevaluate>
	  </div>
	</div>
   </div>
</template>

<script>
	import detailshop from "@/components/DetailShop"
	import detailxq from "@/components/DetailXQ"
	import detailevaluate from "@/components/DetailEvaluate"
export default {
	components:{
		detailshop:detailshop,
		detailxq:detailxq,
		detailevaluate:detailevaluate
	},
  data () {
    return {
      activeTab: 'detailshop'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<style scoped>
	.details{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.header{
		width: 100%;
		height: 0.58rem;
		/*background: pink;*/
		display: flex;
		flex-direction: row;
		border-bottom: 0.02rem solid #f0f0f0;
		position: fixed;
		left: 0;
		top: 0;
	}
	.header .left{
		width: 20%;
	}
	.header .left img{
		width: 0.3rem;
		height: auto;
		margin-top: 0.12rem;
		margin-left: 0.1rem;
	}
	.header .center{
		flex: 1;
	}
	.header .right{
		width: 20%;
		text-align: center;
		margin-top: 0.1rem;
	}
	.header .right img{
		width: 0.34rem;
		height: auto;
	}
	.main{
		flex: 1;
		overflow-y: auto;
		margin-top: 0.58rem;
		/*background: #efefef;*/
	}
	.mu-tabs{
		background: white;
	}
	[type=reset], [type=submit], button, html [type=button]{
		color: black;
	}
</style>

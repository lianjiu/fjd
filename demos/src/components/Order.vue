<template>
  <div class="order">
   <div class="header">
   	<div class="a"><router-link :to="{path:'/my'}"><img src="../../static/images/home/goods/back.png"/></router-link></div>
   	<div class="b">
   		全部订单
   	</div>
   </div>
   
   <div class="nav">
	  <mu-tabs :value="activeTab" @change="handleTabChange">
	    <mu-tab value="tab1" title="全部订单"/>
	    <mu-tab value="tab2" title="待支付"/>
	    <mu-tab value="tab3" title="待收货"/>
	    <mu-tab value="tab4" title="待评论"/>
	  </mu-tabs>
	  <div v-if="activeTab === 'tab1'">
	    <tab1></tab1>
	  </div>
	  <div v-if="activeTab === 'tab2'">
	    <tab2></tab2>
	  </div>
	  <div v-if="activeTab === 'tab3'">
	    <tab3></tab3>
	  </div>
	  <div v-if="activeTab === 'tab4'">
	    <tab4></tab4>
	  </div>
   </div>
   
  </div>
</template>

<script>
	import tab1 from "@/components/tab1"
	import tab2 from "@/components/tab2"
	import tab3 from "@/components/tab3"
	import tab4 from "@/components/tab4"
	
export default {
	components:{
		tab1:tab1,
		tab2:tab2,
		tab3:tab3,
		tab4:tab4
	},
	 data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.order{
		flex: 1;
		display: flex;
		flex-direction: column;
		background: #efefef;
	}
	.header{
		width: 100%;
		height: 0.47rem;
		background: white;
		display: flex;
		flex-direction: row;
		border-bottom: 0.01rem solid #f0f0f0;
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
	.mu-tabs{
		background: white;
	}
	[type=reset], [type=submit], button, html [type=button]{
		color: black;
	}
</style>

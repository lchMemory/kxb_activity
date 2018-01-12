<template>
	<div>
		<div class="container2">
			<div class="myPrize text_color_red">你可领取：{{money}}元<button @click="go_home">返回到活动页</button></div>
			<table class="gridtable">
				<tr>
				    <th>获取方式</th><th>红包价值（元）</th>
				</tr>
				<tr v-for="(data,index) in tablelist">
				    <td>{{data.rewardclassValue}}</td>
					<td>{{data.RewardTypeValue}}</td>
				</tr>
			</table>
			<img v-show="loading" src="../static/images/img_no_data.png" alt="" class="space_img">
			<p class="loadmore" @click="loadMore">{{viewMore}}</p>
		</div>
	</div>
</template>

<script>
	import router from '../router'
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				viewMore:"点击查看更多",
				loading:false,
				current:1,
				total:0,
				money:'',
				msg:'loading...',
				tablelist:'',
			}
		},
		mounted(){
			axios.get(`${baseURL}newwx/rewardBase_queryDataByRewardType.action?loginUserCode=${userCODE}&RewardSubType=1&pageIndex=${this.current}`).then(res=>{
				this.tablelist=res.data.data
				if(this.tablelist.length==0){
					this.loading=true;
				}
				this.money=res.data.hbtotal
				let count=res.data.data.pagecount%10;
				this.total=Math.floor(res.data.data.pagecount/10)
				if(count!=0){
					this.total++;
				}
			});
			
		},
		methods:{
			go_home(){
				this.$router.push({ path: '/home' })
			},
			loadMore() {
				this.current++;
				if(this.current>=this.total){
					this.viewMore="没有更多了哦~";
					return
				}else {
					axios.get(`${baseURL}newwx/rewardBase_queryDataByRewardType.action?loginUserCode=${userCODE}&RewardSubType=1&pageIndex=${this.current}`).then(res=>{
						this.tablelist=[...this.tablelist,...res.data.data];
					});
				}
			}
		},
		computed:{
		  userName(){
		    return this.$store.state.appname
		  }
		}
	}
</script>
<style lang="scss">
    .space_img{height:19rem;width:17.5rem;margin:0 auto;display:block}
	.container2 {padding:0 2rem}
	.text_color_red{color:#f00;font-size:1.2rem}
	button{height:3rem;background:#f60;color:#fff;border:none;width:10rem;line-height:3rem;float:right;margin-top:1rem}
	table{
		width:33.5rem;
		font-family: verdana,arial,sans-serif;
		font-size:1.2rem;
		color:#f78121;
		border-width: 1px;
		border-color: #eaeaea;
		border-collapse: collapse;
		th {
			border-width: 1px;
			padding: 8px;
			border-style: solid;
			border-color: #eaeaea;
			background-color: #dedede;
			text-align:center;
		}	
		td {
		    border-width: 1px;
		    padding: 8px;
		    border-style: solid;
		    border-color: #eaeaea;
		    background-color: #ffffff;
		    text-align:center;
		}
	}
	.loadmore{height:6.2rem;line-height:6.2rem;text-align:center;font-size:2rem;color:#a2a1a1}
	.myPrize{height:5rem;line-height:5rem}
</style>
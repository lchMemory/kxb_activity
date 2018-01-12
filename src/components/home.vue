<template>
<div class="container">
	<div class="header"><img src="../static/images/ttl_title.png" alt="" width="100%"></div>
	<div class="user_btn text-center" id="btn_user">
		<img src="../static/images/btn_top_01.png" alt="" @click="shareTrue"><a href="javascript:void(0)" @click="goAnchor('#store')"><img src="../static/images/btn_top_02.png" alt=""></a>
	</div>
	<div class="user_btn text-center fix_btn" v-show="fix">
		<img src="../static/images/btn_top_01.png" alt="" @click="shareTrue"><a href="javascript:void(0)" @click="goAnchor('#store')"><img src="../static/images/btn_top_02.png" alt=""></a>
	</div>
	<div class="text_center chance_top"><p>已经恭候你多时，你有<span class="red"> {{chance}} </span>次翻牌机会</p></div>
	<div class="cards_area">
		<ul class="prize-list">
	      	<li class="prize"
	          v-for="(item,index) in selectedIndexList"
	          @click="isFlipCards&&selectPrize(index)">
	        	<div class="font"
	             :class="{'rotate':!item.flag}" v-html>
	             <p class="text_color3 text_center" :class="{'selected':selected==index}">{{item.prize[0]}}<br/>{{item.prize[1]}}</p>
	        	</div>
	        	<div class="back"
	             :class="{'rotate':!item.flag}">
	         	</div>
	      	</li>
		</ul>
		<div class="flipCard_btn text_center">
			<img src="../static/images/btn_card.png" alt="" @click="flipCards">
		</div>
		<p class="text_center text_color margin_top30">后宫佳丽三千，不过瘾，还想多翻几次？<br/>邀请身边<span class="text_gold">保险从业人员</span>注册保咖联盟<br/>并<span class="text_gold">通过审核</span>后,您可获得一次抽奖机会  </p>
		<p class="text_center text_color margin_top10">被邀成功的保险人即为您的“忠臣”<br/>“ 忠臣”也可获一次抽奖机会</p>
		<div class="flipCard_btn text_center">
			<img src="../static/images/btn_share.png" alt="" @click="shareTrue">
		</div>
		<p class="text_center text_color margin_top30">再邀请 {{invate_people}} 人即获得下一关京东E卡奖励！</p>
	<div class="invitation">
		<div class="invate_card7" :class="{number_off:people>=18,number_on:people<18,number:people==0}">
			<p class="people_text textColor">18人</p>
			<p v-if="people>=18" class="margin_top13">已点亮</p>
			<p v-else class="margin_top13 textColor">
 				E卡100元
			</p>
		</div>
		<img src="../static/images/icon_arrow.png" alt="">
		<div class="invate_card7" :class="{number_off:people>=28,number_on:people>18&&people<28,number:people<=18}">
			<p class="people_text textColor">28人</p>
			<p v-if="people>=28" class="margin_top13">已点亮</p>
			<p v-else class="margin_top13 textColor">
 				E卡150元
			</p>
		</div>
		<img src="../static/images/icon_arrow.png" alt="">
		<div class="invate_card7" :class="{number_off:people>=38,number_on:people>28&&people<38,number:people<=28}">
			<p class="people_text textColor">38人</p>
			<p v-if="people>=38" class="margin_top13">已点亮</p>
			<p v-else class="margin_top13 textColor">
 				E卡200元
			</p>
		</div>
		<img src="../static/images/icon_arrow.png" alt="">
		<div class="invate_card7" :class="{number_off:people>=48,number_on:people>38&&people<48,number:people<=38}">
			<p class="people_text textColor">48人</p>
			<p v-if="people>=48" class="margin_top13">已点亮</p>
			<p v-else class="margin_top13 textColor">
 				E卡250元
			</p>
		</div>
		<div class="invate_card7" :class="{number_off:people>=58,number_on:people>48&&people<58,number:people<=48}">
			<p class="people_text textColor">98人</p>
			<p v-if="people>=58" class="margin_top13">已点亮</p>
			<p v-else class="margin_top13 textColor">
 				E卡500元
			</p>
		</div>
		<img src="../static/images/icon_arrow.png" alt="" style="-webkit-transform:rotate(180deg);transform:rotate(180deg)">
		<div class="invate_card7" :class="{number_off:people>=78,number_on:people>58&&people<78,number:people<=58}">
			<p class="people_text textColor">78人</p>
			<p v-if="people>=78" class="margin_top13">已点亮</p>
			<p v-else class="margin_top13 textColor">
 				E卡400元
			</p>
		</div>
		<img src="../static/images/icon_arrow.png" alt="" style="-webkit-transform:rotate(180deg);transform:rotate(180deg)">
		<div class="invate_card7" :class="{number_off:people>=98,number_on:people>78&&people<98,number:people<=98}">
			<p class="people_text textColor">58人</p>
			<p v-if="people>=98" class="margin_top13">已点亮</p>
			<p v-else class="margin_top13 textColor">
 				E卡300元
			</p>
		</div>
	</div>
	<div class="text_center chance_foot"></div>
	</div>
	<div class="activity_rules text_center"><img src="../static/images/ttl_rule.png" alt=""></div>
	<ul class="text_color activity_text" >
		<li>1.活动时间为2018.1.15——2018.2.15</li>
		<li>2.邀请注册审核成功，才能获得相应奖励，审核不通过不可获得奖励。新用户注册审核成功，即可参与活动。</li>
		<li>3.国库增收的京东E卡按照总邀请人数量发放，不叠加。</li>
	</ul>
	<ul v-show="click_true" class="text_color activity_text" >
		<li>4.活动所有奖励在活动结束10个工作日内发放，奖励发放前，您可在“我的国库收入”中查看。</li>
		<li>5.京东E卡会以卡密形式发送给您，可以用于京东自营产品的抵值。</li>
		<li>6.对活动有任何疑问，可添加联盟小保微信（kxttong）进行咨询。</li>
		<li>7.本活动最终解释权归保咖联盟所有。</li>
	</ul>
	<p class="view_rule"><img src="../static/images/show_arrow.png" alt="" :class="{change_up:click_true}"@click="trans_up"></p>
	<div class="text_center activity_rules" @click="inventory" id="store"><img src="../static/images/ttl_prize.png" alt=""></div>
	<div class="getHongBao">
		<p class="text_color recive">已获得红包</p>
		<p v-if="prize_show.length==0? true : false" class="text_center text_color2">皇上<br/>还没有红包奖励哦</p>
		<div class="text_color2" v-else>
			<p class="text_center hb_color">￥{{this.prize_show[0]}}</p>
			<div class="list">
				<ul  :class="animate ? 'trans' : '' ">
					<li class="show_list" v-for="(data,index) in marqueeList">{{data}}</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="getHongBao">
		<p class="text_color recive">已获得奖品</p>
		<p v-if="dataList.length==0? true : false" class="text_center text_color2">皇上<br/>快去邀请得奖品吧</p>
		<div v-else class="my_prize">
			<p class="text_color more_prize" v-for="(data,index) in dataList"><span class="m_distance">{{data.rewardclassValue}}</span><span>{{data.RewardTypeValue}}</span></p>
		</div>
		<p v-show="dataList.length>3? true : false" class="dot"><span></span><span></span><span></span><span></span><span></span><span></span></p>
	</div>
	<div @click="goPrize" class="seePrize text_color">查看奖励明细</div>
	<!-- 弹窗-->
	<div class="share" v-show="share" @click="shareTrue">
		<img src="../static/images/img_share_01.png" alt="" class="top_img">
		<img src="../static/images/img_share_02.png" alt="" class="foot_img">
	</div>
	<div class="share_card_prize" v-show="share_prize">
		<div class="share_content">
			<p>恭喜您，奖励已经放入您的国库</p>
			<p @click="addChance"><img src="../static/images/icon_popup_03.png" alt="" class="pop_icon">再翻一次</p>
			<p @click="viewStore"><img src="../static/images/icon_popup_04.png" alt="" class="pop_icon">查看国库</p>
			<p @click="iKnow"><img src="../static/images/icon_popup_05.png" alt="" class="pop_icon">我知道了</p>
		</div>
	</div>
	<div class="share_card_prize" v-show="show_prize">
		<div class="share_content">
			<p v-if="this.people<18? true : false">您已获取邀请奖励，邀请更多好友还可兑换更高级奖励哦！</p>
			<p v-else>你已经获得{{reward_value}}活动结束后将发送至{{userName}}账户中</p>
			<p @click="go_invate"> <img src="../static/images/icon_popup_01.png" alt="" class="pop_icon"> 马上去邀请 </p>
			<p @click="goback_page"> <img src="../static/images/icon_popup_02.png" alt="" class="pop_icon"> 返回活动页 </p>
		</div>
	</div>
</div>
</template>
<script>
	import Vue from 'vue';
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				loginUserMobile:'',
				click_true:false,
				dataList:[],
				fix:false,
				allow:true,
				marqueeList:[],
				chance:0,
				people:'',
				invate_people:'',
				show_prize:false,
				reward_value:'',
				animate:false,
				share:false,
				share_prize:false,
				prize_show:[],
				rewardList:'',
				keyArr:[],
				selectedIndexList: [
				  {
				    prize:['',''],
				    flag: true
				  },
				  {
				    prize: ['',''],
				    flag: true
				  },
				  {
				    prize: ['',''],
				    flag: true
				  },
				  {
				    prize: ['',''],
				    flag: true
				  },
				  {
				    prize: ['',''],
				    flag: true
				  },
				  {
				    prize: ['',''],
				    flag: true
				  }
				],
				selected:-1,
			}
		},
		computed:{
			userName(){
				return this.$store.state.appname
			},
			isFlipCards(){
				if (this.chance>0&&this.allow){
					return true
				}else{
					return false
				}
			}
		},
		mounted(){
			Indicator.open('Loading...');
			axios.get(baseURL+'newwx/rewardBase_queryIndex.action?loginUserCode='+userCODE).then(res=>{
				//获取已获得奖品
				this.dataList=res.data.map4data;
				//获取用户信息
				this.loginUserMobile=res.data.loginUserMobile
				this.$store.dispatch('UPDATE_NAME',this.loginUserMobile);
				//获取已经邀请人数
				this.people=res.data.usercount;
				let people=this.people;
				if(this.people<18){
					this.invate_people=18-people;
				}else if(people>=18&&people<28){
					this.invate_people=28-people;
					this.reward_value='E卡100元'
				}else if(people>=28&&people<38){
					this.invate_people=38-people;
					this.reward_value='E卡150元'
				}else if(people>=38&&people<48){
					this.invate_people=48-people;
					this.reward_value='E卡200元'
				}else if(people>=48&&people<58){
					this.invate_people=58-people;
					this.reward_value='E卡250元'
				}else if(people>=58&&people<78){
					this.invate_people=78-people;
					this.reward_value='E卡300元'
				}else if(people>=78&&people<98){
					this.invate_people=98-people;
					this.reward_value='E卡400元'
				}else if(people>=98){
					this.invate_people=0;
					this.reward_value='E卡500元'
				}
				//获取奖品信息
					for(let i=0;i<res.data.userlist.length;i++){
						this.marqueeList.push('你的好友'+res.data.userlist[i].mobile+'注册成功')
					}
				//获取抽奖列表
					this.rewardList=res.data.rewardInfoList
					let arr=[];
					for (let item in res.data.rewardInfoList){
						this.keyArr.push(item)
						arr.push(res.data.rewardInfoList[item])
					}
					for (let j=0;j<arr.length;j++){
						this.selectedIndexList[j].prize[0]=arr[j].rewardTypeValue0
						this.selectedIndexList[j].prize[1]=arr[j].rewardTypeValue1
					}

				//获得奖品列表
				this.prize_show=res.data.rewardDataList
				//获得抽奖次数
				this.chance=res.data.lotteryCount;
				Indicator.close();

				setTimeout(()=>{
					if(this.$el.querySelector('.number_on')){
						this.$el.querySelector('.number_on').onclick=()=>{
						this.show_prize=!this.show_prize
						}
					}
				},1000)
			})
			let scroll_top=this.$el.querySelector('#btn_user').offsetTop;
			window.addEventListener('scroll', this.btn);
		},
		created: function () {
		        setInterval(this.showMarquee, 3500);
		        },
        methods: {
        	trans_up(){
        		this.click_true=!this.click_true
        	},
        	btn() {
        	  this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        	  let scroll_top=this.$el.querySelector('#btn_user').offsetTop;
				window.addEventListener('scroll', this.btn);
				if(this.scroll>scroll_top+23){
				this.fix=true
				}else{
				this.fix=false
				}
        	},
        	goback_page(){
        		this.show_prize=!this.show_prize
        	},
        	go_invate(){
        		this.show_prize=!this.show_prize
				this.share=!this.share
        	},
        	addChance(){
        		if(this.chance>0){
					this.selectedIndexList=this.selectedIndexList.map((item)=>{
					item.flag=true
					return item
				})
        		}else{
        			this.share=!this.share
        		}
				this.share_prize=!this.share_prize
        	},
        	viewStore(){
				this.share_prize=!this.share_prize
				this.selectedIndexList=this.selectedIndexList.map((item)=>{
					item.flag=true
					return item
				})
				setTimeout(()=>{
					let anchor = this.$el.querySelector('#store')
					window.scrollTo(0,anchor.offsetTop)},500)
        	},
        	iKnow(){
				this.share_prize=!this.share_prize;
				this.selectedIndexList=this.selectedIndexList.map((item)=>{
					item.flag=true
					return item
				})
        	},
        	goAnchor(selector) {
        	        let anchor = this.$el.querySelector(selector)
        	        window.scrollTo(0,anchor.offsetTop)
        	},
        	goPrize(){
				this.$router.push({ path: 'myReward' })
        	},
        	selectPrize(index) {
        	  this.allow=false;
        	  setTimeout(()=>{
        	  	this.allow=true;
        	  },3000)
        	  let flag = false
        	  for (let i = 0; i < this.selectedIndexList.length; i++) {
        	    if (!this.selectedIndexList[i].flag) {
        	      flag = true
        	      break
        	    }
        	  }
        	  if (flag) {
				this.$indicator.open('抽奖中');
        	  	//获取当前中奖信息
        	  	this.chance--;
        	  	let num = index;
        	  	axios.get(baseURL+'newwx/rewardBase_saveRewardInfo.action?loginUserCode='+userCODE+'&Rewardclass=0').then(res=>{
					 let keys = JSON.parse(JSON.stringify(this.keyArr))
					 let mark= res.data.data;
        	  		 let zIndex = keys.indexOf(mark);
        	  		 keys.splice(zIndex, 1);
        	  		 this.selectedIndexList[num].prize[0] = this.rewardList[mark].rewardTypeValue0;
        	  		 this.selectedIndexList[num].prize[1] = this.rewardList[mark].rewardTypeValue1;

        	  		 for(let i=0; i< this.selectedIndexList.length; i++) {
        	  		 	if(i == num) continue;
        	  		 	let _k = keys.sort(function(){ return 0.5 - Math.random() })[0];
        	  		 	this.selectedIndexList[i].prize[0] = this.rewardList[_k].rewardTypeValue0;
        	  		 	this.selectedIndexList[i].prize[1] = this.rewardList[_k].rewardTypeValue1;
        	  		 	let zIndex = keys.indexOf(_k);
        	  		 	keys.splice(zIndex, 1);
        	  		 }
        	  		 	this.selected=index;
        	  		 	this.selectedIndexList[num].flag = true;
        	  		 	this.$indicator.close()
        	  		 	setTimeout(()=>{
 									this.share_prize=true;
 								},1500)

        	  		 	axios.get(baseURL+'newwx/rewardBase_queryIndex.action?loginUserCode='+userCODE).then(res=>{
        	  		 		this.prize_show=res.data.rewardDataList;
							this.dataList=res.data.map4data;
        	  		 	})
        	  	})
        	  }

        	},
            showMarquee () {
                this.animate = true;
                setTimeout(()=>{
                this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;
            },500)},
            inventory (){
				this.toggle=!this.toggle
            },
            shareTrue(){
            	this.share=!this.share
            },
            flipCards(){
				if(this.chance==0){
					this.share=!this.share
				}
				if(!this.isFlipCards){
					return
				}
        	   	this.selectedIndexList=this.selectedIndexList.map((item)=>{
					item.flag=false
					return item
				})
            }
        }
	}
</script>
<style lang="scss" scoped>
.dot {
	text-align:center;
	margin-left:-9rem;
	span{display:inline-block;height:0.2rem;width:0.2rem;border-radius:50%;background:#e2bd81;margin:0 0.2rem}
	}
.view_rule{
	margin-top:1rem;
	text-align:center;
	img{width:1.8rem;
		height:1rem;
	}
	.change_up{-webkit-transform:rotate(180deg);
		transform:rotate(180deg);
	}
}
.fix_btn{position:fixed;top:0;z-index:1}
.text_gold{color:#ff9e00}
.selected{
	font-size: 1.2rem;
	color: #f60 !important
}
.pop_icon{height:2rem;width:2rem;margin-right:1rem}
.container{
	overflow:hidden;
	width:100%;
	height:100%;
	background-size:37.5rem 50rem;
	background-color:#1d2d51;
	background-repeat: no-repeat;
	background-image:url(../static/images/bg_body.jpg);
}
.header{margin:1rem 0 1.2rem}
.user_btn{
	width:22rem;margin:0 7.75rem;
	display:flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;
	-webkit-justify-content: space-around;
	-moz-justify-content: space-around;
	-ms-justify-content: space-around;
	-o-justify-content: space-around;
	justify-content: space-around;
	img{display:inline-block;width:9.4rem;height:2.3rem;}
}
.getHongBao{
	overflow:hidden;
	background:url(../static/images/bg_section.png);
	background-size:26.2rem 12.8rem;
	background-position:center;
	height:12.8rem;
	width:26.2rem;
	margin:0 auto 1.5rem;
	.list{
		height:3.6rem;overflow:hidden;margin-left:2rem;
	}
	.show_list{line-height:1.2rem;-webkit-line-height:1.2rem;text-align:center;height:1.2rem}
	.trans{
	margin-top:-1.2rem;transition:all 0.5s
	}
	.recive{margin:2.5rem 0 0 6rem;font-size:1.5rem}
	.text_color2{color:#868380;margin-left:-9rem;
		.hb_color{color:#f00;font-size:2rem;margin-left:2rem}
	}
	.m_distance{width:8rem;margin:0 1rem 0 2rem;display:inline-block}
	.my_prize{height:5.4rem;overflow:hidden;
		.more_prize{height:1.8rem}
	}
}
li{list-style:none}
.activity_text{width:31.5rem;margin:0 auto}
.activity_rules{
	padding:2.2rem;
	img{width:23.3rem;height:3rem;}
}
.margin_top30{margin-top:3rem}
.margin_top10{margin-top:1rem}
.text_color{color:#e2bd81;line-height:1.8rem;-webkit-line-height:1.8rem;}
.flipCard_btn img {width:9.7rem; height:2.3rem;margin-top:1rem}
.chance_top {
	background:url(../static/images/bg_repeat_top.png);
	background-size:30rem 2.6rem;
	background-position:center top;
	height:2.6rem;
	line-height:2.6rem;
	-webkit-line-height:2.6rem;
	width:30rem;
	margin:0 auto;
  }
  .chance_foot {background:url(../static/images/bg_repeat_down.png);
	background-size:30rem 2.5rem;
	background-position:center;
	height:1.6rem;
	width:30rem;
	margin:0 auto;
  }
  .cards_area{
  	background:url(../static/images/bg_repeat_line.png) repeat-y;
	background-size:30rem 100%;
	background-position:center;
	width:30rem;
	margin:0 auto;}
#test{height:32rem;width:32rem;background:#ff0}
.prize-list li:nth-of-type(1) .back{background:url(../static/images/img_card_01.png);
	background-size:6.5rem 8.2rem;
 }
.prize-list li:nth-of-type(2) .back{background:url(../static/images/img_card_02.png);
	background-size:6.5rem 8.2rem;
 }
 .prize-list li:nth-of-type(3) .back{background:url(../static/images/img_card_03.png);
	background-size:6.5rem 8.2rem;
 }
 .prize-list li:nth-of-type(4) .back{background:url(../static/images/img_card_04.png);
	background-size:6.5rem 8.2rem;
 }
 .prize-list li:nth-of-type(5) .back{background:url(../static/images/img_card_05.png);
	background-size:6.5rem 8.2rem;
 }
 .prize-list li:nth-of-type(6) .back{background:url(../static/images/img_card_06.png);
	background-size:6.5rem 8.2rem;
 }
 .prize-list .font{background:url(../static/images/bg_card_def.png);
	background-size:6.5rem 8.2rem;
 }
.red{color:#f00}
.prize-list {
  padding:0 3rem;
  display: flex;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -o-flex-wrap: wrap;
  flex-wrap: wrap;
  display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;
  li{width:6.5rem}
}

.prize {
  list-style:none;
  position: relative;
  width: 6.5rem;
  height: 8.2rem;
  margin: 0.5rem 0.7rem;
  div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility:hidden;
    -moz-backface-visibility:hidden;
    -ms-backface-visibility:hidden;
    transition: all 1s;
  }
  .font {
  	display:flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;
    color: #000;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    -webkit-align-items:center;
    -moz-align-items:center;
    -ms-align-items:center;
    -o-align-items:center;
    align-items:center;
    font-size:1.2rem;
    &.rotate {
      transform: rotateY(-180deg);
      -webkit-transform: rotateY(-180deg);
    }
    .text_color3{color:#ffa332;}
    }
  .back {
    background-color: #ccc;
    transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    &.rotate {
      transform: rotateY(-360deg);
      -webkit-transform: rotateY(-360deg);
    }
  }
}
.selected-prize-class {
  color: red;
}
.text_center{
	text-align:center
}
.invitation{
	img{height:0.7rem;width:0.7rem}
	width:24rem;padding:0 3rem;
	margin:0 auto;
	text-align:center;
	-webkit-flex-wrap: wrap;
	-moz-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	-o-flex-wrap: wrap;
	flex-wrap: wrap;
	display:flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-webkit-align-items:center;
	-moz-align-items:center;
	-ms-align-items:center;
	-o-align-items:center;
	align-items:center;
  	.invate_card7{width:5rem;height:6.8rem;margin:1rem 0;position:relative;
		background-size:5rem 6.8rem;
		background-position:center;
		font-size:0.8rem;
		overflow:hidden;
		.people_text{
			margin-top:2.7rem;
			margin-left:-0.7rem;
		}
		.margin_top13{margin-top:1.3rem;margin-left:-0.2rem;}
  	}
	.number_off{background-image:url(../static/images/bg_number_off.png);
	}
	.number_on{
		background-image:url(../static/images/bg_number_on.png);
		.textColor{color:#f29f1f}
	}
	.number{
		background-image:url(../static/images/bg_number.png);
		.textColor{color:#88522d};
	}
}
.share{
	z-index:5;
	font-size:2rem;
	position:fixed;
	color:#fff;
	background:rgba(0,0,0,0.7);
	height:100%;
	width:100%;
	box-sizing:border-box;
	left:0;top:0;
	.top_img{width:27.5rem;height:17.2rem;position:absolute;top:0;right:0}
	.foot_img{width:20.8rem;height:25.9rem;position:absolute;right:0;bottom:0}
}
.share_card_prize{
	z-index:5;
	position:fixed;
	background:rgba(0,0,0,0.7);
	height:100%;
	width:100%;
	box-sizing:border-box;
	left:0;top:0;
	display:flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-webkit-align-items:center;
	-moz-align-items:center;
	-ms-align-items:center;
	-o-align-items:center;
	align-items:center;
	padding:5rem;
	.share_content{
		background:#fff;
		p{height:3rem;
			display:flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;
			-webkit-justify-content: center;
			-moz-justify-content: center;
			-ms-justify-content: center;
			-o-justify-content: center;
			justify-content: center;
			-webkit-align-items:center;
			-moz-align-items:center;
			-ms-align-items:center;
			-o-align-items:center;
			align-items:center;
			font-size:1.5rem;border-bottom:1px solid #ccc;padding:1rem 2rem}
	}
}
.seePrize{height:2rem;line-height:2rem;-webkit-line-height:2.6rem;text-align:right;width:30rem;font-size:1.2rem;margin-bottom:2rem}
</style>

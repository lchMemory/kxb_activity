<template>
	<div>
		<div class="header">
			<ul class="change">
				<router-link to="/myReward/h-reward" tag="li"><span class="bg1"></span>红包奖金<div></div></router-link>
				<router-link to="/myReward/s-reward" tag="li"><span class="bg2"></span>实物奖励<div></div></router-link>
			</ul>
			<div class="border"></div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default{

}

</script>
<style lang="scss" scoped>
body{
	background-image:url();
	background-color:#fff;
}
.header{
	ul{
		height:5.6rem;display:flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;
		li{
			flex:1;
			-webkit-flex:1;
			text-align:center;
			height:5.6rem;
			line-height:5.6rem;
			list-style:none;
			font-size:1.9rem;
		}
	}
}
.change{
	border-bottom:2px solid #f60;
	div{
		position:absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 1rem solid #f60;
		left:10rem;
		bottom:0;
		display:none;
	}
	li{position:relative}
}
.change span{margin-right:1rem}
.bg1{display:inline-block;height:1.7rem;width:1.7rem;background:url(../static/images/icon_sign_01.png);
	background-size:1.7rem 1.7rem;
}
.active .bg1{display:inline-block;height:1.7rem;width:1.7rem;background:url(../static/images/icon_sign_01_on.png);
	background-size:1.7rem 1.7rem;
}
.bg2{display:inline-block;height:1.7rem;width:1.7rem;background:url(../static/images/icon_sign_02.png);
	background-size:1.7rem 1.7rem;
}
.active .bg2{display:inline-block;height:1.7rem;width:1.7rem;background:url(../static/images/icon_sign_02_on.png);
	background-size:1.7rem 1.7rem;
}
.active{color:#f60;
	div{display:block}
}
</style>

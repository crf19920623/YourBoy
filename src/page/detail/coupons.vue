<template>
	<div class="coupons">
		<div class="coupons-price">
			&yen;<span class="coupons-price-num">5</span>
		</div>
		<div class="coupons-info">
			<div class="coupons-name mp-ellipsis">
				先领券再泡汤
			</div>
			<span class="coupons-desc">-门票新客代金券-</span>
		</div>
		<div class="coupons-btn">立即领取</div>
	</div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
	.coupons {
		position: relative;
		width: 81.3%;
		height: 1.6rem;
		margin: 0 auto;
		margin-top: .1rem;
		background-image: linear-gradient(to right, #ffd033, #ff5d11);
		border-radius: .06rem;
	}
	.coupons::before {
		content: '\0020';
		position: absolute;
		top: 50%;
		right: -.15rem;
		margin-top: -.15rem;
		width: .3rem;
		height: .3rem;
		background: #fff;
		border-radius: 50%;
	}
	.coupons-price {
		width: 25%;
		height: 1.6rem;
		font-size: .32rem;
		line-height: 1.6rem;
		text-align: right;
		color: #fff;
		float: left;
	}
	.coupons-price-num {
		font-size: 1rem;
		margin-left: .1rem;
	}
	.coupons-info{
		width: 55%;
		float: left;
		font-size: .32rem;
		color: #fff;
		text-align: center;
	}
	.coupons-name {
		padding-top: .36rem;
		font-size: .36rem;
		line-height: .5rem;
	}
	.coupons-desc {
		font-size: .24rem;
		line-height: .34rem;
	}
	.coupons-btn{
		float: left;
		width: .28rem;
		border-left: .02rem dotted rgba(255, 255, 255, .5);
		padding: .25rem .4rem;
		color: #fff;
	}
</style>
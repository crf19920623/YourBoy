<template>
<div>
  <div class="landscape-module">
        <div class="caption-title">
          <div class="caption-inner landscape-inner">
            <div class="caption-wrap landscape-wrap">
              <div class="caption-txt landscape-txt">
                山水温泉
              </div>
            </div>
          </div>
        </div>
        <div class="caption-desc">
          远离城市的喧嚣，在私密的山水温泉中恢复活力。泡汤同时还能享受美景和清新的空气，治愈一周疲惫的你。
        </div>
      </div>  
	<div class="landscape-main" ref="landscapeMain" v-for="item in landscapeInfo">
		<div class="landscape-img-con">
			<img class="landscape-img" :src="item.img" alt="">
			<span class="landscape-img-city">北京</span>
		</div>
		<div class="landscape-info">
			<div class="landscape-name">{{item.name}}</div>
			<div class="landscape-sign-price">
				<div class="landscape-price">
  				&yen;<span class="landscape-num">{{item.price}}</span>
  			</div>
				<div class="landscape-sign">
  				<li class="sign-one">{{item.sign1}}</li>
  				<li class="sign-two">{{item.sign2}}</li>
  				<li class="sign-three">{{item.sign3}}</li>
  			</div>
			</div>
			<div class="landscape-desc">
				{{item.desc}}
			</div>
			
		</div>
	</div>
</div>
</template>

<script>
  export default {
    name: 'app',
    props: ['landscapeInfo']
  }
</script>

<style scoped>

  .caption-title {
    margin-top: .2rem;
    text-align: center;
  }
  .caption-inner {
    display: inline-block;
    position: relative;
    overflow: hidden;
    max-width: 60%;
    height: .5rem;
    padding: 0 .8rem;
    text-align: center;
    margin: 0 auto;
  }
  .caption-inner::after {
    content: '\0020';
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    width: 100%;
    height: .02rem;
    background-image: linear-gradient(to right,#ffa305,#ff431d);
  }
  .landscape-inner::after{
    background-image: linear-gradient(to right,#4bdb71,#31cbd3);
  }
  .health-inner::after{
    background-image: linear-gradient(to right,#c12aff,#4c90ff);
  }
  .caption-wrap {
    display: inline-block;
    position: relative;
    z-index: 2;
    padding: 0 .2rem;
    background-color: #fff;
    overflow: hidden;
  }
  .caption-wrap::before, .caption-wrap::after{
    content: '\0020';
    overflow: hidden;
    position: absolute;
    top: 50%;
    margin-top: -.04rem;
    width: .08rem;
    height: .08rem;
    border-radius: 50%;   
  }
  .caption-wrap::before { 
    left: .04rem;  
    background: #ffa305;
  }
  .caption-wrap::after {
    right: .04rem;
    background: #ff431d;
  }
  .landscape-wrap::before { 
    left: .04rem;  
    background: #4bdb71;
  }
  .landscape-wrap::after {
    right: .04rem;
    background: #31cbd3;
  }
  .health-wrap::before {  
    left: .04rem;  
    background: #c12aff;
  }
  .health-wrap::after {
    right: .04rem;
    background: #4c90ff;
  }
  .caption-txt {
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    background-color: #fff;
    color: #000;
    font-size: .36rem;
    line-height: .5rem;
    text-overflow: ellipsis;
    background-image: linear-gradient(to right,#ffa305,#ff431d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
  }
  .landscape-txt {
    background-image: linear-gradient(to right,#4bdb71,#31cbd3);
  }
  .health-txt {
    background-image: linear-gradient(to right,#c12aff,#4c90ff);
  }
  .caption-desc{
    position: relative;
    margin: .1rem 0;
    min-height: .4rem;
    padding: 0 .52rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    text-align: justify;
  }
  .caption-desc::before, .caption-desc::after{
    content: '\0020';
    overflow: hidden;
    position: absolute;
    width: .32rem;
    height: .24rem;
  }
  .caption-desc::before {
    top: 0;
    left: .12rem;
    background: url(./../../assets/style/img/left.png) 0 0/contain no-repeat;
  }
  .caption-desc::after {
    right: .12rem;
    bottom: 0;
    background: url(./../../assets/style/img/right.png) 0 0/contain no-repeat;
  }
	.landscape-main{
  	margin: .3rem 0;
  }
  .landscape-img-con {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 39.4%;
		position: relative;
  }
  .landscape-img{
  	width: 100%;
  }
  .landscape-img-city{
  	display: block;
		position: absolute;
		top: .1rem;
		left: .1rem;
		padding: 0 .1rem;
		max-width: 78%;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		font-size: .24rem;
		border-radius: .44rem;
		line-height: .44rem;
		text-align: center;
  }
  .landscape-info{
  	padding: 0 .26rem;
  }
  .landscape-name{
  	margin-top: .2rem;
  	color: #212121;
  	line-height: .38rem;
  	font-size: .32rem;
  }
  .landscape-sign-price{
		margin: .08rem 0 .12rem;
  }
  .landscape-price{
  	float: right;
  	font-size: .24rem;
  	color: #ff8300;
  	line-height: .4rem;
  }
  .landscape-num{
  	font-size: .4rem;
  }
  .landscape-sign{
  	padding: .1rem 0 .04rem;
  	overflow: hidden;
    height: .34rem;
  }

  .sign-one,.sign-two,.sign-three{
		float: left;
		list-style:none;
		font-size: .24rem
  }
  .landscape-desc{
  	padding: .1rem .2rem;
  	background: #f6f6f6;
		color: #616161;
		border-radius:.04rem;
		font-size: .24rem;
		line-height: .34rem;
  }
</style>
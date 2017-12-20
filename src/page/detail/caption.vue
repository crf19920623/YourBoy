<template>
<div>
  <div class="module">
		  	<div class="caption-title">
		  		<div class="caption-inner">
		  			<div class="caption-wrap">
							<div class="caption-txt">
								超值温泉
							</div>
		  			</div>
		  		</div>
		  	</div>
		  	<div class="caption-desc">
		  		近千家温泉逐一甄选。价格不高，格调很高；水质、水温、环境、路途、服务...想你所想，为你所选！
		  	</div>
		  </div>
  <div class="spot-trick-main">
  	<div class="spot-trick"  v-for="item in spotTrickInfo">
  		<div class="spot-img">
  			<img class="spot-img-url" :src="item.img" alt="">
  			<span class="spot-img-city">北京</span>
  		</div>	    		
  		<div class="spot-con">
  			<div class="spot-top">
    			<div class="spot-title">{{item.title}}</div>
    			<div class="spot-desc">
    				<div class="spot-desc-one">{{item.desc1}}</div>
    				<div class="spot-desc-two">{{item.desc2}}</div>
    			</div>	
    		</div>
    		<div class="spot-bottom">
    			<span class="spot1">&yen;</span>
    			<span class="spot-newPrice">{{item.new}}</span>
    			<span class="spot-oldPrice">票面价&yen;{{item.old}}</span>    	
    			<span class="spot-btn">马上抢</span>    	
    		</div>
  		</div>	    		
  	</div>   
  </div>
</div>
</template>

<script>
  export default {
    name: 'app',
    props: ['spotTrickInfo']
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
	.spot-trick-main {
		width: auto;
		height: auto;
		overflow: hidden;
	}
	.spot-trick{
		position: relative;
		overflow: hidden;
		padding: .2rem 0;
	}
	.spot-img{
		width: 30%;
		position: relative;
		float: left;
	}
	.spot-img-url {
		width: 2rem;
		height: 1.8rem;
	}
	.spot-img-city {
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
	.spot-con {
		float: left;
		margin-left: .05rem;
		width: 67%;
		height: 1.8rem;
	}
	.spot-title {
		margin-right: .4rem;
		height: .76rem;
		color: #212121;
    font-size: .32rem;
    line-height: .38rem;
    overflow:hidden;
	}
		.spot-desc {
		width:100%;
		height: .34rem;
	}
	.spot-desc-one, .spot-desc-two {
		float:left;
		min-width: .48rem;
		padding: 0 .14rem;
		font-size: .24rem;
		line-height: .34rem;
	}

	.spot-desc-one {	
		color: #ff8300;
		padding-left: 0;

	}
	.spot-desc-two {
		color: #00afc7;
		padding-right: 0;
	}
	.spot-desc-two::before {
		top: 10%;
    height: 80%;
    border-color: #e0e0e0;
	}
	.spot-bottom {
		overflow: hidden;
		padding-top: .24rem;
		width: 100%;
		height: .44rem;
		line-height: .44rem;
  }
  .spot-bottom {
  	position: relative;
  	font-size: .24rem;
  	color: #616161;
  }
  .spot1 {
  	color: #ff8300;
  }
  .spot-newPrice {
  	font-size: .42rem;
  	color: #ff8300;
  }
  .spot-oldPrice {
  	text-decoration: line-through;
  }
  .spot-btn {
  	position: absolute;
  	right: 0;
  	bottom:0;
  	display: inline-block;
  	width: 1.1rem;
  	height: .56rem;
  	line-height: .56rem;
  	background-color: #ff8300;
  	color: #fff;
  	border-radius: .04rem;
  	text-align: center;
  	font-size: .28rem;
  }
</style>
<template>
	<div>
  	<header class="header">
  		<div class="back">返回</div>
  		<div class="search"></div>
  		<div class="city">城市</div>
  	</header>
  	<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style scoped>
	.header{
		display:flex;
		height:0.86rem;
		background:#05bad5;
		color:#fff;
	}
	.back{
		width:.64rem;
		line-height:.86rem;
	}
	.search{
		flex:1;
		margin:.14rem .18rem;
		background:#fff;
		border-radius:.1rem;
	}
	.city{
		width:1.14rem;
		line-height:.86rem;
		text-align:center;
	}
</style>

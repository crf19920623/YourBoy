<template>
	<div class="root">
		<header class='header'>
			<div class='back iconfont'>&#xe602;</div>
			<div class='search'><a href="#" class='prompt'><i class='icon-magnify iconfont'>&#xe636;</i>输入城市/景点/游玩主题</a></div>
      <router-link to="../location">
			  <div class='city'>{{city}}<i class='iconfont'>&#xe600;</i></div>
      </router-link>
		</header>

		<swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <swiper class="icon-swiper" :options="iconSwiper">
      <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
        <div v-for="item in pageInfo" :key="item.id" class="icon-item">
          <div class="icon-img-con">
            <img  class="icon-img" :src="item.imgUrl"/>
            <p class="icon-name">{{item.name}}</p>  
          </div>
        </div>
      </swiper-slide>
      <div class="pagination"  slot="pagination"></div>
    </swiper>

    <ul class="list-message" v-for="(item,index) in message" :key="index">
    	<li class="list-message-con list-message-location"><i class="iconfont">&#xe603;</i>{{item.name1}}</li>
    	<li class="list-message-con"><i class="iconfont">&#xe60b;</i>{{item.name2}}</li>
    </ul>

    <ul class="promotion" v-for="item in promotion">
      <li class="promotion-con promotion-con-left">
      	<img class="promotion-img" :src="item.imgLeft" alt="">
      </li>
      <li class="promotion-con">
      	<img class="promotion-img" :src="item.imgRight" alt="">
      </li>
    </ul>

    <main class="main">
    	<p class="headline">热销推荐</p>
    	<div class="hotPromotionCon" v-for="item in hotPromotionCon">
    		<img class="hotPromotionCon-img" :src="item.img" alt="">
    		<div class="hotPromotionCon-top">
    			<div class="hotPromotionCon-name">{{item.name}}</div>
    			<div class="hotPromotionCon-description">{{item.description}}</div>
    		</div>
    		<div class="hotPromotionCon-bottom">
    			<span class="hotPromotionCon1">￥</span>
    			<span class="hotPromotionCon-money">{{item.money}}</span>
    			起
    		</div>
    	</div>
    	<p class="hotPromotionAll">查看所有产品</p>
    	<p class="headline">周末去哪儿</p>
    	<div class="monthPlace" v-for="item in monthPlace">
    		<img class="monthPlace-img" :src="item.img" alt="">
    		<p class="monthPlace-name">{{item.name}}</p>
    		<p class="monthPlace-description">{{item.description}}</p>
    	</div>
    	<p class="annotation"><i class="iconfont">&#xe640;</i><span class="papPrice">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格</p>
    </main>

    <div class="more">
    	<div class="more-big">
    	  <div class="more-con"><i class="iconfont">&#xe64e;</i>机票</div>
    	  <div class="more-con"><i class="iconfont">&#xe608;</i>酒店</div>
    	  <div class="home more-con"><i class="iconfont">&#xe604;</i>公寓</div>
    	  <div class="more-con more-right"><i class="more-icon iconfont">&#xe666;</i>更多</div>
    	</div> 
    </div>
    
    <ul class="nav">
    	<li>登录</li>
    	<li>我的订票</li>
    	<li>最近浏览</li>
    	<li>关于我们</li>
    </ul>
    <footer class="footer">
    	<ul class="footerTop">
    		<li class="footerTop-left">触屏版</li>
    		<li class="footerTop-right">电脑版</li>
    	</ul>
    	<p class="footerBottom">Qunar京ICP备05021087意见反馈</p>
    </footer>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      swiperInfo: [],
      iconInfo: [],
      message: [],
      promotion: [],
      hotPromotionCon: [],
      monthPlace: [],
      swiperOption: {
        autoplay: 1000,
        pagination: '.swiper-pagination',
        loop: true
      },
      iconSwiper: {
        pagination: '.pagination'
      }
    }
  },
  computed: {
    ...mapState(['city']),
    pages () {
      const pages = []
      this.iconInfo.forEach((value, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },
  methods: {
    getIndexData () {
      this.$http.get('/static/index.json')
        .then(this.handleGetDataSucc.bind(this))
    },
    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.swiper && body.data.icons && body.data.message && body.data.promotion && body.data.hotPromotionCon && body.data.monthPlace) {
        this.swiperInfo = body.data.swiper
        this.iconInfo = body.data.icons
        this.message = body.data.message
        this.promotion = body.data.promotion
        this.hotPromotionCon = body.data.hotPromotionCon
        this.monthPlace = body.data.monthPlace
      }
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>

<style scoped>
.root{
	background: #f5f5f5;
}
.header{
	display: flex;
	background: #05bad5;
	color: #fff;
}
.back {
  width: .64rem;
  line-height: .86rem;
  text-align: center;
}
.search {
  flex: 1;
  margin: .14rem .18rem;
  background: #fff;
  border-radius: .1rem;
}
.prompt {
	line-height: 0.6rem;
	color: #dfdfdf;
}
.icon-magnify{
	margin: 0.15rem 0.2rem;
}
.city {
  line-height: .86rem;
  text-align: left;
  margin-right: 0.25rem;
  color: #fff;
}
.swiper-img-con {
	overflow: hidden;
	width: 100%;
	height: 0;
	padding-bottom: 31.25%;
}
.swiper-img {
	width: 100%;
}
.icon-swiper{
	background: #fff;
}
.icon-item {
  box-sizing: border-box;
  float: left;
  width: 25%;
  padding: .4rem;
  background: #fff;
  height: 1.6rem;
}
.icon-name{ 
	font-size: 0.12rem;
	color: #000;
	text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon-img-con {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  text-align: center;
}
.icon-img {
  width: 0.66rem;
  height: 0.66rem;
  margin-bottom: 0.2rem;
}
.list-message-con {
	float: left;
  width: 50%;
  text-align: center;
  color: #000;
  line-height: 0.97rem;
  border-top: 1px solid #e1e1e1;
  font-size: 0.12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-message-location {
	box-sizing: border-box;
	border-right: 1px solid #e1e1e1
}
.list-message {
	overflow: hidden;
	background: #fff;
}
.promotion {
	overflow: hidden;
	margin-top: 0.2rem;
	background: #fff;
	border-top: 1px solid #e1e1e1;
	border-bottom: 1px solid #e1e1e1;
}
.promotion-con {
	width: 50%;
	float: left
}
.promotion-img {
	width: 100%;
}
.promotion-con-left {
	box-sizing: border-box;
	border-right: 1px solid #e1e1e1
}
.headline {
	color: #000;
	font-size: 0.26rem;
	line-height: 0.8rem;
	margin-left: 0.24rem;
}
.hotPromotionCon {
	width: 100%;
	padding: 0.24rem;
	border-bottom: 1px solid #e1e1e1;
	background: #fff;
}
.hotPromotionCon-img {
	width: 1.4rem;
	height: 1.4rem;
	float: left;
}
.hotPromotionCon-top {
	margin-left: 1.6rem;	
}
.hotPromotionCon-name {
	font-size: 0.28rem;
	color: #000;
	line-height: 0.36rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hotPromotionCon-description {
	font-size: 0.24rem;
	color: #a9a9a9;
	line-height: 0.56rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hotPromotionCon-bottom {
  margin-left: 1.6rem;
  font-size: 0.24rem;
  color: #a9a9a9;
  line-height: 0.4rem
}
.hotPromotionCon1 {
	color: #f19512;
	font-size: 0.24rem;
}
.hotPromotionCon-money {
	color: #f19512;
	font-size: 0.36rem;
}
.hotPromotionAll {
	font-size: 0.28rem;
	line-height: 0.88rem;
	text-align: center;
	color: #27e2dc;
	background: #fff;
}
.monthPlace-img {
	width: 100%;
}
.monthPlace-name {
	color: #000;
	font-size: 0.26rem;
	padding-left: 0.24rem;
	line-height: 0.26rem;
	padding-top: 0.26rem;
	background: #fff;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.monthPlace-description {
	color: #636363;
	font-size: 0.24rem;
	line-height: 0.24rem;
	padding: 0.2rem 0 0.4rem 0.24rem;
	background: #fff;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.annotation {
	font-size: 0.24rem;
	line-height: 0.6rem;
	color: #767676;
	margin-top: 0.08rem;
	background: #fff;
	border-bottom: 1px solid #e1e1e1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.annotation i {
	margin: 0 0.1rem 0;
	color: #666;
	font-size: 0.20rem;
}
.papPrice {
	color: #000;
	font-size: 0.26rem;
}
.more-big{
	text-align: center;
	padding: 0.2rem 0.92rem;
}
.more-right{
	margin-left: 0.3rem;
}
.more-con{
	color: #a8a8a8;
	font-size: 0.2rem;
	display: inline-block;
	padding-right: 0.48rem;
}
.home{
	border-right: 1px solid #a8a8a8;
}
.more-icon{
	font-size: 0.26rem;
}
.nav{
	border-bottom: 1px solid #a8a8a8;
	overflow: hidden;
}
.nav li{
	color: #2bb3af;
	float: left;
	margin-left: 0.44rem;
	padding: 0.28rem 0;
}
.footerTop{
	font-size: 0.28rem;
	margin: 0.22rem 0;
	color: #000;
	text-align: center
}
.footerTop li{
	display: inline-block;
	margin: 0 0.33rem;
}
.footerTop-right{
	color: #2bb3af;
}
.footerBottom{
	color: #a8a8a8;
	font-size: 0.26rem;
	text-align: center;
	padding-bottom: 0.22rem;
}
.pagination{
	text-align: center;
	margin:10px 0;
}
</style>

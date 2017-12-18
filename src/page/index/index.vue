<template>
	<div v-if="show">
  	<header class="header">
  		<div class="back iconfont">&#xe603;</div>
  		<div class="search">
  			<a href="#" class="prompt">
          <i class="zoom iconfont">&#xe605;</i>
          <span class="single">输入城市/景点/游玩主题</span>
        </a>
  		</div>
  		<div class="city">城市</div>
  	</header>
    
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="item of swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img class="swiper-img" :src="item.imgUrl">
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <swiper :options="iconOption" class="icon-swiper">
      <swiper-slide v-for="(pageInfo, index) of pages" :key="index">
        <div class="icon-wrapper">
          <div v-for="item of pageInfo" :key="item.id" class="icon-item">
            <div class="icon-img-con">
              <img class="icon-img" :src="item.imgUrl">
              <div class="title">{{item.title}}</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="icon-pagination"  slot="pagination"></div>
    </swiper>
    <div class="pos-spring">
      <div class="position">
        <i class="location iconfont">&#xe601;</i>
        <span class="">定位失败</span>
      </div>
      <div class="spring">
        <i class="spring iconfont">&#xe6f3;</i> 
        <span>5折温泉</span>
      </div>
    </div>
    <div class="spring-promotion">
      <li class="hot-spring"></li>
      <li class="promotion"></li>
    </div>
    <div class="hot-sale">
      <h2 class="hot-title">热销推荐</h2>
      <div class="travel">
        <div class="hot-travel" v-for="item of travelList" :key="item.id">
          <img :src="item.imgUrl" alt="" class="travel-img">
          <div class="spot-price">         
            <div class="travel-city">
              <div class="spot-title">{{item.title}}</div>
              <div class="description">{{item.description}}</div>
            </div>
            <div class="spot-sprice">
              &yen;
              <span class="spot-num">{{item.price}}</span>
              <em class="spot-character">起</em>
            </div>
          </div>
        </div>
        <div class="all-product">
          <a href="#" class="product-check">查看所有产品</a>
        </div>

      </div>
      <div class="weekend">
        <h2 class="weekend-title">周末去哪儿</h2>
        <div class="weekend-spot" v-for="item of weekendList" :key="item.id">
          <div class="weekend-img-con">
            <img :src="item.imgUrl" class="weekend-img">
          </div>
          
          <div class="weekend-quna">
            <div class="quna-title">{{item.title}}</div>
            <div class="weekend-description">
              {{item.description}}
            </div>
          </div>
        </div>
      </div>

    </div>
       <div class="ticket">
        <i class="mark iconfont">&#xe63a;</i>
        <div class="ticket-info">
          <span class="ticket-desc">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
        </div>
      </div>

      <div class="trick-hotle">
        <ul>
          <li>
            <i class="iconfont">&#xe600;</i>
            <a href="#" class="plane">机票</a>
          </li>
          <li>
            <i class="iconfont">&#xe64f;</i>
            <a href="#" class="hotle">酒店</a>
          </li>
          <li>
            <a href="#" class="plane">公寓</a>
          </li>
          <li>
            <a href="#" class="hotle">更多</a>
          </li>
        </ul>
          
      </div>
      <div class="nav">
        <li><a href="#">登录</a></li>
        <li><a href="#">我的订单</a></li>
        <li><a href="#">最近浏览</a></li>
        <li><a href="#">关于我们</a></li>
      </div>
      <div class="footer">       
          <div class="versions">
            <li>
              <a href="#" class="touch">触屏版</a>
            </li>
            <li>
               <a href="#">电脑版</a>
            </li>
          </div>
          <div class="copy-right">
            <span>Qunar 京ICP备05021087</span>
            <a href="#">意见反馈</a>
          </div>

      </div>

  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        show: true,
        swiperInfo: [],
        iconInfo: [],
        travelList: [],
        weekendList: [],
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          loop: true
        },
        iconOption: {
          pagination: '.icon-pagination'
        }
      }
    },
    computed: {
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
        console.log(res)
        const body = res.body
        if (body && body.data && body.data.swiper) {
          this.swiperInfo = body.data.swiper
          this.iconInfo = body.data.icons
          this.travelList = body.data.recommed
          this.weekendList = body.data.weekend
        }
      }

    },
    created () {
      this.getIndexData()
    }

  }
</script>

<style scoped>
	.header {
		display: flex;
    height: .86rem;
		background: #05bad5;
		color: #fff;
	}
	.back {
		width: .64rem;
		line-height: .86rem;
		text-align: center;
	}
	.search {
    display:flex;
		flex: 1;
		margin: .14rem .18rem;
		background: #fff;
		border-radius: .1rem;
    text-indent: .2rem;
	}
  .prompt {
    line-height: .58rem;
    font-size: .26rem;
    color: #ccc;
  }
  .zoom {
    margin:0 0.12rem;
    line-height: .58rem;
    font-size: .28rem;
    color:#ccc;
  }
	.single {

  }
	.city {
		padding-right: .4rem;
		line-height: .86rem;
		text-align: left;
    margin-right: .17rem;
	}
	.city::after {
		content: "";
		display: block;
		width: 0px;
		height: 0px;
		border: 0.15rem solid #fff;
		border-color: white transparent transparent transparent;
		position: absolute;
    right: 0.2rem;
    top: 0.36rem;
	}
  .swiper {
    background:#fff;
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
  .icon-swiper {
    background:#fff;
  }
  .icon-wrapper {

  }
  .icon-item {
    box-sizing:border-box;
    float: left;
    width: 25%;
    padding: .3rem;
  }
  .icon-img-con {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    text-align: center;
  }
  .icon-img {
    width: 60%;
    margin-bottom: .2rem;
  }
  .titlte {
    font-size: .18rem;
  }
  .icon-pagination {
    text-align: center;
  }
  .pos-spring {
    display: flex;
    height: 1rem;
    text-align: center;
    border-top:1px solid #ddd;
    background: #fff;
  }
  .position {
    width: 50%;
    line-height: 1rem;
    border-right: 1px solid #ddd;
  }
  .spring {
    width:50%;
    line-height: 1rem;
  }
  .spring-promotion {
    display: flex;
    height: 1.6rem;
    text-align: center;
    background: #fff;
    margin-top: .2rem;
  }
  .hot-spring {
    width: 50%;
    background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png)  center center no-repeat;
    background-size: auto 100%;
    border-right: 1px solid #eee;
    list-style: none;
  }
  .promotion {
    width: 50%;
    background: url(http://img1.qunarzz.com/piao/fusion/1711/8a/4c62d1a89fc2d602.png) center center no-repeat;
    background-size: auto 100%;
    list-style: none;
  }
  .hot-sale {
    background: #fff;

  }
  .hot-title {
    width: 100%;
    box-sizing:border-box;
    height: .8rem;
    line-height: .8rem;
    padding: 0 .26rem;
    background: red;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }
  .travel{
    
  }
  .hot-travel {
    height: 1.4rem;
    padding: .24rem;
    display: flex;
  }
  .travel-img {
    width: 1.4rem;
    height: 1.4rem;
  }
  .spot-price {
    display: flex;
    flex-direction: column;
  }
  .travel-city {
    width: 5.4rem;
    padding-left: .3rem; 
  }
  .spot-title {
    overflow: hidden;
    margin-top: .04rem;
    margin-bottom: .1rem;
    color: #212121;
    font-size: .3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .description {
    overflow: hidden;
    margin-top: .04rem;
    margin-bottom: .1rem;
    color: #9e9e9e;
    font-size: .3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .spot-sprice {
    margin-left: .3rem;
    color: #ff8300;
    font-size: .24rem;
  }

  .spot-num {
    font-size: .36rem;
  }
  .spot-character {
    font-size: .24rem;
    color: #9e9e9e;
  }
  .all-product {
    text-align: center;
    height: .88rem;
  }
  .product-check {
    display: block;
    height: .88rem;
    line-height: .88rem;
  }
  .weekend {
    width:100%;
  }
  .weekend-title {
    height: .8rem;
    line-height: .8rem;
    margin-left: .26rem;
  }
  .weekend-img-con {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 37.4%;
  }
  .weekend-img {
    width: 100%;
  }
  .weekend-quna {
    height: ;
    padding: .14rem .2rem .2rem .2rem;
  }

  .quna-title {
    margin-left: 0;
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .weekend-description {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis
  }
  .ticket {
    display: flex;
    height: .32rem;
    padding: .14rem .1rem;
    margin-top: .1rem;
    color: #616161;
  }
  .mark { 
    display: block;   
    font-size: .24rem;
    display: block;
    float: left;
    line-height: .32rem;
    margin-left: .16rem;
    margin-right: .08rem
  }
  .ticket-info {
    color: #616161;
    font-size: .24rem;
    line-height: .32rem;
    font-size: 900;
  }
  .ticket-desc {
    line-height: .32rem;
  }
  .trick-hotle {
   
    width: 5rem;
    height: .5rem;
    line-height: .25rem;
    overflow: hidden;
    padding: .1rem .1rem 0 .1rem;
    margin: 0 auto;
  }
  .trick-hotle ul {
    display: flex;
    justify-content: space-between;
    width: 5rem;
  }
  .trick-hotle li {
  }
  .trick-hotle li a {
    color: #9e9e9e;
    text-decoration: underline;
  }
  .nav {
    width:100%;
    height:.6rem;
    line-height: .16rem;
    border-bottom: 1px solid #ccc;
  }
  .nav li {
    float: left;
    list-style: none;
  }
  .nav li a {
    display: inline-block;
    line-height: .6rem;
    padding-left: .4rem;
    font-size: .28rem;
  }

  .footer {
    margin-left: .16rem;
    padding-top: 10px;
    text-align: center;
  }
  .footer li {
    display: inline-block;
    margin: 0 15px;
  }
  .footer li a {
    font-size: 14px;
  }
  .versions {

  }
  .versions li {
  }
  .versions li .touch {
    color: #000;
  }
  .copy-right {
    color: #9e9e9e;
    text-align: center;
    font-size: 14px;
    padding: 10px;
  }
  .copy-right a {
    color: #9e9e9e;
    height: 33px;
  }

</style>

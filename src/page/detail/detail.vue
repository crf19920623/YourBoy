<template>
	<div>
		<header class='header'>
			<div class='back iconfont'>&#xe602;</div>
			<div class='hot-spring'>温泉5折起，精挑细选温泉清单</div>
			<div class='index'><i class='palace iconfont'>&#xe604;</i>首页
			</div>
		</header>
		<div class="coupons-list">
			<div class="coupons-img-con">
				<img class="coupons-img" src="//img1.qunarzz.com/piao/fusion/1710/a5/30bea424f8862102.jpg_640x361_929a4c2a.jpg" alt="">
			</div>
		</div>
		<detail-coupons></detail-coupons>
		<div class="coupons-module">
			<ul class="anchor-list clrfix">
				<li class="anchor-item"  v-for="item of anchorInfo">
					<span class="anchor-inner mp-border">{{
					item.anchor}}</span>
        </li>
      </ul>
		  
    	<detail-caption :spotTrickInfo="spotTrickInfo"></detail-caption>
			<detail-landscape ref="landscapeMain" :landscapeInfo="landscapeInfo"></detail-landscape>
			<detail-health :healthInfo="healthInfo"></detail-health>
		</div>
		<detail-tip></detail-tip>		
		<detail-super></detail-super>
		<detail-top ref="goTop"></detail-top>
		
  </div>
</template>

<script>
  import DetailCaption from './caption'
  import DetailLandscape from './landscape'
  import DetailHealth from './health'
  import DetailTip from './tip'
  import DetailCoupons from './coupons'
  import DetailSuper from './super'
  import DetailTop from './top'

  export default {
    name: 'detail',
    components: {
      DetailCaption,
      DetailLandscape,
      DetailHealth,
      DetailTip,
      DetailCoupons,
      DetailSuper,
      DetailTop
    },
    data () {
      return {
        anchorInfo: [],
        spotTrickInfo: [],
        landscapeInfo: [],
        healthInfo: []
      }
    },
    methods: {
      getDetailData () {
        this.$http.get('/static/detail.json')
        .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.anchorInfo && body.data.spotTrickInfo && body.data.landscapeInfo && body.data.healthInfo) {
          this.anchorInfo = body.data.anchorInfo
          this.spotTrickInfo = body.data.spotTrickInfo
          this.landscapeInfo = body.data.landscapeInfo
          this.healthInfo = body.data.healthInfo
        }
      }
    },
    created () {
      this.getDetailData()
    },
    updated () {
      var that = this
      window.onscroll = function () {
        var top = document.documentElement.scrollTop || document.body.scrollTop
        var goTop = that.$refs.goTop.$el
        console.log(goTop)
        const landscapeList = that.$refs.landscapeMain.$el.children
        var landscapeTop = landscapeList[1].offsetTop
        if (top >= landscapeTop) {
          goTop.style.transform = 'translate(0px, -1rem) translateZ(0px)'
        } else if (top < landscapeTop) {
          goTop.style.transform = 'translate(0px, 1rem) translateZ(0px)'
        }
      }
    }
  }
</script>

<style scoped>
	.header {
		display: flex;
		height: .88rem;
		background: #1ba9ba;
		color: #fff;
		border-bottom:#1b7a8b .02rem solid;
	}
	.back {
		width: .88rem;
	  line-height: .88rem;
	  text-align: center;
	}
	.hot-spring {
		flex: 1rem;
		font-size: .32rem;
		line-height: .88rem;
		text-indent: .1rem;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.index {
		width: .88rem;
		line-height: .36rem;
		text-align: center;
	}
	.palace {
		display: block;
    padding-top: .1rem;
    line-height: 1;
    font-size: .4rem;
	}
	.mp-ellipsis {
		overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
	}
	.coupons-list {
		
	}
	
	.coupons-img-con {
		width: 100%;
		height: 0;
		padding-bottom: 56.4%;
	}
	.coupons-img {
		width: 100%;
	}
	
	.coupons-module{
		margin: .2rem 0;
		padding: .2rem;
		background: #fff;
	}
	.anchor-list {
		margin: .2rem .4rem 0;
	}
	.anchor-item{
		float: left;
		width: 33.33%;
		margin-bottom: .2rem;
	}
	.anchor-inner{
		display: block;
		overflow: hidden;
		height: .64rem;
		line-height: .64rem;
		font-size: .28rem;
		text-align: center;
		margin: 0 .1rem;
		color: #212121;
		box-sizing: border-box;
		border: .02rem solid #e0e0e0;
	}
	.anchor-inner::before {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 10px solid red;
	}
	
	.clrfix:after {
    content: "\0020";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
  }
	
	
</style>


<template>
	<div class="root">
		<header class='header'>
			<router-link to="/">
				<div class='back iconfont'>&#xe602;</div>
			</router-link>
			<div class='search'><a href="#" class='prompt'>一日游</a></div>
			<div class='city'>搜索</div>
		</header>
		<div class="nav">
			<div class="nav-list" ref="navUlList">
			  <div class="visitScenicSpots" ref="scenic">游玩景点（可多选）</div>
				<ul class="nav-ul" ref="unfold">
					<li class="nav-item" v-for="item in navList" :key="item.id">{{item.text}}</li>
				</ul>
				<span @click="clickUnfold" class="nav-icon iconfont"><i class="nav-iconImg">&#xe61b;</i></span>
			</div>
		</div>
		<div>
			<div class="contentOfGood" v-for="item in commodityList" :key="item.id">
				<div class="parcel-img">
				  <img class="content-img" :src="item.imgUrl" alt="">
				</div>
				<div class="parcel-text">
					<h2 class="content-title">{{item.title}}</h2>
					<h3><span class="content-place">{{item.place}}</span><b class="division">|</b><i class="content-shop">{{item.shop}}</i></h3>
					<h4 class="price"><b class="symbol">&yen;</b><em class="content-price">{{item.price}}</em>起</h4>
					<strong class="content-quantity">{{item.quantity}}</strong>
				</div>
			</div>
		</div>
		<div>
			<div class="pagination">
			  <span class="up">上一页</span>
			  <span class="sum"><i>1 </i>/<i> 4</i></span>
			  <span class="next">下一页</span>
			</div>
		  <div class="parcel-tickets">
		    <a class="tickets" href="#">去哪儿门票</a>
		  </div>
		</div>
		<div class="position-list">
			<div class="classifyFiltrate" ref="classifyFiltrate">
				<div class="classifyList">
					<ul class="classifyUl" @click="handleGetlist($event)" ref="classifyUl">
						<li>全部分类</li>
						<li>一日游</li>
						<li>文化古迹</li>
						<li>交通</li>
						<li>温泉</li>
						<li>运动健身</li>
						<li>展馆</li>
						<li>城市观光</li>
						<li>自然风光</li>
						<li>餐饮</li>
					</ul>
					<div class="list-text" ref="listText">
						<ul></ul>
						<ul>
							<li>全部一日游</li>
							<li>当地游</li>
							<li>周边游</li>
						</ul>
						<ul>
							<li>全部文化古迹</li>
							<li>古镇</li>
							<li>遗址</li>
						</ul>
						<ul>
							<li>全部交通</li>
							<li>直通车</li>
							<li>租车</li>
						</ul>
						<ul>
							<li>全部温泉</li>
							<li>雪景温泉</li>
						</ul>
						<ul>
							<li>全部运动健身</li>
							<li>滑雪</li>
						</ul>
						<ul>
							<li>全部展馆</li>
							<li>博物馆</li>
						</ul>
						<ul>
							<li>全部城市观光</li>
						</ul>
						<ul>
							<li>全部自然风光</li>
							<li>海滨海岛</li>
						</ul>
						<ul>
							<li>全部餐饮</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="positionIcon" ref="positionBottom">
				<div class="icon-icon iconfont">
					<i class="icon-top">&#xe6b0;</i>
					<i class="icon-top">&#xe63a;</i>
					<i class="icon-top">&#xe601;</i>
				</div>
				<div class="icon-text">
					<span class="classify" @click="unfoldClassify">全部分类</span>
					<span class="filtrate">筛选</span>
					<span class="rank">推荐排序</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'OneDayTour',
    data () {
      return {
        navList: [],
        commodityList: [],
        flag: true,
        classifyFlag: true,
        index: ''
      }
    },
    methods: {
      getOneDayTourData () {
        this.$http.get('/static/oneDayTour.json')
        .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.nav && body.data.commodityList) {
          this.navList = body.data.nav
          this.commodityList = body.data.commodityList
        }
      },
      clickUnfold () {
        if (this.flag) {
          this.$refs.unfold.style.height = 250 + 'px'
          this.$refs.unfold.style.width = 375 + 'px'
          this.$refs.scenic.style.display = 'block'
          this.$refs.unfold.style.position = 'absolute'
          this.$refs.unfold.style.left = 0
          this.$refs.unfold.style.top = 0.85 + 'rem'
          var that = this
          window.onscroll = function () {
            let top = document.documentElement.scrollTop || document.body.scrollTop
            if (top >= 88 && that.flag === false) {
              that.$refs.navUlList.style.position = 'fixed'
              that.$refs.navUlList.style.top = 0
              that.$refs.navUlList.style.zIndex = 10
              that.$refs.navUlList.style.width = '100%'
            } else {
            	that.$refs.navUlList.style.position = null
            }
          }
          this.flag = false
        } else {
          this.$refs.unfold.style.height = 0.84 + 'rem'
          this.$refs.unfold.style.width = 500 + 'rem'
          this.$refs.scenic.style.display = 'none'
          this.$refs.unfold.style.position = null
          this.flag = true
        }
      },
      unfoldClassify () {
        if (this.classifyFlag) {
          this.$refs.classifyFiltrate.style.display = 'block'
          this.classifyFlag = false
        } else {
          this.$refs.classifyFiltrate.style.display = 'none'
          this.classifyFlag = true
        }
      },
      handleGetlist (e) {
        var target = e.target || e.srcElement
        if (target.nodeName.toLowerCase() === 'li') {
          var classifyUl = this.$refs.classifyUl.children
          var listText = this.$refs.listText.children
          for (var k = 0; k < classifyUl.length; k++) {
            classifyUl[k].style.background = '#f4f5f6'
          }
          target.style.background = '#fff'
          for (var i = 0; i < classifyUl.length; i++) {
            if (classifyUl[i] === target) {
              this.index = i
              for (var j = 0; j < listText.length; j++) {
                listText[j].style.display = 'none'
              }
              listText[this.index].style.display = 'block'
            }
          }
        }
      }
    },
    created () {
      this.getOneDayTourData()
    },
    updated () {
      var this_ = this
      window.onscroll = function () {
        let top = document.documentElement.scrollTop || document.body.scrollTop
        if (top >= document.body.offsetHeight - document.documentElement.clientHeight) {
          this_.$refs.positionBottom.style.display = 'none'
        } else {
          this_.$refs.positionBottom.style.display = 'block'
        }
      }
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
	  line-height: .88rem;
	  text-align: center;
	}
	.search {
	  flex: 1;
	  margin: .14rem .18rem;
	  background: #fff;
	  border-radius: .1rem;
	}
	.prompt {
		line-height: .6rem;
		margin: .15rem .2rem;
		color: #000;
	}
	.city {
	  line-height: .86rem;
	  text-align: left;
	  margin-right: .25rem;
	}
	.nav {
		position: relative;
		background: #e3e7ea;
	}
	.nav-list {
		position: relative;	
	}
	.nav-ul {
    overflow-x:auto;
    overflow-y:hidden;
		height: .84rem;
		background: #e3e7ea;
		border-bottom: 1px solid #ccc;
	}
	.nav-item {
		overflow: hidden;
		display: inline-block;
		line-height: .56rem;
		margin:.12rem 0 .16rem .15rem;
		padding: 0 .24rem 0;
		border-radius: 0.1rem;
		font-size: .24rem;
		background: #fff;
	}
	.nav-icon {
		position: absolute;
		right: 0;
		top: 0;
		display: inline-block;
		width: .8rem;
		height: .84rem;
		text-align: center;
		border-left: .01rem solid #ccc;
		background: #e5e7e8;
	}
	.nav-iconImg {
	  display: block;
	  line-height: .84rem;
	}
	.contentOfGood {
		display: flex;
	}
	.parcel-img {
		float: left;
		height: 1.95rem;
		width: 2rem;
		text-align: center;
		line-height: 1.95rem;
	}
	.parcel-text {
		flex: 1;
		float: right;
		height: 1.95rem;
		border-bottom: 1px solid #ccc;
	}
	.content-img {
		width: 1.60rem;
		height: 1.60rem;
		
	}
	.content-title {
		margin: .2rem .32rem .12rem 0;
		font-size: .28rem;
		line-height: .36rem;
		color: #000;
	}
	.content-place {
		margin-right: 0.1rem;
		font-size: .24rem;
		color: #1ac3d8;
	}
	.content-shop {
		margin-left: 0.1rem;
		font-size: .24rem;
		color: #7d7d7d;
	}
	.division {
		color: #eaeaea;
	}
	.price {
		float: right;
		margin-right: .22rem;
		margin-top: -0.06rem;
		font-size: .22rem;
		color: #9e9e9e;
	}
	.symbol {
		font-size: .12rem;
		color: #ff8300;
	}
	.content-price {
		margin-right: .02rem;
		font-size: .28rem;
		font-weight: 600;
		color: #ff8300;
	}
	.content-quantity {
		margin-top: .2rem;
		float: left;
		font-size: .22rem;
		color: #b1b1b1;
	}
	.pagination {
		height: 1.1rem;
		line-height: 1.1rem;
		width: 100%;
		text-align: center;
	}
	.up {
		display: inline-block;
		text-align: center;
	  height: .6rem;
	  line-height: .6rem;
	  width: 1.4rem;
	  border-radius: .1rem;
	  background: #bdbdbd;
	  color: #fff;
	}
	.sum {
	  margin: 0 .1rem;
	}
	.next {
		display: inline-block;
		text-align: center;
	  height: .6rem;
	  line-height: .6rem;
	  width: 1.4rem;
	  border-radius: .1rem;
	  border: .02rem solid #00afc7;
	  color: #00afc7;
	  background: #fff;
	}
	.tickets {
		display: block;
		height: .52rem;
		text-align: center;
		color: #00afc7;
	}
	.visitScenicSpots {
		display: none;
		width: 100%;
		height: .84rem;
		border-bottom: 1px solid #ccc;
		line-height: .84rem;
		font-size: .24rem;
		background: #e5e7e8;
	}
	.positionIcon {
		position: fixed;
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0.8);
		color: #fff;
		font-size: .22rem;
	}
	.icon-icon {
		display: flex;
		justify-content: space-around;
		height: .4rem;
		line-height: .4rem;
	}
	.icon-text {
		height: .4rem;
		display: flex;
		justify-content: space-around;
	}
	.classify {
		display: inline-block;
		line-height: .4rem;
	}
	.filtrate {
		display: inline-block;
		line-height: .4rem;
	}
	.rank {
		display: inline-block;
		line-height: .4rem;
	}
	.position-list {
		
	}
	.classifyFiltrate {
		display: none;
	}
	.classifyList {
		position: fixed;
		display: flex;
		bottom: 0.8rem;
		width: 100%;
		background: #fff;
	}
	.classifyUl {
		overflow: hidden;
		height: 5.28rem;
		width: 2.8rem;
		background: #f4f5f6;
	}
	.classifyUl > li {
		height: .88rem;
		line-height: .88rem;
		padding-left: .2rem;
		font-size: .26rem;
		border-bottom: .01rem solid #ccc;
	}
	.list-text {
		flex: 1;
		height: .88rem;
		line-height: .88rem;
		margin-left: .2rem;
		font-size: .26rem;
	}
	.list-text > ul {
		display: none;
	}
	.list-text > ul > li {
		border-bottom: .01rem solid #ccc;
	}
</style>

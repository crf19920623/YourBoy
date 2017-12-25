<template>
<div class="root">
  <header class="header">
  	<router-link to="/">
      <div class='back iconfont'>&#xe602;</div>
    </router-link>
    <div class='country country-in country-commen1'>国内</div><router-link to="/foreign"><div class='country country-out country-commen2'>国外</div></router-link>
  </header>
  <div class="space"></div>
	<div class="search">
		<input class="search-input" type="text" v-model="value" placeholder="输入城市名或拼音">  
	</div>
	<ul ref="searchList">
		<li v-for="item of searchCity" class="area-con">{{item.city}}</li>
	</ul>
	<div v-show="show">
		<div class="place-item">您的位置</div>
		<div class="place-city">
	    	<div class="place-city-con">{{city}}</div>
		</div>
		<div class="place-item">热门城市</div>
		<ul class="hotCity clearfix">
			<li class="hotCity-con" v-for="item of hotCity" :key="item.id"><a href="javaScript:;">{{item.city}}</a></li>
		</ul>
		<div class="area" v-for="(item,key) of area">
		  <div class="place-item" ref="areaCode">{{key}}</div>
		  <ul class="area-all">
		  	<li class="area-con" v-for="ite of item" :key="ite.id" ref="areaName" @click="handleCityChange(ite.city)">{{ite.city}}</li>
		  </ul>
		</div>
	</div>
	<ul class="nav" @click="handleClick">
		<li v-for="item of code">{{item}}</li>
	</ul>

</div>
</template>
<script scoped>
import { mapMutations } from 'vuex'
export default {
  name: 'Location',
  data () {
    return {
      hotCity: [],
      area: [],
      code: [],
      areaCodeArr: [],
      searchArea: '',
      codeCon: '',
      value: '',
      searchCity: [],
      show: true,
      city: '北京'
    }
  },
  methods: {
    getIndexData () {
      this.$http.get('/static/location.json')
        .then(this.handleGetDataSucc.bind(this))
    },
    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.hotCity && body.data.area) {
        this.hotCity = body.data.hotCity
        this.area = body.data.area
        this.code = body.data.code
        this.searchArea = body.data
      }
    },
    getSearchArea () {
      this.$http.get('/static/searchArea.json')
        .then(this.handleGetSearchAreaSucc.bind(this))
    },
    handleGetSearchAreaSucc (res) {
      const body = res.body
      if (body && body.data) {
        this.searchArea = body.data
      }
    },
    handleClick (e) {
      this.codeCon = e.target.innerHTML
      this.areaCodeArr = this.$refs.areaCode
      for (var item of this.areaCodeArr) {
        if (item.innerHTML === this.codeCon) {
          window.scrollTo(0, (item.offsetTop - 43))
        }
      }
    },
    ...mapMutations({
      handleCityChange: 'changeCity'
    })
    // handleCityChange (city) {
    //   this.$store.commit('changeCity', city)
    //   this.city = city
    // }
  },
  created () {
    this.getIndexData()
    this.getSearchArea()
  },
  destroyed () {
    window.scrollTo(0, 0)
  },
  watch: {
    value () {
      for (var item in this.searchArea) {
        this.searchCity = []
        this.show = true
        if (this.value === item) {
          this.searchCity = this.searchArea[item]
          this.show = false
          return
        }
      }
    }
  }
}
</script>
<style scoped>
.root{
	background: #fff;
}
.header{
	background: #05bad5;
	color: #fff;
	text-align: center;
	width: 100%;
	line-height: 0.88rem;
	position: fixed;
	left: 0;
	top: 0;
}
.space {
	width: 100%;
	height: 0.88rem
}
.back {
	width: .64rem;
	text-align: center;
	display: inline-block;
	float: left; 
	color: #fff; 
}
.country {
	width: 2.06rem;
	height: 0.6rem;
	text-align: center;
	border: 1px solid #fff;
	line-height: 0.6rem;
	display: inline-block;
	font-size: 0.28rem; 
}
.country-in {
	border-right: 0;
	border-radius: 0.05rem 0 0 0.05rem;
}
.country-commen2 {
	background: #05bad5;
	color: #fff;
}
.country-commen1 {
	background: #fff;
	color: #05bad5;
}
.country-out {
	border-left: 0;
	border-radius: 0 0.05rem 0.05rem 0;
}
.search {
	height: 0.72rem;
	background: #05bad5;
	padding: 0 0.2rem; 
}
.search-input {
	width: 100%;
	height: 0.62rem;
	border: 0;
	outline: none;
	border-radius: 0.05rem;
	text-align: center;
	font-size: 0.22rem;
}
.place-item {
	line-height: 0.52rem;
	font-size: 0.24rem;
	padding-left: 0.32rem;
	color: #707070;
	border-bottom: 1px solid #ddd;
	background: #f5f5f5;
}
.place-city {
	line-height: 1.06rem;
	background: #fff;
	padding-left: 0.32rem;
	border-bottom: 1px solid #ddd;
}
.place-city-con {
	display: inline-block;
	line-height: 0.56rem;
	text-align: center;
	font-size: 0.28rem;
	color: #05bad5;
	border: 1px solid #05bad5;
	width: 25%;
	border-radius: 0.05rem;	
}
.hotCity {
	background: #fff;
	border-bottom: 1px solid #ddd;
	padding: 0rem 0.6rem 0.14rem 0.22rem;
}
.hotCity-con {
	float: left;
	box-sizing: border-box;
	padding: 0.2rem 0.14rem 0 0.1rem;
  	width: 33.33%;
}
.hotCity-con a {
	display: inline-block;
	line-height: 0.56rem;
	text-align: center;
	font-size: 0.28rem;
	border-radius: 0.05rem;
	color: #000;
	border: 1px solid #ddd;
	width: 100%;
}
.area-all {
	background: #fff;
}
.area-con {
	color: #000;
	line-height: 0.76rem;
	font-size: 0.28rem;
	border-bottom: 1px solid #ddd;
  	padding-left: 0.22rem;

}
.nav {
	position: fixed;
	right: 0;
	top: 20%;
}
.nav li {
	color: #05bad5;
	font-size: 0.22rem;
	line-height: 0.32rem;
	width: 0.4rem;
	text-align: center;
}
</style>
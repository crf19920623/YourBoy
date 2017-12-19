<template>
<div class="root">
  <header class="header">
    <div class='back iconfont'>&#xe602;</div>
    <div class='country country-in'>国内</div><div class='country country-out'>国外</div>
  </header>
  <div class="space"></div>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市名或拼音">  
	</div>
	<div class="place-item">您的位置</div>
	<div class="place-city">
    <div class="place-city-con">北京</div>
	</div>
	<div class="place-item">热门城市</div>
	<ul class="hotCity clearfix">
		<li class="hotCity-con" v-for="item of hotCity" :key="item.id"><a href="">{{item.city}}</a></li>
	</ul>
	<div class="area">
	  <div class="place-item">A</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.A" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">B</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.B" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">C</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.C" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">D</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.D" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">E</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.E" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">F</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.F" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">G</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.G" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">H</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.H" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">J</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.J" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">K</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.K" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">L</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.L" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">M</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.M" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">N</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.N" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">P</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.P" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">Q</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.Q" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">R</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.R" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">S</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.S" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">T</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.T" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">W</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.W" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">X</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.X" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<div class="area">
	  <div class="place-item">Y</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.Y" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>  
	<div class="area">
	  <div class="place-item">Z</div>
	  <ul class="area-all">
	  	<li class="area-con" v-for="item of area.Z" :key="item.id">{{item.city}}</li>
	  </ul>
	</div>
	<ul class="nav" @click="handleClick">
		<li v-for="item of code" class="item">{{item}}</li>
	</ul>

</div>
</template>
<script>
  export default {
    name: 'Location',
    data () {
      return {
        hotCity: [],
        area: [],
        code: []
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
        }
      },
      handleClick (e) {
        console.log(e.target)
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
	background: #fff;
	color: #05bad5;
	border-radius: 0.05rem 0 0 0.05rem;
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
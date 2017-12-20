<template>
  	<div class="tip">
			<div class="more">查看更多温泉产品</div>
			<div class="tip-topic">
				<div class="tip-topic-con">
					温泉贴士
				</div>
			</div>
			<div class="tip-con">
				<dl>
					<dt class="tip-title">	
        		—【泡温泉】— 
					</dt>
					<dd>
						<ul class="tip-desc">
							<li class="tip-desc-item">
								第一步：淋浴，泡汤可不是泡澡，首先就要淋浴，同时给身体适应的时间
							</li>
							<li class="tip-desc-item">第二步：淋泉水，泡汤切忌一下跃入汤池，很容易发生头晕。可先做在汤池边从脚淋起，全身都要用温泉水润湿，可预防脑贫血的发生。</li>
							<li class="tip-desc-item">
								第三步：泡温泉，慢慢地进入汤池，刚开始只泡到胸口部分，约浸个3-5分钟左右，全身都暖活起来后，再慢慢泡到肩膀高度。期间要注意多补充水分。
							</li>
							<li class="tip-desc-item">
								第四步：泡温泉之后建议进行淋浴，避免引起皮肤过敏等不适。
							</li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt class="tip-title">		
          	—【准备事项】— 
					</dt>
					<dd>
						<ul class="tip-desc">
							<li class="tip-desc-item">
								1.泳衣拖鞋等个人物品要提前准备好，爱美的小仙女们护肤品也是必不可少的。
							</li>
							<li class="tip-desc-item">2.心爱的首饰在泡温泉前要取下收好，温泉会对金属物品有氧化腐蚀的作用。</li>
							<li class="tip-desc-item">
								3.戴隐形眼睛的小伙伴最好在泡温泉时取下隐形，否则容易引起眼部干燥不适。。
							</li>
							<li class="tip-desc-item">
								4.饭前饭后两小时最好不要泡温泉，容易发生低血糖和头晕。
							</li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt class="tip-title">		
         		—【什么情况不能泡】— 
					</dt>
					<dd>
						<ul class="tip-desc">
							<li class="tip-desc-item">
								1.心血管方面疾病患者容易发生危险要谨慎泡温泉；
							</li>
							<li class="tip-desc-item">2.过于疲劳和饮酒过量者泡温泉易产生更多不适；</li>
							<li class="tip-desc-item">
								3.严重皮肤病病及破损可能会发生继发感染；
							</li>
							<li class="tip-desc-item">
								4.患有眼疾的患者不宜泡温泉。
							</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>

</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
.tip{
		padding: .2rem .3rem;
		background: #fff;
  }
  .more{
  	width: 44.5%;
  	border: .02rem solid #fa0;
  	color: #ff8a00;
  	font-size: .28rem;
  	line-height: .6rem;
  	text-align: center;
  	margin:0 auto;
  }
  .tip-topic{
  	position: relative;
  	width: 1.7rem;
  	color: #fff;
  	font-size: .28rem;
  	text-align: center;
  	line-height: .6rem;
  	margin: .6rem auto 0;
  	background-image: linear-gradient(to right,#ffa604,#ff441e);
  }
  .tip-topic::before, .tip-topic::after{
  	content: "\0020";
  	overflow: hidden;
		position: absolute;
		width: 0;
		height: 0;
  }
  .tip-topic::before {
  	border-top: .12rem solid #fff;
  	border-right: .12rem solid transparent;
  	left: 0;
		top: 0;
  }
  .tip-topic::after {
  	border-bottom: .12rem solid #fff;
  	border-left: .12rem solid transparent;
  	right: 0;
		bottom: 0;
  }
	.tip-con{
		color: #616161;
		font-size: .28rem;
		line-height: .4rem;
	}
	.tip-title{
		margin-top: .4rem;
		font-size: .32rem;
		color: #212121;
		line-height: .44rem;
		text-align: center;
	}
	.tip-desc-item{
		margin-top: .22rem;
	}
	
</style>
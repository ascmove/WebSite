window.onload=function(){
	var myChart = echarts.init(document.getElementById('main'));
				var categoris = [];
				var num = [];

//				function addData(shift) {
//					now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
//					date.push(now);
//					data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);
//					if (shift) {
//						date.shift();
//						data.shift();
//					}
//					now = new Date(Date.parse(now) + 24 * 3600 * 1000);
//				}
	//			$.get('http://127.0.0.1:5000/echarts/data').done(function (data) {
				myChart.setOption({
					title: {
						text: '异步数据加载示例'
					},
					tooltip: {},
					legend: {
						//data:['销量']
					},
					xAxis: {
						boundaryGap: false,
						splitLine:{show:false,interval:65534},
						data: ['jeans','sweaters','pants','socks','shoes']
					},
					yAxis: {
						axisTick:{show:false},
						min:0,
						max:1310680,
						interval:65534,
						axisLabel:{
						formatter:function(value){
							if (value > 1300000)
								return 'c1';
							else if(value == 1245146)
								return 'c2';
							else return false;
						}}
					},
					series: [{
						name: '销量',
						type: 'line',
						data: [2,5,8,10,6]
					}]
				});
//			});
					//alert("hello");
			//		},500);
			//使用刚指定的配置项和数据显示图表
			//myChart.setOption(option);
}
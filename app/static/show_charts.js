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
				$.get('http://127.0.0.1:5000/getdata').done(function (data) {
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
						splitLine:{show:false},
						data: ['jeans','sweaters','pants','socks','shoes']
					},
					yAxis: {
						type:'value',
						axisTick:{show:false},
						min:-50,
						max:50,
						//interval:65534,
						//axisLabel:{
						// formatter:function(value){
							// if (value == 1310680)
								// return 'c1';
							// else if(value == 1245146)
								// return 'c2';
							// if (value == 1179612)
								// return 'c3';
							// else if(value == 1114078)
								// return 'c4';
							// if (value == 1048544)
								// return 'c5';
							// else if(value == 983010)
								// return 'c6';
							// if (value == 917476)
								// return 'c7';
							// else if(value == 851942)
								// return 'c8';
							// if (value == 786408)
								// return 'c9';
							// else if(value == 720874)
								// return 'c10';
							// if (value == 655340)
								// return 'c11';
							// else if(value == 589806)
								// return 'c12';
							// if (value == 524272)
								// return 'c13';
							// else if(value == 458738)
								// return 'c14';
							// if (value == 393204)
								// return 'c15';
							// else if(value == 327670)
								// return 'c16';
							// if (value == 262136)
								// return 'c17';
							// else if(value == 196602)
								// return 'c18';
							// if (value == 131068)
								// return 'c19';
							// else if(value == 65534)
								// return 'c20';
						// }
						//}
					},
					series: [{
						name: '销量',
						type: 'line',
						smooth:true,
						stack:'a',
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)'
							}
						},
						data: data.data
					}]
				});
			});
					//alert("hello");
			//		},500);
			//使用刚指定的配置项和数据显示图表
			//myChart.setOption(option);
}
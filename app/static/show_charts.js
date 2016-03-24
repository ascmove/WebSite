window.onload=function(){
	var myChart = echarts.init(document.getElementById('main'));
//				$.get('http://127.0.0.1:5000/getdata').done(function (data) {
				myChart.setOption({
					title: {
						text: '每页显示10秒脑电波图'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							animation: false
						}
					},
					legend: {
						//data:['销量']
					},
					xAxis: {
						boundaryGap: false,
						splitLine:{show:false},
						axisTick:{show:false},
						data: []
					},
					yAxis: {
						type:'value',
						axisTick:{show:false},
						min:0,
						max:600,
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
						name: '电位1',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位2',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位3',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位4',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位5',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位6',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位7',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位8',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位9',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位10',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位11',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位12',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位13',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位14',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位15',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位16',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位17',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位18',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位19',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					},{
						name: '电位20',
						type: 'line',
						smooth:false,
						itemStyle:{
							normal:{
								color:'rgb(0,0,0)',
								opacity:0
							}
						},
						lineStyle:{
							type:'dotted'
						}
					}]
				});
//			});
					//alert("hello");
			//		},500);
			//使用刚指定的配置项和数据显示图表
			//myChart.setOption(option);
}

function show(filename){
	url = 'http://127.0.0.1:5000/getdata?filename='+filename;
	myChart = echarts.getInstanceByDom(document.getElementById('main'));
	$.get(url).done(function (data) {
		myChart.setOption({
			 xAxis: {
				data:[]
			},
			series:[{
				name:'电位1',
				data:data["EEG FP1-F7"]
			},{
				name:'电位2',
				data:data["EEG F7-T3"]
			},{
				name:'电位3',
				data:data["EEG T3-T5"]
			},{
				name:'电位4',
				data:data["EEG T5-O1"]
			},{
				name:'电位5',
				data:data["EEG Fp2-F8"]
			},{
				name:'电位6',
				data:data["EEG F8-T4"]
			},{
				name:'电位7',
				data:data["EEG T4-T6"]
			},{
				name:'电位8',
				data:data["EEG T6-O2"]
			},{
				name:'电位9',
				data:data["EEG Fp1-F3"]
			},{
				name:'电位10',
				data:data["EEG F3-C3"]
			},{
				name:'电位11',
				data:data["EEG C3-P3"]
			},{
				name:'电位12',
				data:data["EEG P3-O1"]
			},{
				name:'电位13',
				data:data["EEG Fp2-F4"]
			},{
				name:'电位14',
				data:data["EEG F4-C4"]
			},{
				name:'电位15',
				data:data["EEG C4-P4"]
			},{
				name:'电位16',
				data:data["EEG P4-O2"]
			},{
				name:'电位17',
				data:data["EEG Fz-Cz"]
			},{
				name:'电位18',
				data:data["EEG Cz-Pz"]
			},{
				name:'电位19',
				data:data["EEG EKG"]
			},{
				name:'电位20',
				data:data.data
			}]
		})
	});
}
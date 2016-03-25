fileFalse=false;
window.onload=function (){
	if(fileFalse)
		alert("请上传EDF格式的文件");
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
						min:-50,
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
						name: 'Fp1-F7',
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
						name: 'F7-T3',
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
						name: 'T3-T5',
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
						name: 'T5-O1',
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
						name: 'Fp2-F8',
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
						name: 'F8-T4',
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
						name: 'T4-T6',
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
						name: 'T6-O2',
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
						name: 'Fp1-F3',
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
						name: 'F3-C3',
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
						name: 'C3-P3',
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
						name: 'P3-O1',
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
						name: 'Fp2-F4',
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
						name: 'F4-C4',
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
						name: 'C4-P4',
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
						name: 'P4-O2',
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
						name: 'Fz-Cz',
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
						name: 'Cz-Pz',
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
						name: 'ECG EKG',
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
//window.onload=setEcharts();

function show(page,filename=null){
	alert(""+filename+page);
	url = 'http://127.0.0.1:5000/getdata?filename='+filename+'&page='+page;
	myChart = echarts.getInstanceByDom(document.getElementById('main'));
	$.get(url).done(function (data) {
		myChart.setOption({
			 xAxis: {
				data:[]
			},
			series:[{
				name:'Fp1-F7',
				data:data["EEG Fp1-F7"]
			},{
				name:'F7-T3',
				data:data["EEG F7-T3"]
			},{
				name:'T3-T5',
				data:data["EEG T3-T5"]
			},{
				name:'T5-O1',
				data:data["EEG T5-O1"]
			},{
				name:'Fp2-F8',
				data:data["EEG Fp2-F8"]
			},{
				name:'F8-T4',
				data:data["EEG F8-T4"]
			},{
				name:'T4-T6',
				data:data["EEG T4-T6"]
			},{
				name:'T6-O2',
				data:data["EEG T6-O2"]
			},{
				name:'Fp1-F3',
				data:data["EEG Fp1-F3"]
			},{
				name:'F3-C3',
				data:data["EEG F3-C3"]
			},{
				name:'C3-P3',
				data:data["EEG C3-P3"]
			},{
				name:'P3-O1',
				data:data["EEG P3-O1"]
			},{
				name:'Fp2-F4',
				data:data["EEG Fp2-F4"]
			},{
				name:'F4-C4',
				data:data["EEG F4-C4"]
			},{
				name:'C4-P4',
				data:data["EEG C4-P4"]
			},{
				name:'P4-O2',
				data:data["EEG P4-O2"]
			},{
				name:'Fz-Cz',
				data:data["EEG Fz-Cz"]
			},{
				name:'Cz-Pz',
				data:data["EEG Cz-Pz"]
			},{
				name:'ECG EKG',
				data:data["ECG EKG"]
			},{
				name:'电位20',
				data:[]
			}]
		})
	});
}
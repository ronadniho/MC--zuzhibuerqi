$(function () {
    var headerH = $('.header').height();
    var containerH = $('.container').height();
    $('.content').css('height', (containerH - headerH) + 'px');


    var contentH = $('.content').height();
    $('.aside-middle').css('height', (containerH - headerH - 24) + 'px');
    $('.aside-right').css('height', (containerH - headerH - 24) + 'px');
    $('.aside-left').css('height', (containerH - headerH - 24) + 'px');


    //TODO:广告轮播
    $("#breakingnews").BreakingNews({
        background: "transparent",
        title: "BREAKING NEWS",
        titlecolor: "#FFF",
        // titlebgcolor		:"#099",
        // linkcolor		:"#333",
        // linkhovercolor		:"#099",
        fonttextsize: 14,
        isbold: false,
        // border			:"solid 2px #099",
        width: "89%",
        timer: 3000,
        autoplay: true,
        effect: "slide",
    });


    $(window).resize(function ()// 绑定到窗口的这个事件中
    {
        getFontSize();
        var headerW = $('.header').width();
        var logoW = $('.logo').width();
        $('.nav').css('width', (headerW - logoW ) + 'px');
    });
    getFontSize();



    setTimeout(function () {
        //基本配置
        var baseOption = {
            calculable: false,//是否启用拖拽重计算特性
            tooltip: {
                trigger: 'axis',
                textStyle:{
                    fontSize:12,
                }
            },
        }


        //班子能力素质模型 配置
        var bzmxOption = {
            color: [
                "#ff56bd",
                "#ffc772",
                "#da70d6",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            polar: [
                {
                    name: {
                        show: true, // 是否显示工艺等文字
                        formatter: null, // 工艺等文字的显示形式
                        textStyle: {
                            color: '#fff' // 工艺等文字颜色
                        }
                    },
                    indicator: [
                        {text: '敢于担当', max: 10},
                        {text: '大局意识', max: 10},
                        {text: '组织协调', max: 10},
                        {text: '表达沟通', max: 10},
                        {text: '决断力', max: 10},
                        {text: '应变能力', max: 10},
                        {text: '文字表达能力', max: 10},
                        {text: '执行力强', max: 10}
                    ]
                }
            ],
            series: [
                {
                    name: '班子能力素质模型',
                    type: 'radar',
                    symbol: "none", // 去掉图表中各个图区域的边框线拐点
                    data: [
                        {
                            value: [6, 8, 7, 5, 3, 6, 4, 9],
                            name: '实际'
                        },
                        {
                            value: [4, 6, 9, 6, 5, 6, 4, 4],
                            name: '标准'
                        }
                    ]
                }
            ]
        };
        //岗位经历 配置
        var gwjlOption = {
            color: [
                "#ff56bd",
                "#ffc772",
                "#da70d6",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            polar: [
                {
                    name: {
                        show: true, // 是否显示工艺等文字
                        formatter: null, // 工艺等文字的显示形式
                        textStyle: {
                            color: '#fff' // 工艺等文字颜色
                        }
                    },
                    indicator: [
                        {text: '党务', max: 10},
                        {text: '文体', max: 10},
                        {text: '农业', max: 10},
                        {text: '经济', max: 10},
                        {text: '行政', max: 10},
                        {text: '文秘', max: 10},
                        {text: '后勤', max: 10},
                        {text: '人事', max: 10}
                    ]
                }
            ],
            series: [
                {
                    name: '岗位经历',
                    type: 'radar',
                    symbol: "none", // 去掉图表中各个图区域的边框线拐点
                    data: [
                        {
                            value: [6, 8, 7, 5, 3, 6, 4, 9],
                            name: '实际'
                        },
                        {
                            value: [4, 6, 9, 6, 5, 6, 4, 4],
                            name: '标准'
                        }
                    ]
                }
            ]
        };
        //熟悉领域 配置
        var sxlyOption = {
            color: [
                "#ff56bd",
                "#ffc772",
                "#da70d6",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            polar: [
                {
                    name: {
                        show: true, // 是否显示工艺等文字
                        formatter: null, // 工艺等文字的显示形式
                        textStyle: {
                            color: '#fff' // 工艺等文字颜色
                        }
                    },
                    indicator: [
                        {text: '计划联络类', max: 10},
                        {text: '服务保障类', max: 10},
                        {text: '农林生态类', max: 10},
                        {text: '城建交通类', max: 10},
                        {text: '科教文卫类', max: 10},
                        {text: '执纪执法类', max: 10},
                        {text: '经济管理类', max: 10},
                        {text: '产业金贸类', max: 10},
                        {text: '党群政工类', max: 10}
                    ]
                }
            ],
            series: [
                {
                    name: '熟悉领域',
                    type: 'radar',
                    symbol: "none", // 去掉图表中各个图区域的边框线拐点
                    data: [
                        {
                            value: [6, 8, 7, 5, 3, 6, 4, 9, 2],
                            name: '实际'
                        },
                        {
                            value: [4, 6, 9, 6, 5, 6, 4, 4, 5],
                            name: '标准'
                        }
                    ]
                }
            ]
        };
        //专业 配置
        var zyOption = {
            color: [
                "#ff56bd",
                "#ffc772",
                "#da70d6",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            polar: [
                {
                    name: {
                        show: true, // 是否显示工艺等文字
                        formatter: null, // 工艺等文字的显示形式
                        textStyle: {
                            color: '#fff' // 工艺等文字颜色
                        }
                    },
                    indicator: [
                        {text: '哲学', max: 10},
                        {text: '医学', max: 10},
                        {text: '文学', max: 10},
                        {text: '经济学', max: 10},
                        {text: '理学', max: 10},
                        {text: '农学', max: 10},
                        {text: '教育学', max: 10},
                        {text: '工学', max: 10},
                        {text: '管理学', max: 10}
                    ]
                }
            ],
            series: [
                {
                    name: '专业',
                    type: 'radar',
                    symbol: "none", // 去掉图表中各个图区域的边框线拐点
                    data: [
                        {
                            value: [6, 8, 7, 5, 3, 6, 4, 9, 2],
                            name: '实际'
                        },
                        {
                            value: [4, 6, 9, 6, 5, 6, 4, 4, 5],
                            name: '标准'
                        }
                    ]
                }
            ]
        };
        //能力 配置
        var nlOption = {
            color: [
                "#ff56bd",
                "#ffc772",
                "#da70d6",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            polar: [
                {
                    name: {
                        show: true, // 是否显示工艺等文字
                        formatter: null, // 工艺等文字的显示形式
                        textStyle: {
                            color: '#fff' // 工艺等文字颜色
                        }
                    },
                    indicator: [
                        {text: '文字表达', max: 10},
                        {text: '大局意识', max: 10},
                        {text: '应变能力', max: 10},
                        {text: '决断力', max: 10},
                        {text: '狠抓实干', max: 10},
                        {text: '组织协调', max: 10},
                        {text: '依法行政', max: 10},
                        {text: '敢于担当', max: 10}
                    ]
                }
            ],
            series: [
                {
                    name: '能力',
                    type: 'radar',
                    symbol: "none", // 去掉图表中各个图区域的边框线拐点
                    data: [
                        {
                            value: [6, 8, 7, 5, 3, 6, 4, 9],
                            name: '实际'
                        },
                        {
                            value: [4, 6, 9, 6, 5, 6, 4, 4],
                            name: '标准'
                        }
                    ]
                }
            ]
        };
        //特性 配置
        var txOption = {
            color: [
                "#ff56bd",
                "#ffc772",
                "#da70d6",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            polar: [
                {
                    name: {
                        show: true, // 是否显示工艺等文字
                        formatter: null, // 工艺等文字的显示形式
                        textStyle: {
                            color: '#fff' // 工艺等文字颜色
                        }
                    },
                    indicator: [
                        {text: '视野开阔', max: 10},
                        {text: '大局意识', max: 10},
                        {text: '思路清晰', max: 10},
                        {text: '谦虚谨慎', max: 10},
                        {text: '乐观开朗', max: 10},
                        {text: '急躁浮躁', max: 10},
                        {text: '严厉苛刻', max: 10},
                        {text: '性格内向', max: 10}
                    ]
                }
            ],
            series: [
                {
                    name: '特性',
                    type: 'radar',
                    symbol: "none", // 去掉图表中各个图区域的边框线拐点
                    data: [
                        {
                            value: [6, 8, 7, 5, 3, 6, 4, 9],
                            name: '实际'
                        },
                        {
                            value: [4, 6, 9, 6, 5, 6, 4, 4],
                            name: '标准'
                        }
                    ]
                }
            ]
        };
        //年龄分布 配置
        var nlfbOption = {
            color: [
                "#ffc976",
                "#8acff8",
                "#fa8ebc",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                x: 35,
                y: 55,
                x2: 35,
                y2: 60,
                borderWidth: 1
            },

            legend: {
                data: ['本单位', '本领域', '全市'],
                textStyle: {
                    color: '#fff'
                },
                x: 'right',
                y: '19px'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['25岁及以下', '36-40岁', '41-45岁', '46-50岁', '51-55岁', '56-60岁', '60岁及以上', '60岁及以上'],
                    axisLabel: {
                        interval: 0,//横轴信息全部显示
                        rotate: -30,//-30度角倾斜显示
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    min: 0,
                    max: 100,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '本单位',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 55.7, 66, 77.2]
                },
                {
                    name: '本领域',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 56, 32]
                },
                {
                    name: '全市',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 76, 22]
                }
            ]
        };
        //学历情况 配置
        var xlqkOption = {
            color: [
                "#ffc976",
                "#8acff8",
                "#fa8ebc",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                x: 35,
                y: 55,
                x2: 35,
                y2: 60,
                borderWidth: 1
            },

            legend: {
                data: ['本单位', '本领域', '全市'],
                textStyle: {
                    color: '#fff'
                },
                x: 'right',
                y: '19px'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['25岁及以下', '36-40岁', '41-45岁', '46-50岁', '51-55岁', '56-60岁', '60岁及以上', '60岁及以上'],
                    axisLabel: {
                        interval: 0,//横轴信息全部显示
                        rotate: -30,//-30度角倾斜显示
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    min: 0,
                    max: 100,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '本单位',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 55.7, 66, 77.2]
                },
                {
                    name: '本领域',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 56, 32]
                },
                {
                    name: '全市',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 76, 22]
                }
            ]
        };


        //任现职级情况 配置
        var rxzjqkOption = {
            color: [
                "#ffc976",
                "#8acff8",
                "#fa8ebc",
                "#32cd32",
                "#6495ed",
                "#ff69b4",
                "#ba55d3",
                "#cd5c5c",
                "#ffa500",
                "#40e0d0",
                "#1e90ff",
                "#ff6347",
                "#7b68ee",
                "#00fa9a",
                "#ffd700",
                "#6699FF",
                "#ff6666",
                "#3cb371",
                "#b8860b",
                "#30e0e0"
            ],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                x: 35,
                y: 55,
                x2: 35,
                y2: 60,
                borderWidth: 1
            },

            legend: {
                data: ['本单位', '本领域', '全市'],
                textStyle: {
                    color: '#fff'
                },
                x: 'right',
                y: '19px'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['正处', '副处', '正厅', '副厅'],
                    axisLabel: {
                        /*interval: 0,//横轴信息全部显示
                        rotate: -30,//-30度角倾斜显示*/
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    min: 0,
                    max: 100,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '本单位',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2]
                },
                {
                    name: '本领域',
                    type: 'bar',
                    data: [28.7, 70.7, 56, 32]
                },
                {
                    name: '全市',
                    type: 'bar',
                    data: [2.6, 5.9, 76, 22]
                }
            ]
        };

        bzmxOption = $.extend(bzmxOption, baseOption);
        gwjlOption = $.extend(gwjlOption, baseOption);
        sxlyOption = $.extend(sxlyOption, baseOption);
        zyOption = $.extend(zyOption, baseOption);
        nlOption = $.extend(nlOption, baseOption);
        txOption = $.extend(txOption, baseOption);
        nlfbOption = $.extend(nlfbOption, baseOption);
        xlqkOption = $.extend(xlqkOption, baseOption);
        rxzjqkOption = $.extend(rxzjqkOption, baseOption);

        var bzmxMain = document.getElementById('bzmx-main');
        var gwjlMain = document.getElementById('gwjl-main');
        var sxlyMain = document.getElementById('sxly-main');
        var zyMain = document.getElementById('zy-main');
        var nlMain = document.getElementById('nl-main');
        var txMain = document.getElementById('tx-main');
        var nlfbMain = document.getElementById('nlfb-main');
        var xlqkMain = document.getElementById('xlqk-main');
        var rxzjqkMain = document.getElementById('rxzjqk-main');

        bzmxChart = echarts.init(bzmxMain);
        gwjlChart = echarts.init(gwjlMain);
        sxlyChart = echarts.init(sxlyMain);
        zyChart = echarts.init(zyMain);
        nlChart = echarts.init(nlMain);
        txChart = echarts.init(txMain);
        nlfbChart = echarts.init(nlfbMain);
        xlqkChart = echarts.init(xlqkMain);
        rxzjqkChart = echarts.init(rxzjqkMain);

        bzmxChart.setOption(bzmxOption, true);
        gwjlChart.setOption(gwjlOption, true);
        sxlyChart.setOption(sxlyOption, true);
        zyChart.setOption(zyOption, true);
        nlChart.setOption(nlOption, true);
        txChart.setOption(txOption, true);
        nlfbChart.setOption(nlfbOption, true);
        xlqkChart.setOption(xlqkOption, true);
        rxzjqkChart.setOption(rxzjqkOption, true);

        window.onresize = bzmxChart.resize;
        window.onresize = gwjlChart.resize;
        window.onresize = sxlyChart.resize;
        window.onresize = zyChart.resize;
        window.onresize = nlChart.resize;
        window.onresize = txChart.resize;
        window.onresize = nlfbChart.resize;
        window.onresize = xlqkChart.resize;
        window.onresize = rxzjqkChart.resize;


    }, 1000)

});
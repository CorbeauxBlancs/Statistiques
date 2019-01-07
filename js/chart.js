
Highcharts.chart('container', {
    
    title: {
        text: ''
      },
      xAxis: {
        categories: ['Mar', 'Apr', 'may', 'jun']
      },
      yAxis: {
          visible: false
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      navigation: {
        buttonOptions: {
          enabled: false
          }
      },
      plotOptions: {
          series: {
              groupPadding: 0.2
          }
      },
    series: [{
      name: 'Xp',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: 'HeroCon',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Lvl',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });


  /* Highcharts.chart('container', {
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Mar', 'Apr', 'may', 'jun']
    },
    yAxis: {
        visible: false
    },
    navigation: {
      buttonOptions: {
        enabled: false
        }
    },
    plotOptions: {
        series: {
            groupPadding: 0.2
        }
    },
    series: [{
      type: 'column',
      name: 'spent',
      color: 'red',
      showInLegend: false,
      data: [2, 3, 5, 6]
    }, {
      type: 'column',
      name: 'profit',
      color: 'green',
      showInLegend: false,
      data: [4, 3, 6, 9]
    }, {
      type: 'spline',
      name: 'Average',
      color: "blue",
      showInLegend: false,
      data: [3, 3, 5.5, 7.5],
      marker: {
        lineWidth: 4,
        lineColor: 'blue',
        fillColor: 'blue'
      }
    }]
  });
   */
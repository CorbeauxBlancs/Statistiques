
Highcharts.chart('xp-container', {
    chart: { 
      backgroundColor:'#F1DDBD'
    },

    title: {
        text: ''
      },
      xAxis: {
        categories: ['Mar', 'Apr', 'may', 'jun']
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
      name: 'Level',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      color: 'red'
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


  Highcharts.chart('stat-container', {
    chart: { 
      backgroundColor:'#F1DDBD'
    },
    title: {
        text: ''
      },
      xAxis: {
        categories: ['Mar', 'Apr', 'may', 'jun']
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
      name: 'stat',
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



Highcharts.chart('hc-container', {
  chart: { 
    backgroundColor:'#F1DDBD'
  },
  title: {
      text: ''
    },
    xAxis: {
      categories: ['06/01']
    },
    yAxis: {
      reversed: true
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
    name: 'hc',
    data: [6, 3, 1, 7, 9, 1, 3, 13],
    color: "orange"
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


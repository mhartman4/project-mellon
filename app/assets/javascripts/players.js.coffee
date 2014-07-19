# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

this.renderChart = (id, statName, chartData, categories) ->
  min = jStat(chartData).min()
  firstQuartile = jStat(chartData).quartiles()[0]
  median = jStat(chartData).median()
  mean = jStat(chartData).mean()
  thirdQuartile = jStat(chartData).quartiles()[2]
  max = jStat(chartData).max()
  sd = jStat(chartData).stdev()

  $("#min").text round(min)
  $("#1st-quart").text round(firstQuartile)
  $("#median").text round(median)
  $("#mean").text round(mean)
  $("#3rd-quart").text round(thirdQuartile)
  $("#max").text round(max)

  new Highcharts.Chart(
    chart:
      renderTo: id

    title:
      text: statName

    xAxis:
      categories: categories

    yAxis:
      title:
        text: statName

      gridLineColor: "#EDEDED"
      plotLines: [
        {
          color: "#FF0000"
          width: 2
          value: mean
        }
        {
          color: "#97C74E"
          width: 2
          value: mean - sd
        }
        {
          color: "#97C74E"
          width: 2
          value: mean + sd
        }
      ]

    tooltip:
      formatter: ->
        @x + ": " + Math.round(@y * 100) / 100

    series: [
      {
        name: statName
        data: chartData
      }
      {
        name: "Mean"
        color: "#FF0000"
        data: []
      }
      {
        name: "1 SD above/below"
        color: "#97C74E"
        data: []
      }
    ]
  )

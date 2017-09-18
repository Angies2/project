<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div class="pic-nature">
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'second',
    data () {
      return {
        msg: 'myChart'
      }
    },
    mounted () {
      this.drawBar()
    },
    methods: {
      drawBar () {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '柱状图' },
          tooltip: {},
          xAxis: {
            data: ['笔记本', '钢笔', '圆珠笔', '橡皮擦', '文具盒']
          },
          yAxis: {},
          series: [{
            name: '数量',
            type: 'bar',
            data: [5, 10, 11, 23, 22]
          }]
        })
      }
    }
  }
</script>

<style scoped>
  .pic-nature {
    text-align: center;
    display: inline-block;
  }
</style>

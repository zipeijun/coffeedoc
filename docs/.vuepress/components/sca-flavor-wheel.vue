<template>
    <div ref="canvas" class="canvas"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import data from './data/data-sca-flavor-wheel.json'

const canvas = ref(0)
const option = {
    // title: {
    //     text: 'SCA 咖啡风味轮',
    //     subtext: '资料来源：https://worldcoffeeresearch.org/work/sensory-lexicon/',
    //     textStyle: {
    //         fontSize: 14,
    //         align: 'center'
    //     },
    //     subtextStyle: {
    //         align: 'center'
    //     },
    //     sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
    // },
    series: {
        type: 'sunburst',
        data: data,
        radius: [0, '95%'],
        sort: void 0,
        emphasis: {
            focus: 'ancestor'
        },
        levels: [
            {},
            {
                r0: '15%',
                r: '35%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            },
            {
                r0: '35%',
                r: '70%',
                label: {
                    align: 'right'
                }
            },
            {
                r0: '70%',
                r: '72%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 3
                }
            }
        ]
    }
}

onMounted(() => {
    const myChart = echarts.init(canvas.value)
    myChart.setOption(option)
    window.onresize = () => {
        myChart.resize()
    }
})
</script>

<style scoped>
.canvas {
    height: var(--content-width);
}
@media (max-width: 719px) {
    .canvas {
        height: 100vw;
    }
}
</style>

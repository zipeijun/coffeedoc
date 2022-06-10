<template>
    <div ref="canvas" class="canvas"></div>
    <el-drawer v-model="drawer" direction="btt" size="80%" :title="showData?.label || ''">
        <p class="title">气味（odor）：</p>
        <p class="text">{{showData?.odorCN || '-'}}</p>
        <p class="text">{{showData?.odor || '-'}}</p>
        <p></p>
        <p class="title">风味（flavor）：</p>
        <p class="text">{{showData?.flavorCN || '-'}}</p>
        <p class="text">{{showData?.flavor || '-'}}</p>
    </el-drawer>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, computed, reactive, watch } from 'vue'
import originalData from './data/data.json'
import { useEventListener, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
})

const tablet = breakpoints.between('tablet', 'laptop')
const laptop = breakpoints.between('laptop', 'desktop')

const props = defineProps({
    lang: { type: String, default: 'EN'}
})

const canvas = ref(0)
const emit = defineEmits(['change'])

const drawer = ref(false)
const showData = ref(null)

const colorInfo = {
    Alliaceous: '#6a4b8f',
    Animalic: '#015392',
    Buttery: '#4099be',
    Cocoa: '#036644',
    Earthy: '#70a954',
    Floral: '#f7a718',
    Fruity: '#de7510',
    Green: '#c75735',
    'Meat/Savoury': '#ac2e6e',
    Musty: '#753f77',
    Nutty: '#a85095',
    Roasted: '#5c595c',
    Smoke: '#44778f',
    Sour: '#a76b53',
    Spicy: '#3773bc',
    Sweet: '#34783e',
    Vanilla: '#b16081',
    Vegetative: '#095fa1'
}

const dataConverter = item => ({
    group: item['组别-ENG'],
    chemical: item['化学名'],
    odor: item['odor(气味)'],
    flavor: item['flavor（风味）'],
    groupCN: item['组别-CN'],
    chemicalCN: item['中文翻译'],
    odorCN: item['备注1'],
    flavorCN: item['备注2'],
})

const dataTreeCN = originalData.map(dataConverter).reduce((a, b) => {
    const children = {
        isChildren: true,
        name: b.chemicalCN,
        data: b,
        lineStyle: { color: colorInfo[b.group] },
        itemStyle: { color: colorInfo[b.group] },
        label: { color: colorInfo[b.group] },
    }
    if (!a[b.group]) {
        a[b.group] = {
            name: b.groupCN,
            children: [children],
            lineStyle: { color: colorInfo[b.group] },
            itemStyle: { color: colorInfo[b.group] },
            label: { color: colorInfo[b.group] }
        }
    } else {
        a[b.group].children.push(children)
    }
    return a
}, {})
const dataTreeEN = originalData.map(dataConverter).reduce((a, b) => {
        const children = {
        isChildren: true,
        name: b.chemical,
        data: b,
        lineStyle: { color: colorInfo[b.group] },
        itemStyle: { color: colorInfo[b.group] },
        label: { color: colorInfo[b.group] },
    }
    if (!a[b.group]) {
        a[b.group] = {
            name: b.group,
            children: [children],
            lineStyle: { color: colorInfo[b.group] },
            itemStyle: { color: colorInfo[b.group] },
            label: { color: colorInfo[b.group] }
        }
    } else {
        a[b.group].children.push(children)
    }
    return a
}, {})

const echartsLayout = {}
echartsLayout.radial = {
    type: 'tree',
    layout: 'radial',
    top: '16%',
    right: '16%',
    bottom: '16%',
    left: '16%',
    label: {
        fontSize: 10
    }
}
echartsLayout.orthogonal = {
    type: 'tree',
    layout: 'orthogonal',
    edgeShape: 'polyline',
    initialTreeDepth: 1,
    right: '50%',
    labelLayout: params => ({
        align: 'left',
        verticalAlign: 'middle',
        x: params.rect.x + 20,
        y: params.rect.y + params.rect.height / 2
    })
}

const createOption = ({ layout = 'radial', lang = 'CN' }) => ({
    series: [
        {
            data: [{ children: Object.values(lang === 'CN' ? dataTreeCN : dataTreeEN) }],
            ...echartsLayout[layout]
        }
    ]
})

onMounted(() => {
    const myChart = echarts.init(canvas.value)
    myChart.setOption(createOption({ layout: 'radial', lang: props.lang }))
    myChart.on('click', params => {
        if (params.data.isChildren) {
            if (tablet.value) {
                showData.value = {
                    label: params.data.name,
                    ...params.data.data
                }
                drawer.value = true
            } else {
                emit('change', params.data.data)
            }
        }
    })
    useEventListener(window, 'resize', () => myChart.resize())
})

</script>

<style scoped>
.canvas {
    height: calc(100vh - var(--navbar-height));
}
</style>

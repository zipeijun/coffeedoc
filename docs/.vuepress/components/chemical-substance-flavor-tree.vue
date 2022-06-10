<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
        <template #default="{ data }">
            <div class="custom-tree-node">
                <span>{{data.label}}</span>
            </div>
        </template>
    </el-tree>
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
import { ref, onMounted, computed } from 'vue'
import originalData from './data/data.json'

const props = defineProps({
    lang: { type: String, default: 'EN'}
})

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
        label: b.chemicalCN,
        data: b
    }
    if (!a[b.group]) {
        a[b.group] = {
            label: b.groupCN,
            children: [children]
        }
    } else {
        a[b.group].children.push(children)
    }
    return a
}, {})
const dataTreeEN = originalData.map(dataConverter).reduce((a, b) => {
    const children = {
        isChildren: true,
        label: b.chemical,
        data: b
    }
    if (!a[b.group]) {
        a[b.group] = {
            label: b.group,
            children: [children]
        }
    } else {
        a[b.group].children.push(children)
    }
    return a
}, {})

const handleNodeClick = data => {
    if (data.isChildren) {
        showData.value = {
            label: data.label,
            ...data.data
        }
        drawer.value = true
    }
}

const data = computed(() => Object.values(props.lang === 'EN' ? dataTreeEN : dataTreeCN))

const defaultProps = {
  children: 'children',
  label: 'label',
}

</script>

<style scoped>
.title {
    font-size: var(--el-font-size-base);
    margin: 0;
}
.text {
    font-size: var(--el-font-size-large);
    margin: 0;
}
</style>

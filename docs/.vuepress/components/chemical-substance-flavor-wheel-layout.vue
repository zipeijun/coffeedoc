<template>
    <DefaultLayout>
        <template v-slot:page>
            <div class="container">
                <div :class="[mobile ? 'option-group-mobile' : 'option-group']">
                    <el-radio-group v-model="lang">
                        <el-radio-button label="中文" />
                        <el-radio-button label="English" />
                    </el-radio-group>
                </div>

                <chemical-substance-flavor-tree v-if="mobile" :lang="{ '中文': 'CN', 'English': 'EN' }[lang]" />
                <chemical-substance-flavor-wheel v-else-if="lang === '中文'" lang="CN" @change="handleChange" />
                <chemical-substance-flavor-wheel v-else-if="lang === 'English'" lang="EN" @change="handleChange" />

                <div :class="[desktop ? 'info' : 'info-table']" v-if="(laptop || desktop) && showData">
                    <p class="title">
                        <b>{{showData.chemicalCN}}（{{showData.chemical}}）</b>
                    </p>
                    <p></p>
                    <p class="title">气味（odor）：</p>
                    <p class="text">{{showData?.odorCN || '-'}}</p>
                    <p class="text">{{showData?.odor || '-'}}</p>
                    <p></p>
                    <p class="title">风味（flavor）：</p>
                    <p class="text">{{showData?.flavorCN || '-'}}</p>
                    <p class="text">{{showData?.flavor || '-'}}</p>
                </div>
            </div>
        </template>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { ref, watch } from 'vue'
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
})

const mobile = breakpoints.smaller('tablet')
const laptop = breakpoints.between('laptop', 'desktop')
const desktop = breakpoints.greater('desktop')

const lang = ref('中文')

const showData = ref(null)

const handleChange = data => showData.value = data

watch(lang, () => showData.value = null)

</script>

<style scoped>
/* .container {
    margin-top: var(--navbar-height);
    display: flex;
    flex-wrap: wrap;
}

.content {
    flex: 1 1 auto;
    position: relative;
}

.main-content {
    flex: 1 1 1000px;
    border-width: 1wx;
    border-style: solid;
    border-color: red;
} */

/* .card {
    background: #FFF;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
} */

/* .option-group {
    display: flex;
    justify-content: center;
    margin: 10px 0;
} */

/* .title {
    font-size: var(--el-font-size-base);
    margin: 0;
}
.text {
    font-size: var(--el-font-size-large);
    margin: 0;
} */

.container {
    margin-top: var(--navbar-height);
    position: relative;
}

.option-group {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
}

.option-group-mobile {
    display: flex;
    justify-content: center;
    padding: 10px 0;
}

.info {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 400px;
    min-height: 100px;
    padding: 10px;

    background: #FFF;
    box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);
    border-radius: 10px;
}

.info-table {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 200px;
    min-height: 100px;
    padding: 10px;

    background: #FFF;
    box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);
    border-radius: 10px;
}

</style>

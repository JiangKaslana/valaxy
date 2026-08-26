<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <div class="disclaimer max-w-2xl mx-auto text-xs op-70">
      本网站为非商业性个人 Blog。网站中涉及的角色、名称及相关媒体素材，其权利归米哈游及相关权利人所有。本网站与米哈游及其官方创作者无任何关联，亦未获得官方授权或认可。
    </div>
    <div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>
    <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>

    <VCLiveTime mt="2" start-time="2022-01-01">
      <template #live-time-before>
        <span>本站已运行</span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>

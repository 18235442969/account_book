<template>
  <img alt="Vue logo" src="@/assets/logo.png" @click="changeApi" />
  {{globalApi}}
  <a-input v-model:value="value" placeholder="Basic usage" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { key } from '../../store/index'

export default defineComponent({
  name: 'App',
  setup() {
    let store = useStore(key)
    const globalApi = computed(() => {
      return store.state.globalApi
    })
    const changeApi = () => {
      store.dispatch('changeApi', '222')
    }

    return {
      globalApi,
      changeApi
    }
  }
})
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    img{
      width: 200px;
    }
  }
</style>

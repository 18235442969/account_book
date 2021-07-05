import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// 为 store state 声明类型
export interface State {
    globalApi: string
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    globalApi: "111"
  },
  mutations: {
    changeApi(state, data) {
      state.globalApi = data
    }
  },
  actions: {
    changeApi(context, data) {
      context.commit('changeApi', data)
    }
  }
})
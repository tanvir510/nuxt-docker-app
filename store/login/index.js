export const state = () => ({
    name: 'Shareel Admin Panel',
})

export const getters = {
    getName: (state) => state.name
}

export const mutations = {
    setName(state, status){
        state.name = status
    }
}

export const actions = {
    fetchName({commit}, payload){
        commit('setName', payload)
    }
}
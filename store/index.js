import axios from 'axios'
import { getExperiences } from '~/services/Resumeservice.mjs'
import { getPosts } from '~/services/Postservice.mjs'
import { fetchData } from '~/services/Initservice.mjs'
export const state = () => {
  posts: [];
  experiences: [];
  formations: []
}

export const mutations = {
  addPost(state, { post }) {
    state.posts.push(post)
  },
  removePost(state, { post }) {
    state.posts.splice(state.posts.indexOf(post), 1)
  },
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_EXPERIENCES(state, experiences) {
    state.experiences = experiences
  },
  SET_FORMATIONS(state, formations) {
    state.formations = formations
  }
}

export const actions = {
  async nuxtServerInit({ dispatch, commit }, context) {
    try {
      // dispatch('FETCH_POSTS');
      // dispatch('FETCH_EXPERIENCES');
      let data = await fetchData();
      console.log('NUXT_SERVER_INIT: ', data)
      commit('SET_POSTS', data.posts)
      commit('SET_EXPERIENCES', data.experiences);
    } catch (error) {
      console.log("nuxtServerInit--Error: ", error)
    }
  },
  async FETCH_POSTS({ commit }) {
    try {
      let { data } = await getPosts()
      commit('SET_POSTS', data)
    } catch (error) {
      console.log("FETCH_POSTS ERROR: ", error)
    }
  },
  async FETCH_EXPERIENCES({ commit }) {
    try {
      let res = await getExperiences()
      commit('SET_EXPERIENCES', res);
    } catch (error) {
      console.log("FETCH_EXPERIENCES ERROR: ", error)
    }
  }
}
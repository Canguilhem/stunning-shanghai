import axios from 'axios'
import {getExperiences} from '~/services/Experienceservice.mjs'
import {getPosts} from '~/services/Postservice.mjs'
import {fetchData} from '~/services/Initservice.mjs'
export const state = () => {
  posts: [];
  experiences: []
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
      console.log("MUTATION:SET_EXPERIENCE")
      state.experiences = experiences
    }
}

export const actions = {
  async nuxtServerInit({dispatc, commit}, context){
      try {
        // dispatch('FETCH_POSTS');
        // dispatch('FETCH_EXPERIENCES');
      let data  = await fetchData();
      commit('SET_POSTS', data.posts)
      commit('SET_EXPERIENCES', data.experiences);
      console.log(data);
      } catch (error) {
        console.log("nuxtServerInit--Error: ", error)
      }
  },
  async FETCH_POSTS({ commit }) {
    console.log("ACTION:FETCH_POSTS")
      try {
        let { data } = await getPosts()
        console.log("ACTION:FETCH_POSTS_DATA:", data.length)
        commit('SET_POSTS', data)
      } catch (error) {
        console.log("FETCH_POSTS ERROR: ",error)
      }
    },
  async FETCH_EXPERIENCES({ commit }) {
    try {
      console.log("ACTION:FETCH_EXPERIENCES")
      let res = await getExperiences()
      console.log("ACTION:FETCH_EXPERIENCES_RES", res.length)
      commit('SET_EXPERIENCES', res);
    } catch (error) {
      console.log("FETCH_EXPERIENCES ERROR: ",error)
    }
  }
}
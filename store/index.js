import axios from 'axios'
import Vue from 'vue';
import Vuex from 'vuex';

const CreateStore = () => {

return new Vuex.Store({
    //  name must be state !!!
    state: {
      posts: []
    },
    getters: {
      getPosts(state) {
        return state.posts
      }
    },
    mutations: {
      addPost(state, { post }) {
        state.posts.push(post)
      },
      removePost(state, { post }) {
        state.posts.splice(state.posts.indexOf(post), 1)
      },
      SET_POSTS(state, posts) {
        state.posts = posts
      }
    },
    actions: {
      async FETCH_POSTS({ commit }) {
        try {
          let { data } = await axios.get(`/api/posts/`);
          commit('SET_POSTS', data)
        } catch (error) {
          console.log(error)
        }
      }
    },
    modules: {
      // counter
    }
  })
} 
  
export default CreateStore

// mutations are comitted
// export const mutations = {
//   addPost(state, { post }) {
//     state.posts.push(post)
//   },
//   removePost(state, { post }) {
//     state.posts.splice(state.posts.indexOf(post), 1)
//   },
//   SET_POSTS(state, posts) {
//     console.log('SET_POSTS')
//     state.posts = posts
//   }

// }

// actions ate dispatched
// export const actions = {
//   nuxtServerInit(context, ctx) {
//     console.log('NUXT_SERVER_INIT')
//     // console.log(context)
//     // console.log(ctx)
//   },
//   async GET_POSTS({ commit }) {
//     console.log('GET_POSTS')
//     let { data } = await axios.get(`http://localhost:3000/api/posts/`);
//     commit('SET_POSTS', data)
//   }
// }

// export const getters = {
//   getPosts(state) {
//     console.log('GET_POSTS')
//     console.log(state.posts)
//     return state.posts
//   }
// }
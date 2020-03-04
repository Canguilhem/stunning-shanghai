import axios from 'axios'
// import {getExperiences} from '~/services/Experienceservice.mjs'
// import {getPosts} from '~/services/Postservice.mjs'
import moment from "moment";
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
      state.experiences = experiences
    }
}

export const actions = {
  async nuxtServerInit({commit}, context){
      try {
        let { data } = await axios.get('https://gallant-booth-1c4e5d.netlify.com/.netlify/functions/ReadPost')
        // let { data } = await getPosts()
        commit('SET_POSTS', data) 

        let res = await axios.get('https://gallant-booth-1c4e5d.netlify.com/.netlify/functions/ReadExp')
        res.data.data.forEach(element => {
          element.from = moment(element.from).format("MMM-YY");
          if (element.to) {
            element.to = moment(element.to).format("MMM-YY");
          } else {
            element.to = moment().format("MMM-YY");
          }
        });
        commit('SET_EXPERIENCES', res.data.data) 
        console.log("Store succesfully loaded")
      } catch (error) {
        console.log("nuxtServerInit--Error: ", error)
      }
  },
  async FETCH_POSTS({ commit }) {
      // console.log("Fetching data from server")
      // try {
      //   let { data } = await axios.get('.netlify/functions/ReadPost')
      //   commit('SET_POSTS', data)
      // } catch (error) {
      //   console.log(error)
      // }
    }
}
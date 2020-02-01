import axios from 'axios';

async function getPosts(){
    try {
        return axios.get('.netlify/functions/ReadPost')
    } catch (error) {
        console.log('PostService:getPosts', error)
    }
}

export const getPosts
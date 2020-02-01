import axios from 'axios';

export async function getPosts(){
    try {
        return {data} = await axios.get('.netlify/functions/ReadPost')
    } catch (error) {
        console.log('PostService:getPosts', error)
    }
}

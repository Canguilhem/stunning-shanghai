import axios from 'axios';

export async function getPosts(){
    try {
        let {data} = await axios.get('.netlify/functions/ReadPost')
        return data;
    } catch (error) {
        console.log('PostService:getPosts', error)
    }
}

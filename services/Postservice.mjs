import axios from 'axios';

export async function getPosts(){
    try {
        let {data} = await axios.get('.netlify/functions/ReadPost')
        // let { data } = await axios.get('http://localhost:3000/api/posts')
        return data;
    } catch (error) {
        console.log('PostService:getPosts', error)
    }
}

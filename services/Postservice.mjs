import axios from 'axios';

export async function getPosts(){
    try {
        let {data} = await axios.get('https://gallant-booth-1c4e5d.netlify.com/.netlify/functions/ReadPost')
        return data;
    } catch (error) {
        console.log('PostService:getPosts', error)
    }
}

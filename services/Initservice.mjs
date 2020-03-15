import axios from 'axios';
import moment from "moment";

export async function fetchData(){
    try {
        let res = await axios.get('https://gallant-booth-1c4e5d.netlify.com/.netlify/functions/InitServer')
        let experiences = res.data.experiences;
        console.log('InitService:fetchData:data: ', res.data)
        experiences.forEach(element => {
          element.from = moment(element.from).format("MMM-YY");
          if (element.to) {
            element.to = moment(element.to).format("MMM-YY");
          } else {
            element.to = moment().format("MMM-YY");
          }
        });
        return {
            experiences,
            posts: res.data.posts,
            formations: res.data.formations
        };
    } catch (error) {
        console.log('ExperienceService:getExperiences', error)
    }
}

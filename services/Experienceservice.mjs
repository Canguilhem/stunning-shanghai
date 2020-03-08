import axios from 'axios';
import moment from "moment";

export async function getExperiences(){
    try {
        let res = await axios.get('https://gallant-booth-1c4e5d.netlify.com/.netlify/functions/ReadExp')
        let experiences = res.data.data;
        console.log('ExperienceService:getExperiences:data: ', experiences.length)
        experiences.forEach(element => {
          element.from = moment(element.from).format("MMM-YY");
          if (element.to) {
            element.to = moment(element.to).format("MMM-YY");
          } else {
            element.to = moment().format("MMM-YY");
          }
        });
        return experiences;
    } catch (error) {
        console.log('ExperienceService:getExperiences', error)
    }
}

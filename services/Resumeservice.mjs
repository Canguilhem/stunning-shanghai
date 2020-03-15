import axios from 'axios';
import moment from "moment";

export async function getExperiences(){
    try {
        let res = await axios.get('https://gallant-booth-1c4e5d.netlify.com/.netlify/functions/ReadExp')
        console.log(res)
        let experiences = res.data.experiences
        let formations = res.data.formations
        console.log('ResumeService:getExperiences:data: ', experiences.length)
        experiences.forEach(element => {
          element.from = moment(element.from).format("MMM-YY");
          if (element.to) {
            element.to = moment(element.to).format("MMM-YY");
          } else {
            element.to = moment().format("MMM-YY");
          }
        });
        formations.forEach(element => {
          element.from = moment(element.from).format("MMM-YY");
          if (element.to) {
            element.to = moment(element.to).format("MMM-YY");
          } else {
            element.to = moment().format("MMM-YY");
          }
        });
        return {
          experiences,
          formations
        };
    } catch (error) {
        console.log('ExperienceService:getExperiences', error)
    }
}

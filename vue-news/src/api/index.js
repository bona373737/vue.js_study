import axios from "axios";

const config={
    basUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList(){
    return axios.get(`${config.basUrl}news/1.json`);
}
function fetchAskList(){
    return axios.get(`${config.basUrl}ask/1.json`);
}
function fetchJobsList(){
    return axios.get(`${config.basUrl}jobs/1.json`);
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList
}
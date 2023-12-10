import axios from "axios";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "2b5a2e1ffd7a443085d13d5001dfac90";

export async function fetchTopHeadlines(){
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllNews(){
  try{
    const response = await axios.get(`${BASE_URL}/everything?q=india election&apiKey=${API_KEY}`);
    return response.data;
  } catch(error){
    console.log(error);
  }
}
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get((url), {
      headers: {
          'X-RapidAPI-Key': '2aeac0e5b3msh99492c5a9fe99bap16005ejsne7f2847dd174',
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      },
    });
    return data;
  } catch (error) {
    console.log(error.message)
  }

    
} 





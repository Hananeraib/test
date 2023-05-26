// axios({
  
//     // Endpoint to send files
//     url: "http://localhost:8080/files",
//     method: "POST",
//     headers: {

//       // Add any auth token here
//       authorization: "your token comes here",
//     },

//     // Attaching the form data
//     data: formData,
//   })

//     // Handle the response from backend here
//     .then((res) => { })

//     // Catch errors if any
//     .catch((err) => { }); 



import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://backend:8000/api',
});

const getPosts = () => {
  return instance.get('/').then(response => response.data);
};

export default getPosts;

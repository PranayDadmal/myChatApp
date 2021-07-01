import axios from 'axios';

const createUser = async(request, response) => {
   const {userID, userName} = request.body;
   axios
      .post('https://api.chatengine.io/projects/people/',
      {
          username: userName,
          secret: userID
      },
      {
          headers: { 'Private-Key' : process.env.chat_engine_private_key}
      })
      .then(apiRes => {
          response.json({
              body: apiRes.body,
              error: null
          });
      })
      .catch((err) => {
          response.json({
              body: null,
              error: 'There was an error while creating the user'
          });
          console.log(err);
      });
      
};
export default createUser;

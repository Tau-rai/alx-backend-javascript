import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  promises.push(signUpUser(firstName, lastName));
  promises.push(uploadPhoto(fileName));

  return Promise.allSettled(promises)
    .then((results) => {
      const profileResults = results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));
      return profileResults;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

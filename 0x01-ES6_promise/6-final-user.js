import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  promises.push(signUpUser(firstName, lastName));
  promises.push(uploadPhoto(fileName));

  try {
    const results = await Promise.allSettled(promises);
    const user = results[0].value;
    const photo = results[1].value;

    return [
      { status: results[0].status, value: user },
      { status: results[1].status, value: photo },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

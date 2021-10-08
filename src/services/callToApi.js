const ENDPOINT = 'https://awesome-profile-cards.herokuapp.com/card';

const callToApi = (data) => {
  return fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export default callToApi;

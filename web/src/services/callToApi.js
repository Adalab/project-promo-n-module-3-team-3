const ENDPOINT = "//localhost:4000/card";

const callToApi = (data) => {
  console.log(data);
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    });
};

export default callToApi;

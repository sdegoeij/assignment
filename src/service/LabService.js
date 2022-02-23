export function getLabs(username, page = 1) {
  return fetch(
    "http://localhost:3333/labs?username=" +
      username +
      "&_limit=12&_page=" +
      page
  ).then((response) => {
    if (!response.ok) {
      return {
        total: 0,
        labs: [],
        status: response.status,
      };
    }

    let total = response.headers.get("X-Total-Count");
    return response
      .json()
      .then((data) => ({
        total: total,
        labs: data,
        status: response.status,
      }))
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  });
}

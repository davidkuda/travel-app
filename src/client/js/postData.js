export const postData = async (url = "", data = {}) => {

  console.log('hello from postData()')
  console.log({data})

  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  try {
    return response.json();
  }
  catch (error) {
    console.log({error});
  }
};
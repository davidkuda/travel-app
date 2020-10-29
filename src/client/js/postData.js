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
    const postData = await response.json();
    console.log('dave try')
    console.log({postData})
    return postData
  }
  catch (error) {
    console.log({error});
  }
};
const callSephoraAPI = async () => {
  try{
    //fetch data from api
    const url = 'https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1'
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY as string,
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
      }
    };
    const result = await fetch(url, options)
    const parsedResult = await result.json()
    //write to database
    console.log(Object.keys(parsedResult))
    console.log(parsedResult.categoryId)
    return parsedResult
  }
  catch(error){
    console.log(error)
  }
}

export default callSephoraAPI




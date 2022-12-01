const callSephoraAPI = async () => {
  try{
    //fetch data from api
    const url = 'https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1'
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0f0153072bmshce3e5c614f8eb2dp199cfcjsn758f7c55be56',
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




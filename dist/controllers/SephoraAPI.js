"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callSephoraAPI = async () => {
    try {
        const url = 'https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
            }
        };
        const result = await fetch(url, options);
        const parsedResult = await result.json();
        console.log(Object.keys(parsedResult));
        console.log(parsedResult.categoryId);
        return parsedResult;
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = callSephoraAPI;
//# sourceMappingURL=SephoraAPI.js.map
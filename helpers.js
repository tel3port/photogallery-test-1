'use strict'
import { API_KEY } from "./config";

async function getJSON(endpoint) {
    try {

        let rawData = await fetch(endpoint,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: API_KEY

                }

            })

        return await (rawData.json())


    } catch (error) {
        console.log(error);

    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export { getJSON, getRandomInt }

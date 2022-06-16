'use strict'
import { getJSON } from "./helpers";

async function searchImages(query, page_num) {
    try {

        let rawData = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: API_KEY

                }

            })

        let imageData = await (rawData.json())


    } catch (error) {
        console.log(error);

    }


}

async function getQuratedImages(page_num) {
    try {

        let rawData = await fetch(`https://api.pexels.com/v1/curated?page=${page_num}`,
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

export { searchImages, getQuratedImages }
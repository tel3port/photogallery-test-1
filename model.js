'use strict'
import { SEARCH_URL, CURATED_URL } from "./config";
import { getJSON } from "./helpers";

async function searchImages(query, page_num) {
    try {
        let searchUrl = `${SEARCH_URL}${query}&page=${page_num}`
        return await getJSON(searchUrl)


    } catch (error) {
        console.log(error);

    }

}

async function getQuratedImages(page_num) {
    try {
        let quratedUrl = `${CURATED_URL}${page_num}`
        return await getJSON(quratedUrl)

    } catch (error) {
        console.log(error);

    }

}

export { searchImages, getQuratedImages }
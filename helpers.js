'use strict'
import { API_KEY, SEARCH_URL, CURATED_URL } from "./config";

async function getJSON(query, pageNum) {

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export { getJSON, getRandomInt }

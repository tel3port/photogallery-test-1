"use strict"
API_KEY = "563492ad6f917000010000011bf92e0340834b29924f9cbaf7883c1d";
//`https://api.pexels.com/v1/search?query=${query}&page=${page_num}
//`https://api.pexels.com/v1/curated?page=${page_num}`

import 'regenerator-runtime'
import 'core-js/stable'
import galleryView from './views/galleryView.js'
import { getRandomInt } from "./helpers.js"
import { MIN_NUM, MAX_NUM } from "./config.js"
import { getQuratedImages } from "./model.js"


function controlSearchImages() {

}

async function controlQuratedImages() {
    let randomPageNum = getRandomInt(MIN_NUM, MAX_NUM)
    let imageData = await getQuratedImages(randomPageNum)
    galleryView.displayImages(imageData)


}

// searchFormEl.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let searchText = searchEl.value.trim()

//     if (!searchText) return;

//     searchImages(searchText, 1)


// })

// async function searchImages(query, page_num) {



// }

// async function getCuratedPhotos(page_num) {



// }

// function displayImages(response) {

// }

// function clearGallery() {

// }

// function renderSpinner() {


// }

// window.addEventListener("load", init)

function init() {

    galleryView.renderImagesHandler(controlQuratedImages)



}

init()
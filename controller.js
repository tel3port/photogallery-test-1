"use strict"

import 'regenerator-runtime'
import 'core-js/stable'
import galleryView from './views/galleryView.js'
import { getRandomInt } from "./helpers.js"
import { MIN_NUM, MAX_NUM } from "./config.js"
import { getQuratedImages, searchImages } from "./model.js"


async function controlSearchImages(searchText, pageNum = 2) {
    let searchData = await searchImages(searchText, pageNum)
    galleryView.displayImages(searchData)


}

async function controlQuratedImages() {
    let randomPageNum = getRandomInt(MIN_NUM, MAX_NUM)
    let imageData = await getQuratedImages(randomPageNum)
    galleryView.displayImages(imageData)


}


function init() {

    galleryView.renderImagesHandler(controlQuratedImages)
    galleryView.searchImagesHandler(controlSearchImages)


}

// init()
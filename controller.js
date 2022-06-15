"use strict"
API_KEY = "563492ad6f917000010000011bf92e0340834b29924f9cbaf7883c1d";
//`https://api.pexels.com/v1/search?query=${query}&page=${page_num}
//`https://api.pexels.com/v1/curated?page=${page_num}`

import 'regenerator-runtime'
import 'core-js/stable'

let parentEl = document.querySelector(".gallery")
let searchFormEl = document.querySelector(".search-form")
let searchEl = document.querySelector(".search-input")

searchFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    let searchText = searchEl.value.trim()

    if (!searchText) return;

    searchImages(searchText, 1)


})

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

        displayImages(imageData);
    } catch (error) {
        console.log(error);

    }


}

async function getCuratedPhotos(page_num) {

    try {

        let rawData = await fetch(`https://api.pexels.com/v1/curated?page=${page_num}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: API_KEY

                }

            })

        let imageData = await (rawData.json())

        displayImages(imageData);
    } catch (error) {
        console.log(error);

    }

}

function displayImages(response) {
    clearGallery()

    let html = ""

    response.photos.forEach(photo => {
        html += `
        <div class="item">
            <a href="${photo.url}">
                <img src="${photo.src.original}" alt="${photo.alt}">
                <h3>${photo.photographer}</h3>
            </a>
        </div>
        `
    })

    parentEl.insertAdjacentHTML("afterbegin", html)

}

function clearGallery() {
    parentEl.innerHTML = ""

}
// radom number between two nums inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", init)

function init() {
    let randPageNum = getRandomInt(1, 40)
    getCuratedPhotos(randPageNum)

}

init()
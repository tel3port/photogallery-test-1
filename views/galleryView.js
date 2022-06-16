class GalleryView {
    #parentEl = document.querySelector(".gallery")
    #searchFormEl = document.querySelector(".search-form")
    #searchEl = document.querySelector(".search-input")

    generateHTML() {

    }

    renderSpinner() {
        this._clearGallery();
        let spinnerHTML = `
        <div id="loading"></div>
    
        `
        parentEl.insertAdjacentHTML("afterbegin", spinnerHTML)

    }

    renderError() {

    }

    _clearGallery() {
        this.#parentEl.innerHTML = ""

    }

    displayImages(response) {
        this._clearGallery()

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

        this.#parentEl.insertAdjacentHTML("afterbegin", html)


    }


    renderImagesHandler(curatedImagescallback) {
        window.addEventListener("load", function (e) {
            curatedImagescallback()

        })

    }

}

export default new GalleryView()
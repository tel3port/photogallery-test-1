class GalleryView {
    #parentEl = document.querySelector(".gallery")
    #searchFormEl = document.querySelector(".search-form")
    #searchEl = document.querySelector(".search-input")

    _generateHTML(response) {
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

        return html

    }

    _getSearchQuery() {
        let searchText = this.#searchEl.value.trim();
        return searchText ? searchText : "light";
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
        this.#parentEl.innerHTML = "";

    }

    displayImages(response) {
        this._clearGallery();
        this.#parentEl.insertAdjacentHTML("afterbegin", this._generateHTML(response))

    }


    renderImagesHandler(curatedImagescallback) {
        window.addEventListener("load", function (e) {
            curatedImagescallback();

        })

    }

    searchImagesHandler(searchImgCallback) {
        this.#searchFormEl.addEventListener("submit", (e) => {
            e.preventDefault();
            let text = this._getSearchQuery()
            searchImgCallback(text, 4)
        })

    }

}

export default new GalleryView()
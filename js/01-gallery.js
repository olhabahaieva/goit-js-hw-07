import { galleryItems } from './gallery-items.js';
// Change code below this line

// Initial html element to add new pictures
const gallery = document.querySelector("ul.gallery");

// New structure to add to the initial html document
const markup = galleryItems.map(({preview, original, description}) =>
 `<li>
    <img src="${preview}"
    alt="${description}"/>
 </li>`
).join('');
gallery.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);

gallery.addEventListener("click", onClick);

function onClick(evt){
    const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()
}

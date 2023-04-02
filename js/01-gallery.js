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
    <img src="assets/images/image.png" width="800" height="600">
    </div>
`)

instance.show()
}

const dropArea = document.getElementById("drop-area");
const inputPhoto = document.getElementById("input-photo");
const imageView = document.getElementById("img-view");

var upload_image = "";

console.log(inputPhoto.addEventListener("change", uploadImage));

function uploadImage() {
    // let imgLink = URL.createObjectURL(inputPhoto.files[0]);
    // imageView.style.backgroundImage = `url(${imgLink})`;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        upload_image = reader.result;
        dropArea.style.backgroundImage = `url(${upload_image})`;
    });
    reader.readAsDataURL(this.files[0]);
}


// inputPhoto.onchange = function(){
//     dropArea. = URL.createObjectURL(inputPhoto.files[0]);
// }
const imageSources = ['image 1.jpg', 'image4.jpg', 'image3.jpg', 'image8.jpg', 'image6.jpg', 'image7.jpg'];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);
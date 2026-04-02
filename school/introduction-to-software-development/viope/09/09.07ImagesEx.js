// Create an array with file names of images
let images = ["c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif"];

function addImages() {
    for (let i = 0; i <= 4; i++) {
        document.write("<img src=" + "'" + images[i] + "'" + " alt='Funny Shape'>");
    }
    // Use a for loop to show all the images. 
    
        // Use the document.write() method to write one new image element to the web page per each image.
       
}
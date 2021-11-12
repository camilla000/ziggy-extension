let ziggyImages = [
  "https://i.imgur.com/yc6qeUe.jpg",
  "https://i.imgur.com/0pYHekY.jpg",
  "https://i.imgur.com/DMHG56D.jpg",
  "https://i.imgur.com/mOuhYbX.jpg",
  "https://i.imgur.com/nHIIGFM.jpg",
  "https://i.imgur.com/Sfv299q.jpg",
  "https://i.imgur.com/ee1PHEV.jpg",
  "https://i.imgur.com/4Q06bX3.jpg",
  "https://i.imgur.com/W3sb2TP.jpg",
  "https://i.imgur.com/oGYOqqI.jpg",
  "https://i.imgur.com/nreTH7Q.jpg",
];

//  This function will be called when the page is loaded.
const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
 const randomImg = Math.floor(Math.random() * ziggyImages.length);
 imgs[i].src = ziggyImages[randomImg];
}

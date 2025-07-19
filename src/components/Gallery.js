import React from "react";
import image1 from '../media/1.png';
import image2 from '../media/2.png';
import image3 from '../media/3.png';
import image4 from '../media/4.png';
import image5 from '../media/5.png';  
import image6 from '../media/6.png';
import image7 from '../media/7.png';
import image8 from '../media/8.png';
import image9 from '../media/9.png';
import image10 from '../media/10.png';
import image11 from '../media/11.png';
import image12 from '../media/12.png';
import image13 from '../media/13.png';
import image14 from '../media/14.png';
import image15 from '../media/15.png';
import image16 from '../media/16.png';
import image17 from '../media/17.png';
import image18 from '../media/18.png';
import image19 from '../media/19.png';
import image20 from '../media/20.png';
import image21 from '../media/21.png';
import image22 from '../media/22.png';
import image23 from '../media/23.png';
import image24 from '../media/24.png'; 
import image25 from '../media/25.png';
import image26 from '../media/26.png';
import image27 from '../media/27.png';
import image28 from '../media/28.png';
import image29 from '../media/29.png';
import image30 from '../media/30.png';
import image31 from '../media/31.png';
import image32 from '../media/32.png';
import image33 from '../media/33.png';
import image34 from '../media/34.png';
import image35 from '../media/35.png';
import image36 from '../media/36.png';  
import image37 from '../media/37.png';
import image38 from '../media/38.png';
import image39 from '../media/39.png';
import image40 from '../media/40.png';
import image41 from '../media/41.png';
import image42 from '../media/42.png';
import image43 from '../media/43.png';
import image44 from '../media/44.png';
import image45 from '../media/45.png';
import image46 from '../media/46.png';
import image47 from '../media/47.png';
import image48 from '../media/48.png';
import image49 from '../media/49.png';
import image50 from '../media/50.png';
import image51 from '../media/51.png';
import image52 from '../media/52.png';
import image53 from '../media/53.png';
import image54 from '../media/54.png';
import image55 from '../media/55.png';
import image56 from '../media/56.png';


export default function Gallery() {

     const images = [ 
      { id: 1, src: image1, alt: "Image 1" },
      { id: 2, src: image2, alt: "Image 2" },
      { id: 3, src: image3, alt: "Image 3" },
      { id: 4, src: image4, alt: "Image 4" },
      { id: 5, src: image5, alt: "Image 5" },
      { id: 6, src: image6, alt: "Image 6" },
      { id: 7, src: image7, alt: "Image 7" },
      { id: 8, src: image8, alt: "Image 8" },
      { id: 9, src: image9, alt: "Image 9" },
      { id: 10, src: image10, alt: "Image 10" },
      { id: 11, src: image11, alt: "Image 11" },
      { id: 12, src: image12, alt: "Image 12" },
      { id: 13, src: image13, alt: "Image 13" },
      { id: 14, src: image14, alt: "Image 14" },
      { id: 15, src: image15, alt: "Image 15" },
      { id: 16, src: image16, alt: "Image 16" },
      { id: 17, src: image17, alt: "Image 17" },
      { id: 18, src: image18, alt: "Image 18" },
      { id: 19, src: image19, alt: "Image 19" },
      { id: 20, src: image20, alt: "Image 20" },
      { id: 21, src: image21, alt: "Image 21" },
      { id: 22, src: image22, alt: "Image 22" },
      { id: 23, src: image23, alt: "Image 23" },
      { id: 24, src: image24, alt: "Image 24" },
      { id: 25, src: image25, alt: "Image 25" },
      { id: 26, src: image26, alt: "Image 26" },
      { id: 27, src: image27, alt: "Image 27" },
      { id: 28, src: image28, alt: "Image 28" },
      { id: 29, src: image29, alt: "Image 29" },
      { id: 30, src: image30, alt: "Image 30" },
      { id: 31, src: image31, alt: "Image 31" },
      { id: 32, src: image32, alt: "Image 32" },
      { id: 33, src: image33, alt: "Image 33" },
      { id: 34, src: image34, alt: "Image 34" },
      { id: 35, src: image35, alt: "Image 35" },
      { id: 36, src: image36, alt: "Image 36" },
      { id: 37, src: image37, alt: "Image 37" },
      { id: 38, src: image38, alt: "Image 38" },
      { id: 39, src: image39, alt: "Image 39" },
      { id: 40, src: image40, alt: "Image 40" },
      { id: 41, src: image41, alt: "Image 41" },
      { id: 42, src: image42, alt: "Image 42" },
      { id: 43, src: image43, alt: "Image 43" },
      { id: 44, src: image44, alt: "Image 44" },
      { id: 45, src: image45, alt: "Image 45" },
      { id: 46, src: image46, alt: "Image 46" },
      { id: 47, src: image47, alt: "Image 47" },
      { id: 48, src: image48, alt: "Image 48" },
      { id: 49, src: image49, alt: "Image 49" },
      { id: 50, src: image50, alt: "Image 50" },
      { id: 51, src: image51, alt: "Image 51" },
      { id: 52, src: image52, alt: "Image 52" },
      { id: 53, src: image53, alt: "Image 53" },
      { id: 54, src: image54, alt: "Image 54" },
      { id: 55, src: image55, alt: "Image 55" },
      { id: 56, src: image56, alt: "Image 56" },
    ];



  return (
    <div>
      
      <h3 className="galleryHeading">Check out our beautiful furniture collection!</h3>
    <div className="gallery-container">
      {images.map((image) => (
        <div className="image-container" key={image.id}>
          <img src={image.src} alt={image.alt}  />
        </div>
      ))}
      </div>
    </div>
  );
}
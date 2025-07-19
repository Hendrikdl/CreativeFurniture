import react from "react";
import backgroundImage from '../media/background.jpg';
import './styles.css';

export default function Home() {
  return (
    <div className="homeContainer" >
      <h1 className="homeHeading"><u>Welcome to TM Creative Furniture</u></h1>
      <br />
      <p className="paragraph">Dreams can really come true with our furniture.  Why pay more?  You are more than welcome to browse through our Galary to see what we have created for other happy clients.  If you have a dream or an idea, we are here to help you bring it to life.  Just click on the Contact Us tab, fill in the form and we will gladly contact you.  We also have many contact points to get hold of us.</p>
      <br />
      <p className="paragraph">We pride ourselves on our attention to detail and our commitment to customer satisfaction.  Each piece is handcrafted with the utmost care and precision.  We pride ourselves on Quality and workmanship. </p>

      <div className="specializationContainer">
        <div className="specializationDiv">
          <p className="paragraphHeading"><u>We specialize in the below, but the list is not exhaustive:</u></p>
      <br />
      <ul className="specialistList">
        <li>Custom Furniture Design</li>
        <li>Residential and Commercial Projects</li>
        <li>3D Visualization and Prototyping</li>
        <li>Material Sourcing and Sustainability Consulting</li>
        <li>Furniture Restoration and Repair</li>
        <li>Space Planning and Interior Design Consultation</li>

        <li>Furniture Maintenance and Care Services</li>
        <li>Furniture Customization and Personalization Services</li>
      </ul>
        </div>

        <div className="productsDiv">
          <p className="paragraphHeading"><u>We also have a wide range of products that we can customize to your needs:</u></p>
          <br />
          <ul className="productList">
            <li>Chairs</li>
            <li>Tables</li>
            <li>Sofas</li>
            <li>Cabinets</li>
            <li>Desks</li>
            <li>Bed Frames</li>
            <li>Bookshelves</li>
            <li>Outdoor Furniture</li>
            <li>Office Furniture</li>
            <li>Custom Storage Solutions</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>Dosel Lands Network</h4>
          <p>
          We are reinventing the way to buy and sell Properties in Costa Rica. Now
          it is easier to find that place you dream of so much. Let us take this journey together.
          </p>
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/listing-grid-v1">Propiedades</Link>
            </li>
            <li>
              <Link href="/about-us">Nuestro equipo</Link>
            </li>
            <li>
              <Link href="/blog-list-1">Blog</Link>
            </li>
            <li>
              <Link href="/terms">Términos & Condiciones</Link>
            </li>
          </ul>
        </div>
      </div> */}
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@findhouse.com">info@dosel.cr</a>
            </li>
            <li>
              <a href="#">Casa Sandara el Banbú, Puerto Jimenez</a>
            </li>
            <li>
              <a href="#">60702, Puntarenas, Costa Rica.</a>
            </li>
            <li>
              <a href="tel:+50670135020">+506 7013-5020</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          {/* <h4>Síguenos</h4>
          <ul className="mb30">
            <Social />
          </ul> */}
          <h4>Subscribe</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;

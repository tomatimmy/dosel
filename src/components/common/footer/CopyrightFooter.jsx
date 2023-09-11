import Link from "next/link";

const CopyrightFooter = () => {
  const menuItems = [
    { id: 1, name: "Home", routeLink: "/" },
/*     { id: 2, name: "Propiedades", routeLink: "/listing-grid-v1" },
    { id: 3, name: "Nuestro Equipo", routeLink: "/about-us" }, */
    { id: 4, name: "Terms & Conditions", routeLink: "/terms" },
    { id: 5, name: "Contact", routeLink: "/contact" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="footer_menu_widget">
          <ul>
            {menuItems.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <Link href={item.routeLink}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="copyright-widget text-end">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://hermanoscorallo.com"
              target="_blank"
            >
              Producciones Hermanos Corallo
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;

import Link from "next/link";
import { useRouter } from "next/router";

const HeaderMenuContent = ({ float = "" }) => {
  const route = useRouter();

  const home = [
    {
      id: 1,
      name: "Home 1",
      routerPath: "/",
    },
  ];

  const listing = [
    {
      id: 1,
      title: "Listing Grid",
      items: [
        {
          name: "Grid v1",
          routerPath: "/listing-grid-v1",
        },
      ],
    }
  ];


  const blog = [
    { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
  ];

  const pages = [
    { id: 1, name: "Nuestro Equipo", routerPath: "/about-us" },
    { id: 2, name: "Preguntas Frecuentes", routerPath: "/faq" },
    { id: 3, name: "Términos & Condiciones", routerPath: "/terms" },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
{/*       <li className="dropitem">
        <Link
          href="/"
          className={
            home.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Home</span>
        </Link>
      </li>

      <li className="dropitem">
        <Link
          href="/listing-grid-v1"
          className={
            listing.some((parent) => {
              return parent.items.some(
                (page) => page.routerPath === route.pathname
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Propiedades</span>
        </Link>
      </li>

      <li className="dropitem">
        <Link
          href="#"
          className={
            pages.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Nosotros</span>
          <span className="arrow"></span>
        </Link>
        <ul className="sub-menu ">
          {pages.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  route.pathname === item.routerPath ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <Link
          href="/blog-list-1"
          className={
            blog.some(
              (page) =>
                page.routerPath === route.pathname ||
                page.routerPath + "/[id]" === route.pathname
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
        </Link>
      </li> */}
      {/* End .dropitem */}


      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/contact">
          <span className="dn-lg">Contact</span>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;

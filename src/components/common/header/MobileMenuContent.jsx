import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";



const pages = [
  { id: 1, name: "Nuestro Equipo", routerPath: "/about-us" },
  { id: 2, name: "Preguntas Frecuentes", routerPath: "/faq" },
  { id: 3, name: "Términos & Condiciones", routerPath: "/terms" },
];

const MobileMenuContent = () => {
  const route = useRouter();
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            <Image
              width={155}
              height={55}
              className="nav_logo_img img-fluid mt20"
              src="/assets/images/header-logo2.png"
              alt="header-logo.png"
            />
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        <Menu>
        {/* <MenuItem>
            <Link
              href="/"
              className={
                route.pathname === "/" ? "ui-active" : undefined
              }
            >
              Home
            </Link>
          </MenuItem> */}
          {/* End Home Home */}

          <MenuItem>
          <Link
          href="/contact"
          className="btn btn-block btn-lg btn-thm circle"
        > Contacto
        </Link>
          </MenuItem>
          {/* End Pages Listing */}

              {/* <SubMenu
                title="Nosotros"
                className={
                  pages.some((page) => page.routerPath === route.pathname)
                    ? "parent-menu-active"
                    : undefined
                }
              >
                {pages.map((val, i) => (
                  <MenuItem key={i}>
                    <Link
                      href={val.routerPath}
                      className={
                        route.pathname === val.routerPath ? "ui-active" : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </MenuItem>
                ))}
              </SubMenu> */}
              {/* End pages Pages */}

          {/* <MenuItem>
            <Link
              href="/blog-list-1"
              className={
                route.pathname === "/blog-list-1" ? "ui-active" : undefined
              }
            >
              Blog
            </Link>
          </MenuItem> */}
          {/* End pages Blog */}

        </Menu>
      </SidebarContent>

      {/* <SidebarFooter>
        <Link
          href="/contact"
          className="btn btn-block btn-lg btn-thm circle"
        > Contacto
        </Link>
      </SidebarFooter> */}
    </ProSidebar>
  );
};

export default MobileMenuContent;

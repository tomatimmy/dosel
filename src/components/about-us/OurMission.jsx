import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "+1000",
      meta: "Clientes",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "+100 Propiedaes",
      meta: "Publicadas",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "+$15.000.000",
      meta: "En ventas",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
            Somos una empresa dedicada a la comericalización de tierras para desarrollo comunitario, vivienda familiar e incentivo conservacionista en la Península de Osa, Costa Rica.
          </p>
          <p>
            Nos especializamos en la venta de propiedades en la Península de Osa, priorizando el desarrollo sostenible e incentivando la conservación del ecosistema.
          </p>
          <p>
            Conectamos a personas y ONGs con propietarios originarios de la Península, con el fin de desarrollar proyectos de viviendas sostenibles, turismo comunitario y conservacion.
            ¿Por qué lo hacemos?
            La Península de Osa es considerado «el lugar biológicamente más intenso del mundo en términos de biodiversidad» -según el National Geographic- y necesitamos que así siga siendo. Dentro de sus fronteras, se encuentran los más diversos ecosistemas, compuesto por bosques montanos, bosques nubosos, praderas y manglares, como así también, por un increíble volumen y variedad de vida silvestre. Nuestra misión es promover el desarrollo sostenible y conciente dentro de este entorno, para así ayudar a salvaguardar este ecosistema y sus comunidades, apoyando a familias locales y sus emprendimientos.
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            width={461}
            height={509}
            priority
            className="img-fluid w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;

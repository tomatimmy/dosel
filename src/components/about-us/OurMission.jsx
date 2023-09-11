import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "+1000",
      meta: "Clients",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "+100 Properties",
      meta: "Catalog",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "+$15.000.000",
      meta: "Sales",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
          We are a company dedicated to the commercialization of land for community development, family housing and conservation incentives in the Osa Peninsula, Costa Rica.
          </p>
          <p>
          We specialize in the sale of properties in the Osa Peninsula, prioritizing sustainable development and encouraging the conservation of the ecosystem.
          </p>
          <p>
          We connect people and NGOs with owners from the Peninsula, in order to develop sustainable housing projects, community tourism and conservation. Why do we do it? The Osa Peninsula is considered the most biologically intense place in the world in terms of biodiversity -according to National Geographic- and we need to keep it that way. Within its borders are the most diverse ecosystems, comprised of montane forests, cloud forests, grasslands, and mangroves, as well as an incredible volume and variety of wildlife. Our mission is to promote sustainable and conscious development within this environment, in order to help safeguard this ecosystem and its communities, supporting local families and their businesses.
          </p>

          {/* <ul className="ab_counting">
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
          </ul> */}
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
            src="/assets/images/background/bghome.jpg"
            alt="1.jpg"
          />
          {/* <PopupVideo /> */}
        </div>
      </div>
    </>
  );
};

export default OurMission;

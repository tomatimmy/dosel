const WhyChoose = ({ style = "" }) => {
  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Trust",
      descriptions: `Our partners and clients guarantee the reliability of operating with us.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Vast Catalog",
      descriptions: `We have a unique catalog of opportunities in Costa Rica.`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Transparency",
      descriptions: `The greatest transparency in the market with 100% successful operations.`
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;

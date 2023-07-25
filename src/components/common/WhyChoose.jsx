const WhyChoose = ({ style = "" }) => {
  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Confianza",
      descriptions: `Nuestros partners y clientes garantizan la fiabilidad de operar con nosotros.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Catálogo vasto",
      descriptions: `Contamos con un catálogo de oportunidades único en Costa Rica.`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Transparencia",
      descriptions: `La mayor transparencia en el mercado con un 100% de operaciones exitosas.`
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

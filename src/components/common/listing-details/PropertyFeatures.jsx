const PropertyFeatures = () => {
  const propertyFeatures = [
    {
      id: 1,
      list: ["Aire Acondicionado", "Parrilla", "Secadora de ropa", "Gimnasio", "Lavadero"],
    },
    {
      id: 2,
      list: ["Jardín", "Microondas", "Ducha Exterior", "Refrigerador", "Sauna"],
    },
    {
      id: 3,
      list: ["Piscina", "TV x Cable", "Lavadora de ropa", "WiFi", "Baulera"],
    },
  ];
  return (
    <>
      {propertyFeatures.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <ul className="order_list list-inline-item">
            {item.list.map((val, i) => (
              <li key={i}>
                <span className="flaticon-tick"></span>
                {val}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;

const PropertyDetails = () => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              ID Propiedad : <span>HZ27</span>
            </p>
          </li>
          <li>
            <p>
              Precio : <span>$130,000</span>
            </p>
          </li>
          <li>
            <p>
              Tamaño : <span>85 M2</span>
            </p>
          </li>
          <li>
            <p>
              Año : <span>2016-01-09</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Habitaciones : <span>8</span>
            </p>
          </li>
          <li>
            <p>
              Baños : <span>4</span>
            </p>
          </li>
          <li>
            <p>
              Garages : <span>2</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Tipo : <span>Apartmento</span>
            </p>
          </li>
          <li>
            <p>
              Estado : <span>En Venta</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;

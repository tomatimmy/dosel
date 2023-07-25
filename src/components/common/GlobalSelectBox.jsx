const GlobalSelectBox = () => {
  return (
    <>
      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select">
            <option>Baños</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>+</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select">
            <option>Habitaciones</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select">
            <option>Año</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
      </li>
      {/* End li */}
    </>
  );
};

export default GlobalSelectBox;

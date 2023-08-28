import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contact us</h4>
      <p>
        We are here to help you find that property you are looking for
      </p>
      <div className="content_list">
        <h5>Adress</h5>
        <p>
          Casa Sandara, El Banbú, Puerto Jimenez, CP 60702, Puntarenas, Costa Rica.
        </p>
      </div>
      <div className="content_list">
        <h5>Phone Nymber</h5>
        <p>(+506) 7013-5020</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>info@dosel.cr</p>
      </div>
      <div className="content_list">
        <h5>Web</h5>
        <p>https://dosel.cr</p>
      </div>
      {/* <h5>Nuestras Redes Sociales</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul> */}
    </div>
  );
};

export default AddressSidebar;

import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contactenos</h4>
      <p>
        Estamos para ayudarte a encontrar esa propiedad que tanto estás buscando.
      </p>
      <div className="content_list">
        <h5>Dirección</h5>
        <p>
          Casa Sandara, El Banbú, Puerto Jimenez, CP 60702, Puntarenas, Costa Rica.
        </p>
      </div>
      <div className="content_list">
        <h5>Teléfono</h5>
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
      <h5>Nuestras Redes Sociales</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;

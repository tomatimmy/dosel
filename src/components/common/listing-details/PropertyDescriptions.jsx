import { useState } from "react";

const PropertyDescriptions = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <p className="mb25">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, commodi, pariatur aperiam dolorem, consequuntur sunt quisquam officiis est tempore minus praesentium nihil labore neque excepturi maiores! Nulla quidem aspernatur officiis saepe facere sunt perferendis numquam quam ex veniam ea aliquam dolorum soluta molestias sint earum in ut vel, voluptatem architecto?
      </p>
      <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae illum rem possimus molestiae qui, soluta officia repudiandae placeat, ipsam maiores. Facere reiciendis dolorum totam rem dolor aut sed molestias voluptatibus temporibus, quam tempore, voluptas explicabo maiores repellat ipsam! Accusamus, corrupti ratione laudantium velit labore iusto maxime, dolorem error consequuntur voluptatum facilis sapiente libero, ea nulla quos vitae obcaecati sed adipisci. Et fuga non ab quis aliquid repudiandae vero labore similique recusandae sunt aperiam ratione, aspernatur dolore dolores aut voluptates nostrum ipsa nisi rem fugiat optio consequatur cum iste corrupti. Ipsam quis nihil soluta sed ipsa neque quas veritatis dolores.
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className="mt10 mb10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos similique minima rerum quo consectetur consequuntur laudantium et nostrum, ipsam a veritatis dolorum deleniti aspernatur tempora iusto, assumenda cumque unde. Magnam earum officiis quibusdam assumenda quasi pariatur dolore blanditiis commodi, eos voluptate, adipisci repudiandae a. Eveniet obcaecati veniam quae. Commodi, nulla quas. Molestias, quaerat eum quos aspernatur magnam, repellat ipsa quasi tempore cumque nobis temporibus porro amet natus nemo maiores corporis assumenda placeat hic non ex aliquid perspiciatis neque dolore.
          </p>
          <p className="mt10 mb10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias voluptatibus voluptatem officia cupiditate asperiores laudantium aliquid recusandae enim excepturi, vero repellendus saepe, distinctio ipsa consequatur culpa, necessitatibus fugiat eius cum a dolorum! Eum officia, eligendi modi voluptate magni reiciendis inventore repudiandae neque voluptatem impedit. Voluptates aut quam quisquam quia tempore, saepe temporibus est animi. Numquam nesciunt autem soluta tempore. Iste sit aliquid cupiditate suscipit debitis dolorem eius quasi voluptate, facere fugiat odio. Eos voluptas placeat adipisci ratione veritatis reprehenderit.
          </p>
        </div>
      </div>
      <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          Ver más <span className="flaticon-download-1 fz12"></span>
        </a>
      </p>
    </>
  );
};

export default PropertyDescriptions;

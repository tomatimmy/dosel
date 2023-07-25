import Image from "next/image";

const Creator = () => {
  return (
    <div className="media d-flex">
      <Image
        width={130}
        height={47}
        className="me-3"
        src="/assets/images/header-logo2.png"
        alt="lc1.png"
      />
      <div className="media-body">
        <p className="mb0">(+506) 1234 1234</p>
        <p className="mb0">info@dosel.cr</p>
      </div>
    </div>
  );
};

export default Creator;

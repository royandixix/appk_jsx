import React from "react";
import { Button } from "reactstrap";


function DetailComp(props) {
  return (
    <div className="p-5 mb-4 bg-light rounded-">
      <h1 className="display-3">{props.location.state.judul}</h1>
      <p className="lead">
       {props.location.state.tanggal}
      </p>
      <hr className="my-2" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the container.
      </p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </div>
  );
}

export default DetailComp;

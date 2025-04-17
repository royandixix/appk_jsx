import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CartContext } from "../CartContext";

function HomePage() {
  // const datacontext = useContext(CartContext)
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <h1 className="display-3">HomePage  </h1>
      <p className="lead">
        Ini adalah halaman utama dari aplikasi Reactstrap kamu.
      </p>
      <hr className="my-2" />
      <p>
        Ini adalah teks tambahan yang menjelaskan lebih lanjut tentang
        sesuatu.
      </p>
      <p className="lead">
        <Button color="primary">Pelajari Lebih Lanjut</Button>
      </p>
    </div>
  );
}

export default HomePage;

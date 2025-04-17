import React, { useContext } from "react";
import { Button, Container } from "reactstrap";
import { KeranjangContext } from "../../../App";

function Tagihan() {
  const countContext = useContext(KeranjangContext);

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <Container>
        <h1 className="display-5 fw-bold">Tagihan Pembelian</h1>
        <p className="lead">
          ({countContext.keranjangContext.jumlah}) action Figure Naruto
        </p>
        <hr className="my-2" />
        <br />
        <p>Harga Total Rp. {countContext.keranjangContext.hargatotal}</p>
        <p className="lead">
          <Button color="primary">Lanjutkan Pembayaran</Button>
        </p>
      </Container>
    </div>
  );
}

export default Tagihan 



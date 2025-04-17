import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";


function RowProduct() {
  const { value, setValue } = useContext(CartContext);

  return (
    <div className="mb-4 d-flex justify-content-center">
      <Col>
        <Card style={{ width: "18rem" }}>
          <img
            alt="Sample"
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          />
          <CardBody className="d-flex flex-column">
            <CardTitle tag="h5">MacBook M2 Air</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Rp. 20.000.000
            </CardSubtitle>
            <CardText></CardText>
            <Button onClick={() => setValue(value + 1)}>Tambah Keranjang</Button>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default RowProduct;

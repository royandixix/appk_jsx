import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, Button } from "reactstrap";
import { KeranjangContext } from "../../App";
// const initial = 0

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan + state.hargasatuan * state.jumlah,
      };
    case "kurang":
      if (state.jumlah <= 1) {
      return state 
      }
      return {
      
        ...state,
        total: state.jumlah,
        jumlah: state.jumlah - 1,
        hargatotal: state.hargasatuan * state.jumlah - state.hargasatuan,
      };
    default:
      return state;
  }
};

function HookReducer() {

    const countContext = useContext(KeranjangContext)

  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-5 mb-4 ">
      <Container>
        <Row>
          <Col xs="6">
            <Card>
              <CardImg
                top
                width="100"
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                alt="Card image cap"
              ></CardImg>
            </Card>
          </Col>
          <Col xs="6">
            <h3>Action Figure Mackbook m2 air</h3>
            <p>Hargaa</p>
            <h3>Rp.{countContext.keranjangContext.hargasatuan}</h3>
            <p>Jumlah</p>
            <Row>
              <Col>
                <Button
                  onClick={() =>
                    countContext.keranjangDispatch({ type: "tambah" })
                  }
                  color="success"
                >
                  +
                </Button>
              </Col>
              <Col>{countContext.keranjangContext.jumlah}</Col>
              <Col>
                <Button
                  onClick={() =>
                    countContext.keranjangDispatch({ type: "kurang" })
                  }
                  color="warning"
                >
                  -
                </Button>
              </Col>
            </Row>
            <Button className=" mt-2 " color="success" size="lg">
              Total Rp. {countContext.keranjangContext.hargatotal}
            </Button>
            <hr />
            <NavLink to="/tagihan" className="btn btn-outline-primary mt-2">
              Tagihan Belanja
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default HookReducer;



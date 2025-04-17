import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function CardComp(props) {
  return (
    <div className="p-4 bg-light rounded-3">
      <Card style={{ width: "18rem" }}>
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">
            <h3>{props.judul}</h3>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.tanggal}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          
          <Link
            to={`/detail/${props.id}`}
            state={{ judul: props.judul, tanggal: props.tanggal }}
            style={{ textDecoration: "none" }}
          >
            <Button color="primary" block>
              Detail
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComp;

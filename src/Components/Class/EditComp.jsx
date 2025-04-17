import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import qs from "querystring";

const api = "http://localhost:3001";

const EditComp = () => {
  const location = useLocation();
  const data = location.state;

  const [form, setForm] = useState({
    id_mahasiswa: data?.id_mahasiswa || "",
    nim: data?.nim || "",
    nama: data?.nama || "",
    jurusan: data?.jurusan || "",
  });

  const [response, setResponse] = useState("");
  const [display, setDisplay] = useState("none");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const ubahMahasiswa = () => {
    const postData = qs.stringify({
      id_mahasiswa: form.id_mahasiswa,
      nim: form.nim,
      nama: form.nama,
      jurusan: form.jurusan,
    });

    axios
      .put(api + "/ubah", postData)
      .then((res) => {
        setResponse(res.data.values);
        setDisplay("block");
      })
      .catch((err) => {
        setResponse("Gagal: " + err.message);
        setDisplay("block");
      });
  };

  return (
    <Container>
      <div className="rounded-3 mt-5 text-start ps-1">
        <h3 className="mb-3">Form Edit Data</h3>

        <Alert color="info" style={{ display: display }}>
          {response}
        </Alert>

        <Form>
          <Col>
            <Label for="nim">NIM</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="nim"
                    value={form.nim}
                    onChange={handleChange}
                    placeholder="Masukkan NIM"
                  />
                </Col>
              </Row>
            </FormGroup>

            <Label for="nama">Nama</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Masukkan Nama"
                  />
                </Col>
              </Row>
            </FormGroup>

            <Label for="jurusan">Jurusan</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="jurusan"
                    value={form.jurusan}
                    onChange={handleChange}
                    placeholder="Masukkan Jurusan"
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col>
                  <Button
                    color="success"
                    type="button"
                    onClick={ubahMahasiswa}
                    className="me-2"
                  >
                    Update
                  </Button>
                  <Link to="/mahasiswa">
                    <Button color="secondary">Kembali</Button>
                  </Link>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Form>
      </div>
    </Container>
  );
};

export default EditComp;

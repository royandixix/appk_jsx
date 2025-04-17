import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Container, NavLink, Alert } from "reactstrap";
import qs from "qs";

const api = "http://localhost:3001";

class ListComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mahasiswa: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    axios.get(api + "/tampil").then((res) => {
      this.setState({
        mahasiswa: res.data.values,
      });
    });
  }

  Deletemahasiswa = (idmahasiswa) => {
    // const { mahasiswa } = this.state;
    const data = qs.stringify({
      id_mahasiswa: idmahasiswa,
    });

    axios
      .delete(api + "/hapus", {
        data: data,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })

      .then((json) => {
        if (json.data.status === 200) {
          this.setState((prevState) => ({
            response: json.data.values,
            display: "block",
            mahasiswa: prevState.mahasiswa.filter(
              (mhs) => mhs.id_mahasiswa !== idmahasiswa
            )
          }));
        }
      });
      
  };

  render() {
    return (
      <Container className="mt-5">
        <div className="mb-3">
          <h2>Data Mahasiswa</h2>
          <Alert color="success" style={{ display: this.state.display }}>
            {this.state.response}
          </Alert>
          <NavLink tag={Link} to="/mahasiswa/tambah">
            <Button color="success" className="mt-2">
              + Tambah Data
            </Button>
          </NavLink>
        </div>

        <Table bordered className="text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>NIM</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mahasiswa.map((mahasiswa, index) => (
              <tr key={mahasiswa.id_mahasiswa}>
                <td>{index + 1}</td>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>
                  <Link
                    to="/mahasiswa/edit"
                    state={{
                      id_mahasiswa: mahasiswa.id_mahasiswa,
                      nim: mahasiswa.nim,
                      nama: mahasiswa.nama,
                      jurusan: mahasiswa.jurusan,
                    }}
                  >
                    <Button color="warning" size="sm">
                      Edit
                    </Button>
                  </Link>
                  <span> </span>
                  <Button
                    onClick={() => this.Deletemahasiswa(mahasiswa.id_mahasiswa)}
                    color="danger"
                    size="sm"
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ListComp;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert, Button, Table, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const api = "http://localhost:3001";
function HooksUseEffects() {
  // const [namaLengkap, setNamaLengkap] = useState({nama: '', marga: ''})
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    console.log("memangil Use Eeffects");
    axios.get(api + "/tampil").then((res) => {
      setMahasiswa(res.data.values);
    })
    // setNamaLengkap({nama: 'Royandi', marga: 'Tan'})
  }, [])

  return (
    // <div>
    //     <Container>
    //         <h3>profil User</h3>
    //         <h4>Nama: {namaLengkap.nama}</h4>
    //         <h4>Marga: {namaLengkap.marga}</h4>
    //     </Container>
    // </div>

    <Container className="mt-5">
      <div className="mb-3">
        <h2>Data Mahasiswa</h2>
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
          {mahasiswa.map((mahasiswa, index) => (
            <tr key={mahasiswa.id_mahasiswa}>
              <td>{index + 1}</td>
              <td>{mahasiswa.nim}</td>
              <td>{mahasiswa.nama}</td>
              <td>{mahasiswa.jurusan}</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default HooksUseEffects;

import React, { useState } from "react";
import TampilComp from "./TampilComp";



const HooksComp = () => {
  const [jumlah, setJumlah] = useState(0);

  const tambahJumlah = () => {
    setJumlah(jumlah + 1);
  };

  // login
  const[dataLogin, setDataLogin] = useState({username: 'Royandi', token: '123abcd', isiLogin: true})
  // cek kondisi
  let tampil;
  if(dataLogin.isiLogin) {
    tampil = <TampilComp
      username = {dataLogin.username}
      fungsi = {tambahJumlah.bind(this)}
      jumlah = {jumlah}
      
    />
  }else {
    tampil = <TampilComp username= "Maaf Anda belum Login" disabled= {true} />
  }

  return (
    <div style={{ marginLeft: "20px" }}>
      {/* <h1>{jumlah}</h1>
      <button onClick={()=> setJumlah(jumlah+1)}>Tambah</button> */}
      <div>
        {tampil}
      </div>
    </div>
  );
  
};

export default HooksComp;

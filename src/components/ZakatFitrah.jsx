import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./../styles/zakatFitrah.css";

const ZakatFitrahCalculator = ({ onBack }) => {
  const [jumlahAnggota, setJumlahAnggota] = useState('');
  const [hargaBeras, setHargaBeras] = useState('');
  const [hargaBerasRaw, setHargaBerasRaw] = useState('');
  const [totalZakat, setTotalZakat] = useState(null);
  const [totalBeras, setTotalBeras] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const formatRupiah = (angka) => {
    const numberString = angka.replace(/[^,\d]/g, '').toString();
    const split = numberString.split(',');
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      rupiah += (sisa ? '.' : '') + ribuan.join('.');
    }

    return split[1] !== undefined ? 'Rp ' + rupiah + ',' + split[1] : 'Rp ' + rupiah;
  };

  const handleHargaBerasChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setHargaBerasRaw(rawValue);
    setHargaBeras(formatRupiah(rawValue));
  };

  const handleReset = () => {
    setJumlahAnggota('');
    setHargaBeras('');
    setHargaBerasRaw('');
    setTotalZakat(null);
    setTotalBeras(null);
    setShowResult(false);
  };

  const hitungZakat = () => {
    const anggota = parseInt(jumlahAnggota);
    const harga = parseInt(hargaBerasRaw);
    if (isNaN(anggota) || isNaN(harga) || anggota <= 0 || harga <= 0) {
      alert("Mohon masukkan angka yang valid pada semua kolom.");
      return;
    }

    const zakatPerOrang = 2.5 * harga;
    const total = anggota * zakatPerOrang;
    const totalKg = anggota * 2.5;

    setTotalZakat(total);
    setTotalBeras(totalKg);
    setShowResult(true);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <button onClick={handleBack} className="back-btn">←</button>
      <div className="fitrah-container">
        <h2 className="fitrah-title"> Kalkulator Zakat Fitrah</h2>
        <p className="fitrah-subtitle">Isi data berikut untuk menghitung total zakat fitrah yang harus dibayarkan oleh keluargamu.</p>

        <div className="form-group">
          <label>👨‍👩‍👧‍👦 Jumlah anggota keluarga</label>
          <input
            type="number"
            min="1"
            placeholder="Contoh: 4"
            value={jumlahAnggota}
            onChange={(e) => setJumlahAnggota(e.target.value)}
          />
          <small>Masukkan jumlah total orang yang akan dibayarkan zakatnya (termasuk kamu).</small>
        </div>

        <div className="form-group">
          <label>🍚 Harga beras per kilogram (dalam Rupiah)</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Contoh: Rp 15.000"
            value={hargaBeras}
            onChange={handleHargaBerasChange}
          />
          <small>Cek harga beras di pasar/mart sekitar kamu. Zakat Fitrah = 2.5 kg beras per orang.</small>
        </div>

        <div >
          <button onClick={hitungZakat} className="hitung-btn">Hitung Zakat Fitrah</button>
          <button onClick={handleReset} className="reset-btn">Reset</button>
        </div>

        {showResult && (
          <div className="result">
            <h3>🧾 Hasil Perhitungan</h3>
            <p>Jumlah anggota: <strong>{jumlahAnggota}</strong></p>
            <p>Harga beras per kg: <strong>{hargaBeras}</strong></p>
            <p>Total zakat dalam bentuk uang: </p>
            <h2 style={{ color: '#2e7d32' }}>Rp {totalZakat.toLocaleString()}</h2>
            <p>(2.5 kg x {hargaBeras} per orang) x {jumlahAnggota} orang</p>

            <br />
            <p>Atau kamu juga bisa membayarkan dalam bentuk:</p>
            <h3 style={{ color: '#0277bd' }}>{totalBeras} kg beras</h3>
            <p>(2.5 kg x {jumlahAnggota} orang)</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ZakatFitrahCalculator;

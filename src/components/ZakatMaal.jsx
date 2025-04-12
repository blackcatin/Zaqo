import { useState } from 'react';
import "./../styles/zakatMaal.css";

const ZakatMaalCalculator = () => {
  const [penghasilanBulanan, setPenghasilanBulanan] = useState('');
  const [bulan, setBulan] = useState(12);
  const [pengeluaranBulanan, setPengeluaranBulanan] = useState('');
  const [tabungan, setTabungan] = useState('');
  const [beratEmas, setBeratEmas] = useState('');
  const [beratPerak, setBeratPerak] = useState('');
  const [hargaEmas, setHargaEmas] = useState('');
  const [hargaPerak, setHargaPerak] = useState('');
  const [emasDipakai, setEmasDipakai] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Perhitungan zakat dilakukan...");
  };

  return (
    <form onSubmit={handleSubmit} className="zakat-form-container">
      <h2 className="form-title">💼 Zakat Penghasilan</h2>
      <label>
        Total Penghasilan Bulanan (Rp):
        <input
          type="number"
          value={penghasilanBulanan}
          onChange={(e) => setPenghasilanBulanan(e.target.value)}
        />
      </label>

      <label>
        Jumlah Bulan (12):
        <input
          type="number"
          value={bulan}
          onChange={(e) => setBulan(e.target.value)}
        />
      </label>

      <label>
        Pengeluaran Pokok per Bulan (Rp):
        <input
          type="number"
          value={pengeluaranBulanan}
          onChange={(e) => setPengeluaranBulanan(e.target.value)}
        />
      </label>

      <label>
        Tabungan Tersisa (Rp):
        <input
          type="number"
          value={tabungan}
          onChange={(e) => setTabungan(e.target.value)}
        />
      </label>

      <hr className="divider" />

      <h2 className="form-title">👑 Zakat Perhiasan</h2>
      <label>
        Berat Emas (gram):
        <input
          type="number"
          value={beratEmas}
          onChange={(e) => setBeratEmas(e.target.value)}
        />
      </label>

      <label>
        Berat Perak (gram):
        <input
          type="number"
          value={beratPerak}
          onChange={(e) => setBeratPerak(e.target.value)}
        />
      </label>

      <label>
        Harga Emas per Gram (Rp):
        <input
          type="number"
          value={hargaEmas}
          onChange={(e) => setHargaEmas(e.target.value)}
        />
      </label>

      <label>
        Harga Perak per Gram (Rp):
        <input
          type="number"
          value={hargaPerak}
          onChange={(e) => setHargaPerak(e.target.value)}
        />
      </label>

      <label>
        Emas yang Dipakai Sehari-hari (gram):
        <input
          type="number"
          value={emasDipakai}
          onChange={(e) => setEmasDipakai(e.target.value)}
        />
      </label>

      <button type="submit" className="submit-btn">Hitung Zakat</button>
    </form>
  );
};

export default ZakatMaalCalculator;

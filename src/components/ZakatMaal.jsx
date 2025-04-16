import { useState, useEffect, useRef } from "react";
import "./../styles/zakatMaal.css";
import penghasilan from './../assets/penghasilan.jpeg';
import perhiasan from './../assets/perhiasan.jpeg';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ZakatMaalCard({ onBack }) {
  const [gaji, setGaji] = useState("");
  const [penghasilanLain, setPenghasilanLain] = useState("");
  const [hargaEmas] = useState(1904000);
  const [emas, setEmas] = useState("");
  const [zakat, setZakat] = useState(null);
  const [wajibZakat, setWajibZakat] = useState(null);
  const [totalPenghasilan, setTotalPenghasilan] = useState(0);
  const [isPerhiasan, setIsPerhiasan] = useState(null);
  const [zakatPerhiasan, setZakatPerhiasan] = useState(null);
  const [wajibZakatPerhiasan, setWajibZakatPerhiasan] = useState(null);
  const [nilaiPerhiasan, setNilaiPerhiasan] = useState(0);

  const formRef = useRef(null);

  const formatRupiah = (angka) => {
    if (!angka) return "Rp0";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const parseNumber = (str) =>
    parseFloat(str.replace(/[Rp.]/g, "").replace(",", "")) || 0;

  const handleGajiChange = (e) => {
    const number = parseNumber(e.target.value);
    setGaji(formatRupiah(number));
  };

  const handlePenghasilanLainChange = (e) => {
    const number = parseNumber(e.target.value);
    setPenghasilanLain(formatRupiah(number));
  };

  useEffect(() => {
    const total = parseNumber(gaji) + parseNumber(penghasilanLain);
    setTotalPenghasilan(total);
  }, [gaji, penghasilanLain]);

  const hitungZakatPenghasilan = () => {
    if (gaji === "" || penghasilanLain === "") {
      alert("Mohon isi gaji dan penghasilan lain-lain.");
      return;
    }

    const nisabBulanan = 85685972 / 12;
    const wajib = totalPenghasilan >= nisabBulanan;
    setWajibZakat(wajib);

    if (wajib) {
      setZakat((totalPenghasilan * 2.5) / 100);
    } else {
      setZakat(0);
    }
  };

  const hitungZakatPerhiasan = () => {
    const jumlahEmas = parseFloat(emas);
    if (isNaN(jumlahEmas)) {
      alert("Mohon isi jumlah emas dengan benar.");
      return;
    }

    const totalNilai = jumlahEmas * hargaEmas;
    setNilaiPerhiasan(totalNilai);

    if (jumlahEmas < 85) {
      setWajibZakatPerhiasan(false);
      setZakatPerhiasan(null);
      return;
    }

    setWajibZakatPerhiasan(true);
    setZakatPerhiasan((totalNilai * 2.5) / 100);
  };

  const handleSelect = (type) => {
    setIsPerhiasan(type === "perhiasan");
    resetSemua();
    scrollToForm();
  };

  const scrollToForm = () => {
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const resetSemua = () => {
    setGaji("");
    setPenghasilanLain("");
    setEmas("");
    setZakat(null);
    setWajibZakat(null);
    setTotalPenghasilan(0);
    setNilaiPerhiasan(0);
    setWajibZakatPerhiasan(null);
    setZakatPerhiasan(null);
  };

  const handleBack = () => {
    setIsPerhiasan(null);
    resetSemua();
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="zakat-container">
      <div className="zakat-header">
        <h2 className="zakat-title">Kalkulator Zakat Maal</h2>
        <button onClick={handleBack} className="back-btn">←</button>
      </div>
      <p className="zakat-subtitle">Pilih jenis zakat yang ingin kamu hitung</p>

      <div className="zakat-box-wrapper">
        <div className="zakat-box" onClick={() => handleSelect("penghasilan")}>
          <div className="zakat-icon">
            <img src={penghasilan} alt="Ikon Zakat penghasilan" className="uang-img" />
          </div>
          <h3>Zakat Penghasilan</h3>
          <p>Zakat atas penghasilan bulanan seperti gaji, bonus, dll.</p>
        </div>
        <div className="zakat-box" onClick={() => handleSelect("perhiasan")}>
          <div className="zakat-icon">
            <img src={perhiasan} alt="Ikon Zakat perhiasan" className="emas-img" />
          </div>
          <h3>Zakat Perhiasan</h3>
          <p>Zakat emas yang disimpan atau digunakan jika melebihi nisab.</p>
        </div>
      </div>

      {isPerhiasan !== null && (
        <div ref={formRef} className="form-container">
          {!isPerhiasan ? (
            <div className="form-section">
              <h3>Form Zakat Penghasilan</h3>

              <label>💰 Gaji per bulan</label>
              <input type="text" value={gaji} onChange={handleGajiChange} />

              <label>💼 Penghasilan lain-lain</label>
              <input
                type="text"
                value={penghasilanLain}
                onChange={handlePenghasilanLainChange}
              />

              <label>📊 Total Penghasilan</label>
              <input
                type="text"
                value={formatRupiah(totalPenghasilan)}
                readOnly
              />

              <p>
                Nisab per bulan: <strong>Rp 7.140.498</strong>
              </p>

              <button onClick={hitungZakatPenghasilan} className="hitung-btn">Hitung Zakat</button>
              <button onClick={resetSemua} className="reset-btn">
                Reset
              </button>

              {wajibZakat === false && (
                <p className="info-text">⚠️ Penghasilan Anda belum mencapai nisab. TIDAK WAJIB membayar zakat.</p>
              )}

              {wajibZakat && zakat !== null && (
                <>
                  <p>💸 Zakat yang harus dibayar: <strong>{formatRupiah(zakat)}</strong></p>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <BarChart
                        data={[
                          { name: "Zakat", jumlah: zakat },
                          {
                            name: "Sisa Penghasilan",
                            jumlah: totalPenghasilan - zakat,
                          },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatRupiah(value)} />
                        <Legend />
                        <Bar dataKey="jumlah" fill="#00acc1" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="form-section">
              <h3>💍 Form Zakat Perhiasan</h3>

              <label>🔢 Jumlah Emas (gram)</label>
              <input
                type="number"
                value={emas}
                onChange={(e) => setEmas(e.target.value)}
                placeholder="Masukkan gram emas"
              />

              <p>📈 Harga Emas per gram: <strong>{formatRupiah(hargaEmas)}</strong></p>

              <p className="nisab-info">
                📌 <strong>Note:</strong> Nisab emas untuk zakat adalah <strong>85 gram</strong>. Jika emas Anda di bawah jumlah ini, tidak wajib zakat.
              </p>

              <button onClick={hitungZakatPerhiasan} className="hitung-btn">Hitung Zakat</button>
              <button onClick={resetSemua} className="reset-btn">
                Reset
              </button>

              {wajibZakatPerhiasan === false && (
                <p className="info-text">⚠️ Nilai perhiasan Anda belum mencapai nisab. TIDAK WAJIB membayar zakat.</p>
              )}

              {wajibZakatPerhiasan && zakatPerhiasan !== null && (
                <>
                  <p>💸 Zakat perhiasan yang harus dibayar: <strong>{formatRupiah(zakatPerhiasan)}</strong></p>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <BarChart
                        data={[
                          { name: "Zakat", jumlah: zakatPerhiasan },
                          {
                            name: "Sisa Nilai Perhiasan",
                            jumlah: nilaiPerhiasan - zakatPerhiasan,
                          },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatRupiah(value)} />
                        <Legend />
                        <Bar dataKey="jumlah" fill="#f06292" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
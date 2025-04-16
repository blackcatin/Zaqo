import { useState } from "react";
import "./../styles/zakatSelector.css";
import zakatFitra from './../assets/zakat-fitra.jpeg'; 
import zakatMaal from './../assets/zakat-maal.jpeg';
import ZakatMaalCard from "../components/ZakatMaal";
import ZakatFitrahCalculator from "../components/ZakatFitrah"; 

const ZakatSelector = () => {
  const [selectedZakat, setSelectedZakat] = useState(null);
  const handleSelect = (type) => {
    setSelectedZakat(type);
  };

  const handleBack = () => {
    setSelectedZakat(null);
  };

  return (
    <div className="zakat-selector-container">
      {selectedZakat === "maal" ? (
        <ZakatMaalCard onBack={handleBack} />
      ) : selectedZakat === "fitrah" ? (
        <ZakatFitrahCalculator onBack={handleBack} />
      ) : (
        <>
          <h2 className="zakat-title">Kalkulator Zakat Online</h2>
          <p className="zakat-subtitle">Pilih jenis zakat yang ingin kamu hitung</p>

          <div className="zakat-box-wrapper">
            <div
              onClick={() => handleSelect('maal')}
              className="zakat-box"
            >
              <div className="zakat-icon">
                <img src={zakatMaal} alt="Ikon Zakat Maal" className="zakat-img" />
              </div>
              <h3 className="zakat-box-title">Zakat Maal</h3>
              <p className="zakat-box-desc">
                Zakat atas harta simpanan seperti tabungan, emas, saham, dan lainnya
                yang telah mencapai nisab dan haul.
              </p>
            </div>

            <div
              onClick={() => handleSelect('fitrah')}
              className="zakat-box"
            >
              <div className="zakat-icon">
                <img src={zakatFitra} alt="Ikon Zakat Fitrah" className="zakat-img" />
              </div>
              <h3 className="zakat-box-title">Zakat Fitrah</h3>
              <p className="zakat-box-desc">
                Zakat wajib yang dikeluarkan menjelang Idul Fitri, biasanya berupa beras
                atau uang senilai makanan pokok.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ZakatSelector;

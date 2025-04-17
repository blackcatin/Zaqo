import { useState } from "react";
import "./../styles/zakatSelector.css";
import zakatFitra from "./../assets/zakat-fitra.jpeg";
import zakatMaal from "./../assets/zakat-maal.jpeg";
import ZakatMaalCard from "../components/ZakatMaal";
import ZakatFitrahCalculator from "../components/ZakatFitrah";

const ZakatSelector = () => {
  const [selectedZakat, setSelectedZakat] = useState(null);

  const handleSelect = (type) => {
    if (type === "maal" || type === "fitrah") {
      setSelectedZakat(type);
    }
  };

  const handleBack = () => {
    setSelectedZakat(null);
  };

  const renderContent = () => {
    switch (selectedZakat) {
      case "maal":
        return <ZakatMaalCard onBack={handleBack} />;
      case "fitrah":
        return <ZakatFitrahCalculator onBack={handleBack} />;
      default:
        return (
          <>
            <h2 className="zakat-title">Kalkulator Zakat Online</h2>
            <p className="zakat-subtitle">Pilih jenis zakat yang ingin kamu hitung</p>

            <div className="zakat-box-wrapper">

              <div
                className="zakat-box"
                onClick={() => handleSelect("maal")}
              >
                <div className="zakat-icon">
                  <img
                    src={zakatMaal}
                    alt="Ikon Zakat Maal"
                    className="zakat-img"
                  />
                </div>
                <h3 className="zakat-box-title">Zakat Maal</h3>
                <p className="zakat-box-desc">
                  Zakat atas harta simpanan seperti tabungan, emas, saham, dan lainnya
                  yang telah mencapai nisab dan haul.
                </p>
              </div>

              <div
                className="zakat-box"
                onClick={() => handleSelect("fitrah")}
              >
                <div className="zakat-icon">
                  <img
                    src={zakatFitra}
                    alt="Ikon Zakat Fitrah"
                    className="zakat-img"
                  />
                </div>
                <h3 className="zakat-box-title">Zakat Fitrah</h3>
                <p className="zakat-box-desc">
                  Zakat wajib yang dikeluarkan menjelang Idul Fitri, biasanya berupa
                  beras atau uang senilai makanan pokok.
                </p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="zakat-selector-container">
      {renderContent()}
    </div>
  );
};

export default ZakatSelector;

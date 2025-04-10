import { useState } from "react";
import './../styles/modul.css';
import infaqImage from './../assets/infaq.jpg';

function Modul() {
    const [currentPage, setCurrentPage] = useState("modul"); 

    return (
        <div className="modul-container">
            {currentPage !== "modul" && (
                <button onClick={() => setCurrentPage("modul")} className="back-btn">←</button>
            )}

            {currentPage === "modul" && (
                <>
                    <h1>Modul Pembelajaran</h1>
                    <p>Temukan berbagai materi pembelajaran tentang zakat dan perhitungan zakat dengan mudah.</p>

                    <div className="modul-list">
                        <div className="modul-card">
                            <h3>Modul 1: Pengantar Zakat</h3>
                            <p>Pahami konsep dasar zakat, hukum, dan manfaatnya dalam kehidupan.</p>
                            <button onClick={() => setCurrentPage("zakat")} className="btn">Baca Modul</button>
                        </div>

                        <div className="modul-card">
                            <h3>Modul 2: Jenis-jenis Zakat</h3>
                            <p>Pelajari jenis-jenis zakat, seperti zakat fitrah, maal, profesi, dan lainnya.</p>
                            <button onClick={() => setCurrentPage("jenisZakat")} className="btn">Baca Modul</button>
                        </div>

                        <div className="modul-card">
                            <h3>Modul 3: Cara Menghitung Zakat</h3>
                            <p>Pahami bagaimana cara menghitung zakat dengan rumus yang tepat.</p>
                            <button onClick={() => setCurrentPage("hitungZakat")} className="btn">Baca Modul</button>
                        </div>
                    </div>
                </>
            )}

        {currentPage === "zakat" && (
                <div>
                    <h1>Pengantar Zakat</h1>
                    <div className="zakat-content">
                        <div className="sub-bab">
                            <h2>1. Bab 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa eveniet maxime quasi excepturi odit amet, tempora neque quaerat quibusdam voluptates id rerum voluptatibus accusantium, atque optio qui earum sit?
                            </p>
                        </div>

                        <div className="sub-bab">
                            <h2>2. Bab 2</h2>
                            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolores eos quia excepturi, maxime, exercitationem perferendis consectetur vero dolorem doloribus suscipit odio sunt aliquam explicabo, voluptatum fugit ipsa necessitatibus harum.</p>
                        </div>

                        <div className="sub-bab">
                            <h2>3. Bab 3</h2>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit eligendi corporis debitis error necessitatibus magnam quam dicta enim eveniet exercitationem ab delectus praesentium cum nulla, unde accusantium provident id?</p>
                        </div>

                    </div>
                </div>
            )}


            {currentPage === "jenisZakat" && (
                <div >
                    <h1>Jenis-Jenis Zakat</h1>
                    <div className="zakat-content">
                        <div className="sub-bab">
                            <h2>1. Bab 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa eveniet maxime quasi excepturi odit amet, tempora neque quaerat quibusdam voluptates id rerum voluptatibus accusantium, atque optio qui earum sit?
                            </p>
                        </div>

                        <div className="sub-bab">
                            <h2>2. Bab 2</h2>
                            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolores eos quia excepturi, maxime, exercitationem perferendis consectetur vero dolorem doloribus suscipit odio sunt aliquam explicabo, voluptatum fugit ipsa necessitatibus harum.</p>
                        </div>

                        <div className="sub-bab">
                            <h2>3. Bab 3</h2>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit eligendi corporis debitis error necessitatibus magnam quam dicta enim eveniet exercitationem ab delectus praesentium cum nulla, unde accusantium provident id?</p>
                        </div>

                    </div>
                </div>
            )}

            {currentPage === "hitungZakat" && (
                <div>
                    <h1>Cara Menghitung Zakat</h1>
                    <div className="zakat-content">
                        <div className="sub-bab">
                            <h2>1. Bab 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa eveniet maxime quasi excepturi odit amet, tempora neque quaerat quibusdam voluptates id rerum voluptatibus accusantium, atque optio qui earum sit?
                            </p>
                        </div>

                        <div className="sub-bab">
                            <h2>2. Bab 2</h2>
                            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolores eos quia excepturi, maxime, exercitationem perferendis consectetur vero dolorem doloribus suscipit odio sunt aliquam explicabo, voluptatum fugit ipsa necessitatibus harum.</p>
                        </div>

                        <div className="sub-bab">
                            <h2>3. Bab 3</h2>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit eligendi corporis debitis error necessitatibus magnam quam dicta enim eveniet exercitationem ab delectus praesentium cum nulla, unde accusantium provident id?</p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Modul;

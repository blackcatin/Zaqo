import { useState } from "react";
import './../styles/modul.css';
import infaqImage from './../assets/infaq.jpg';

function Modul() {
    const [currentPage, setCurrentPage] = useState("modul"); 
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const quizQuestions = [
        {
          question: "Siapa saja yang wajib menunaikan zakat?",
          options: [
            { text: "A. Semua orang", isCorrect: false },
            { text: "B. Non-Muslim", isCorrect: false },
            { text: "C. Muslim yang berakal dan merdeka", isCorrect: true }
          ]
        },
        {
          question: "Apa hukum zakat dalam Islam?",
          options: [
            { text: "A. Sunnah", isCorrect: false },
            { text: "B. Wajib", isCorrect: true },
            { text: "C. Mubah", isCorrect: false }
          ]
        }
      ];
    
      const handleAnswer = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
          alert("Jawaban benar!");
        } else {
          alert("Jawaban salah!");
        }
    
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < quizQuestions.length) {
          setCurrentQuestionIndex(nextQuestion);
        } else {
          setShowResult(true);
        }
      };

    const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    };

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
                <div className="modul-page">
                    <h1 >Pengantar Zakat</h1>
                    <div className="zakat-content">
                    <section>
                        <h2>1. Konsep Dasar Zakat</h2>
                        <p className="zakat-text">
                        Zakat adalah salah satu rukun Islam yang wajib ditunaikan oleh setiap
                        Muslim yang memenuhi syarat. Secara bahasa, zakat berarti <em>bersih, tumbuh, dan berkembang</em>, 
                        sedangkan secara istilah, zakat adalah kewajiban mengeluarkan sebagian harta kepada kelompok 
                        yang berhak menerimanya sesuai ketentuan syariat Islam.
                        </p>
                        <ul className="zakat-list">
                        <li><strong>Zakat Fitrah:</strong> Wajib dikeluarkan sebelum Hari Raya Idulfitri.</li>
                        <li><strong>Zakat Mal:</strong> Berlaku untuk harta tertentu seperti emas, perak, hasil pertanian, 
                        peternakan, perdagangan, dan penghasilan jika telah mencapai nisab dan haul.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2>2. Hukum Zakat</h2>
                        <p className="zakat-text">Zakat hukumnya <strong>wajib</strong> bagi Muslim yang memenuhi syarat:</p>
                        <ul className="zakat-list">
                        <li><strong>Islam</strong> – Hanya diwajibkan bagi umat Islam.</li>
                        <li><strong>Merdeka</strong> – Orang yang merdeka berkewajiban menunaikan zakat.</li>
                        <li><strong>Berakal dan Baligh</strong> – Diperuntukkan bagi yang sudah dewasa dan berakal sehat.</li>
                        <li><strong>Memiliki harta yang mencapai nisab dan haul</strong>.</li>
                        </ul>
                        <blockquote>
                        <p><strong>QS. At-Taubah: 103</strong></p>
                        <p>"Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka..."</p>
                        </blockquote>
                    </section>
            
                    <section>
                        <h2>3. Manfaat Zakat dalam Kehidupan</h2>
                        <ul className="zakat-list">
                        <li><strong>Spiritual:</strong> Menyucikan harta dan jiwa dari sifat kikir.</li>
                        <li><strong>Sosial:</strong> Mengurangi kesenjangan ekonomi dan membantu fakir miskin.</li>
                        <li><strong>Ekonomi:</strong> Meningkatkan perputaran ekonomi dalam masyarakat.</li>
                        </ul>
                    </section>
            
                    <section className="kesimpulan">
                        <h2>Kesimpulan</h2>
                        <p className="zakat-text">
                        Zakat bukan sekadar kewajiban, tetapi juga merupakan instrumen sosial yang dapat menyejahterakan masyarakat. 
                        Dengan memahami dan menunaikan zakat, kita tidak hanya membersihkan harta tetapi juga berkontribusi dalam menciptakan 
                        keseimbangan ekonomi dan keadilan sosial.
                        </p>
                    </section>

                    <div className="quiz-link fade-transition">
                    <button onClick={() => {
                        resetQuiz();
                        setCurrentPage("quizZakat");
                    }}>
                        🎯 Yuk, Uji Pemahamanmu tentang Zakat!
                    </button>
                    </div>
                    </div>
                </div>
            )}

            {currentPage === "quizZakat" && (
            <div className="quiz">
                <h2>Quiz: Pengantar Zakat</h2>
                {showResult ? (
                <div>
                    <p>Skor akhir kamu: {score} dari {quizQuestions.length}</p>
                </div>
                ) : (
                <div>
                    <p>{quizQuestions[currentQuestionIndex].question}</p>
                    <ul>
                    {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                        <li key={index}>
                        <button onClick={() => handleAnswer(option.isCorrect)}>
                            {option.text}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
                )}
            </div>
            )}

            {currentPage === "jenisZakat" && (
                <div className="modul-page">
                    <h1>Jenis-Jenis Zakat</h1>
                    <p>Pelajari jenis-jenis zakat, seperti zakat fitrah, maal, profesi, dan lainnya.</p>
                </div>
            )}

            {currentPage === "hitungZakat" && (
                <div className="modul-page">
                    <h1>Cara Menghitung Zakat</h1>
                    <p>Pahami bagaimana cara menghitung zakat dengan rumus yang tepat.</p>
                </div>
            )}
        </div>
    );
}

export default Modul;

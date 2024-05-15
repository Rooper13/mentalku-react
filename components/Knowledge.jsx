import "./Knowledge.css";

const Knowledge = () => {
  return (
    <section className="knowledge">
      <div className="knowledge-content">
        <div className="knowledge-content-child" />
        <div className="knowledge-header">
          <div className="knowledge-header-child" />
          <div className="knowledge-title-container">
            <h2 className="koleksi-pengetahuan1">KOLEKSI PENGETAHUAN</h2>
          </div>
          <div className="knowledge-info-parent">
            <div className="knowledge-info">
              <div className="knowledge-description">
                <h2 className="pelajari-dan-pahami1">{`Pelajari dan Pahami `}</h2>
                <h2 className="kesehatan-mental1">Kesehatan Mental</h2>
              </div>
              <div className="jelajahi-koleksi-pengetahuan1">
                Jelajahi koleksi pengetahuan dan temukan jawaban dari semua
                pertanyanmu mengenai kesehatan mental
              </div>
            </div>
            <div className="kunjungi-koleksi-pengetahuan1">{`Kunjungi Koleksi Pengetahuan >`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;

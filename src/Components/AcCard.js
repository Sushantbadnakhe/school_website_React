import styles from "./AcCard.module.css";

export const AcCard = ({ Ac }) => {

  return (
    <>
      <div>
        <div className={`${styles.card} card h-100`}>
          <img src="s" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Ac.title}</h5>
            <p className="card-text">{Ac.body}</p>
          </div>
          <div className={`${styles.footer} card-footer`}>
            <small className="text-body-secondary">{Ac.date}</small>
          </div>
        </div>
      </div>
    </>
  );
};

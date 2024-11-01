import styles from "./Card.module.css";

export const Card = ({ Cd }) => {
  return (
    <>
      <div>
        <div className={`${styles.card} card h-100`}>
          <img src="s" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Cd.title}</h5>
            <p className="card-text">{Cd.body}</p>
          </div>
          <div className={`${styles.footer} card-footer`}>
            <small className="text-body-secondary">{Cd.date}</small>
          </div>
        </div>
      </div>
    </>
  );
};

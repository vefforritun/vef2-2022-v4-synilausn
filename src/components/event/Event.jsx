
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../form/Button';
import { Input } from '../form/Input';
import s from './Event.module.scss';

export function Event({ title, description, registrations, loggedin }) {
  const [registered, setRegistered] = useState(false);

  const onRegister = (e) => {
    e.preventDefault();
    setRegistered(true);
  }

  return (
    <section className={s.event}>
      <h2 className={s.event__title}>{title}</h2>
      <p className={s.event__description}>{description}</p>

      {registrations.length === 0 && (
        <p className={s.event__empty}>Engin hefur skráð sig á þennan viðburð</p>
      )}

      {registrations.length > 0 && (
        <ul className={s.event__registeredList}>
          {registrations.map((registration, i) => (
            <li key={i} className={s.event__registeredItem}>
              <span className={s.event__registeredName}>{registration.name}</span>
              {registration.comment && <span className={s.event__registeredComment}>{registration.comment}</span>}
            </li>
          ))}
        </ul>
      )}
      <p>&nbsp;</p>
      {registered && (<p>Þú hefur skráð þig á þennan viðburð</p>)}

      {!registered && (
        <>
          {loggedin && (
            <form onSubmit={onRegister}>
              <Input label="Athugasemd" name="comment" />
              <Button>Skrá mig</Button>
              <p>&nbsp;</p>
            </form>
          )}

          {!loggedin && (
            <p>Skráðu þig inn til að skrá þig á viðburðinn</p>
          )}
        </>
      )}

      <p><Link to="/">Til baka</Link></p>
    </section>
  )
}

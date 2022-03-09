
import { Link } from 'react-router-dom';
import s from './Events.module.scss';

export function Events({ title, events }) {

  return (
    <section className={s.events}>
      <h2 className={s.events__title}>{title}</h2>
      <ul className={s.events__list}>
        {events.map((item, i) => {
          return (
            <li className={s.events__event} key={i}>
              <Link to={`/${item.id}`} className={s.events__eventLink}>{item.name}</Link>
              <p className={s.events__eventDescription}>{item.description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

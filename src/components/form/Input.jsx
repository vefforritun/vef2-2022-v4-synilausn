
import s from './Input.module.scss';

export function Input({ label, name }) {

  return (
    <div className={s.input}>
      <label htmlFor={name}>{label}:</label>
      <input type="text" name={name} id={name} />
    </div>
  )
}

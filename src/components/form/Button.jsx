
import s from './Button.module.scss'

export function Button({ children }) {
  return (
    <button className={s.button}>{children}</button>
  )
}

import styles from './Card.module.scss'

type CardProps = {
  headline: string
  price: string
  features: string[]
  btnText: string
}

export const Card = (props: CardProps) => {
  return (
    <div className={styles.base}>
      <div style={{ backgroundColor: '#00000077', padding: '0.5rem 1rem' }}>
        <h1 style={{ margin: 0, color: 'white', textAlign: 'center' }}>
          {props.headline}
        </h1>
      </div>
      <div style={{ padding: '0 1.2rem' }}>
        <h2
          style={{
            padding: 0,
            textAlign: 'center',
            margin: '0.5rem 0 0',
            fontSize: '2rem',
          }}
        >
          {props.price}
        </h2>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            textAlign: 'center',
          }}
        >
          {props.features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
      </div>
      <button
        style={{
          width: 'calc(100% - 1rem)',
          margin: '0.5rem',
          border: 'none',
          backgroundColor: 'red',
          color: 'white',
          fontSize: '1.25rem',
          cursor: 'pointer',
          padding: '0.5rem',
        }}
      >
        {props.btnText}
      </button>
    </div>
  )
}

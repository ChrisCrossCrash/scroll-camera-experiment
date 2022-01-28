import { useRef } from 'react'
import { Html } from '@react-three/drei'
import { Card } from '../Card/Card'
import styles from './Pricing.module.scss'

export const Pricing = () => {
  const portal = useRef<HTMLDivElement>(
    document.getElementById('portal') as HTMLDivElement
  )

  return (
    <Html
      portal={portal}
      transform
      rotation={[Math.PI / -2 + 0.2, 0, 0]}
      distanceFactor={3}
    >
      <div className={styles.base}>
        <div className={styles.description}>
          <h1>Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe
            illo laboriosam pariatur dignissimos, expedita voluptates recusandae
            omnis tenetur earum harum nulla nisi eveniet blanditiis sit illum
            consectetur similique perferendis!
          </p>
        </div>
        <div className={styles.cards}>
          <Card
            headline='Free'
            price='0$ / mo'
            btnText='Sign up for free'
            features={[
              '10 users included',
              '2 GB of storage',
              'Email support',
              'Help center access',
            ]}
          />
          <Card
            headline='Pro'
            price='$15 / mo'
            btnText='Get started'
            features={[
              '20 users included',
              '10 GB of storage',
              'Priority email support',
              'Help center access',
            ]}
          />
          <Card
            headline='Enterprise'
            price='$15 / mo'
            btnText='Get started'
            features={[
              '30 users included',
              '15 GB of storage',
              'Phone and email support',
              'Help center access',
              'Agency portal access',
            ]}
          />
        </div>
      </div>
    </Html>
  )
}

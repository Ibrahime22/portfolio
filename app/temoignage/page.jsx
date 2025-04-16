'use client'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import ProtectedRoute from './components/ProtectedRoute'

export default function TestimonialsList() {
  const testimonials = useSelector(state => state.testimonials)

  return (
    <ProtectedRoute>
      <div className="container">
        <h2>Liste des témoignages</h2>
        <Link href="/testimonials/edit">
          <button>Laisser un témoignage</button>
        </Link>
        <ul style={{ marginTop: '2rem' }}>
          {testimonials.map(t => (
            <li key={t.id} style={{ marginBottom: '1rem', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
              {t.message}
              <br />
              <Link href={`/testimonials/edit?id=${t.id}`}>Modifier</Link>
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  )
}

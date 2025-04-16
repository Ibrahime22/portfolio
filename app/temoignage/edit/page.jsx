'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addTestimonial, updateTestimonial } from '../../../store/testimonialSlice'
import ProtectedRoute from '././components/ProtectedRoute'

export default function EditTestimonial() {
  const router = useRouter()
  const dispatch = useDispatch()
  const params = useSearchParams()
  const id = params.get('id')

  const testimonials = useSelector(state => state.testimonials)
  const existing = testimonials.find(t => t.id === Number(id))
  const [message, setMessage] = useState(existing ? existing.message : '')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message) {
      setError('Le message est requis.')
      return
    }

    if (existing) {
      dispatch(updateTestimonial({ id: existing.id, message }))
    } else {
      dispatch(addTestimonial({ message }))
    }

    router.push('/testimonials')
  }

  return (
    <ProtectedRoute>
      <div className="container">
        <h2>{existing ? 'Modifier' : 'Ajouter'} un témoignage</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows={4}
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </ProtectedRoute>
  )
}

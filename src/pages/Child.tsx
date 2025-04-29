import { Link } from 'react-router-dom'

export default function Child() {
  return (
    <>
      <div className="text-xl">Child</div>
      <Link to={{ pathname: '/abort' }}>to abort</Link>
    </>
  )
}

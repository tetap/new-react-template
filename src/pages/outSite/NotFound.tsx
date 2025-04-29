import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <div className="text-xl">NotFound</div>
      <Link to={{ pathname: '/' }}>to home</Link>
    </>
  )
}

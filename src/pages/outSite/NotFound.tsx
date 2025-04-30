import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <div className="text-xl">404 Not Found</div>
      <Link to={{ pathname: '/' }}>to home</Link>
    </>
  )
}

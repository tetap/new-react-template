import { Link } from 'react-router-dom'

export default function Abort() {
  return (
    <>
      <div className="text-xl">Abort</div>
      <Link to={{ pathname: '/' }}>to home</Link>
    </>
  )
}

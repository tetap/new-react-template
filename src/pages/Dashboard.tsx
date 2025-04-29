import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
      <div className="text-xl">Home</div>
      <Outlet />
    </>
  )
}

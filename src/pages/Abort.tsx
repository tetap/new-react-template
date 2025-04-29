import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const { t } = useTranslation()
  return (
    <>
      <div className="text-xl">Abort</div>
      <Link to={{ pathname: '/' }}>to home</Link>
    </>
  )
}

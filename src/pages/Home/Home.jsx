import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Link to='/teacher-dashboard'>Go to Teacher Dashboard</Link>
      <Link to='/student-dashboard'>Go to Student Dashboard</Link>
    </div>
  )
}

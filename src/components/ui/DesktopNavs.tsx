import { Link } from 'react-router-dom'
import {lists} from '../../lib/routes'

const DesktopNavs = () => {

  return (
    <nav>
        <ul className='flex gap-8'>
            {lists.map((list, index) => (
            <li key={index}>
                <Link to={list.url}>{list.name}</Link>
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default DesktopNavs

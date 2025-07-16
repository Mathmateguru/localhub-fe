import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { useNavigate, useLocation } from 'react-router'

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='side_bar'>
      <ul className='side_bar_list'>
        {SidebarData.map((val, key) => {
          return (
            <li key={key}
              className='row'
              id={location.pathname == val.link ? 'active' : ''}
              onClick={() => navigate(val.link)}>
              <div id='side_bar_icon'>{val.icon}</div> {' '}
              <div id='side_bar_title'>{val.title} </div>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SideBar;

























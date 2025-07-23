import { useParams } from 'react-router'
import SideBar from '../components/Sidebar/Sidebar';

const Community = () => {
    const { communityId } = useParams();

    return (
        <div className='flex h-screen'   >
            <SideBar />
            <span>{communityId}</span>
        </div>
    )
}

export default Community


import { Users } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { BadgeInfo } from 'lucide-react';
import "./communitycard.css";

const CommunityCard = () => {
  return (

    <div className='main-card'>
      <div className='sub-main-card'>
        <div className='first-line'>
          <h1 className='text'>Tech Enthusiasts</h1>
          <BadgeInfo className='badge' />
        </div>

        <h4 className='text2'>Technology</h4>

        <div className='intro'>
          <p> A community for Technology lover to share ideas, discuss</p>
          <p> trends, and collaborate on Project.</p>
        </div>

        <div className='um-icon-wrapper'>

          <span className='u-icon'><Users size={20} /> <p>1,200 members </p></span>

          <span className='m-icon'>< MessageSquare size={20} /><p>89 Posts</p></span>

        </div>

        <div className='footer'>
          <p>Created 1/5/2025</p>
          <button className='card-btn'>Join Community</button>
        </div>

      </div>
    </div>
  )
}

export default CommunityCard



import { Users } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { BadgeInfo } from 'lucide-react';
import "./communitycard.css";

interface Community{
name : string
description : string
image : string
isPublic : boolean
posts? : unknown[]
members? : unknown[]
}

interface CommunityCardProps {
community : Community
}



const CommunityCard = ({community} : CommunityCardProps ) => {

  return (

    <div className='main-card'>
      <div className='sub-main-card'>
        <div className='first-line'>
          <h1 className='text'>{community.name}</h1>
          <BadgeInfo className='badge' />
        </div>

        <h4 className='text2'>Technology</h4>

        <div className='intro'>
          <p>{community.description}</p>
        </div>

        <div className='um-icon-wrapper'>

          <span className='u-icon'><Users size={20} /> <p>{community?.members?.length || 0 } members </p></span>

          <span className='m-icon'>< MessageSquare size={20} /><p>{community.posts?.length || 0}</p></span>

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

import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm '> 
        <input type="text" placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/17728530/pexels-photo-17728530/free-photo-of-light-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='userChatInfo'>
          <span>Dan</span>
        </div>
      </div>
    </div>
  )
}

export default Search

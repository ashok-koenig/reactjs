import React, { useState } from 'react'

function FriendsList() {
    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState('')

    const handleAddFriend= () =>{
        // Using spread operator to copy the array of friend and add a new friend
        // setFriends([...friends, "Bob"])
        if(newFriend){
            setFriends([...friends, newFriend])
            setNewFriend('')
        }
    }
    const handleInputChange = (event)=>{
        setNewFriend(event.target.value)
    }

    const showFriendsList = () =>{
        if(friends.length == 0){
            return <p>No friends</p>
        }else{
            return <ol>
                        {friends.map((name, index)=> <li key={index}>{name}</li>)}
                    </ol>
        }
    }
  return (
    <div>
        <h2>Friends List - Using state</h2>
        {/* {
            friends.length == 0 && <p>No friends</p>
        } */}

        {/* <condition> ? <execute if condition is true> : <execute if condition is false> */}
        {/* {
         friends.length == 0 ? <p>No friends</p> :  
            <ol>
                {friends.map((name, index)=> <li key={index}>{name}</li>)}
            </ol>
        } */}
            {showFriendsList()}

        <input type='text' onChange={handleInputChange} value={newFriend} />
        <button onClick={handleAddFriend}>Add a friend</button>
    </div>
  )
}

export default FriendsList
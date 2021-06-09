import React from 'react'
import { BsKanban } from 'react-icons/bs'

export const BrowseBoards = () => {
  const boards = [
    { id: 1, name: 'Glenn' },
    { id: 2, name: 'Brian' },
  ]

  function removeBoard(boardId) {
    console.log('Remove Board', boardId)
  }

  return (
    <div className="spacing">
      <h1 className="heading size-1">Browse Boards</h1>
      <div className="spacing">
      <div>
        {boards.map((board) => {
          return <div key={board.id}>
        <div className="browse-board-item flex items-center">
          <BsKanban className="board-icon" color="var(--purple)" />
          <div className="spacing-small flex-1">
            <h2 className="heading size-2">{board.name}</h2>
          </div>
          <button className="btn btn-primary">Remove</button>
        </div>
        </div>
        })}
        </div>
      </div>
    </div>
  )
}

function Heading({ children, size = 1, ...rest }) {
  // For the bonus task, see if you can program this component to be used
  // instead of <h1> and <h2>. See the README for more info.
  return (
    <h1 {...rest} className="heading size-1">
      {children}
    </h1>
  )
}
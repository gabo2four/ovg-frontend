import {useState} from 'react'
import { MainWrapper } from './NewMatchStyle'

function NewMatch() {
  
  const [isAccepting, setIsAccepting] = useState(false)
  return (
    <MainWrapper className="match-found-modal">
      <div className="modal-opacity" />
      <div className="main-content">
        {isAccepting ? (
          <span size="large" />
        ) : (
          <div>
            <h2> New Match Found! </h2>
            <div className="buttons-section">
              <button>
                Accept
              </button>

              <button>
                Reject
              </button>
            </div>
          </div>
        )}
      </div>
    </MainWrapper>
  )
}

export default NewMatch

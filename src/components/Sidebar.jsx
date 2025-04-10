import React from 'react'
import { FaHome, FaBoxes, FaSdCard, FaMicrochip, FaMemory } from 'react-icons/fa'
import { MdDeveloperBoard } from 'react-icons/md';


const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className="sidebar__header">
        <button>
            <span>
              <FaHome />
              <span>Home</span>
            </span>
          </button>
      </div>

      <nav className='xeon'>

        <h3>XEON</h3>

        <button>
          <span>
            <FaMicrochip />
            <span>CPU</span>
          </span>
        </button>

        <button>
          <span>
            <MdDeveloperBoard />
            <span>MoBo</span>
          </span>
        </button>

        <button>
          <span>
            <FaMemory />
            <span>RAM</span>
          </span>
        </button>

      </nav>



      <nav className='amd'>

        <h3>AMD</h3>

        <button>
          <span>
            <FaMicrochip />
            <span>CPU</span>
          </span>
        </button>

        <button>
          <span>
            <MdDeveloperBoard />
            <span>MoBo</span>
          </span>
        </button>

        <button>
          <span>
            <FaMemory />
            <span>RAM</span>
          </span>
        </button>

      </nav>

    </div>

  )
      
}



export default Sidebar
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
            <span>Processadores</span>
          </span>
        </button>

        <button>
          <span>
            <FaMicrochip />
            <span>Processadores</span>
          </span>
        </button>

        <button>
          <span>
            <MdDeveloperBoard />
            <span>MotherBoard</span>
          </span>
        </button>

        <button>
          <span>
            <FaMemory />
            <span>Memórias</span>
          </span>
        </button>

      </nav>



      <nav className='amd'>

        <h3>AMD</h3>

        <button>
          <span>
            <FaMicrochip />
            <span>Processadores</span>
          </span>
        </button>

        <button>
          <span>
            <FaMicrochip />
            <span>Processadores</span>
          </span>
        </button>

        <button>
          <span>
            <MdDeveloperBoard />
            <span>MotherBoard</span>
          </span>
        </button>

        <button>
          <span>
            <FaMemory />
            <span>Memórias</span>
          </span>
        </button>

      </nav>

    </div>

  )
      
}



export default Sidebar
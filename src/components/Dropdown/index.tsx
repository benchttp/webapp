import { FC, useState } from 'react'

import { StyledDropdown } from './typescript/dropdown.styles'

interface IDropdownProps {
  /**
   * Others test to compare with
   */
  benchmarksToCompare?: Array<string>

  /**
   * Click handler
   */
  onClick?: () => void
}

const benchmarksToCompare = [
  'Test 1',
  'Test 2',
  'Test 3',
  'Test 4',
  'Test 5',
  'Test 6',
  'Test 7',
  'Test 8',
  'Test 9',
]

const Dropdown: FC<IDropdownProps> = ({ ...props }) => {
  const [dropdownActive, setDropdownActive] = useState(false)

  function openDropdown() {
    setDropdownActive(!dropdownActive)
  }

  function compareTestWith(testName: string) {
    setDropdownActive(false)

    console.log(`Compare ${testName}`)
  }

  const benchmarksList = benchmarksToCompare.map((benchmarkName, index) => {
    return (
      <p
        className={'dropdown-item'}
        key={index}
        onClick={() => compareTestWith(benchmarkName)}
      >
        {benchmarkName}
      </p>
    )
  })

  return (
    <StyledDropdown>
      <div>
        <button
          type="button"
          className={'storybook-dropdown'}
          onClick={() => openDropdown()}
          {...props}
        >
          + Compare with another test
        </button>

        <div
          className={`dropdown-menu ${
            dropdownActive ? 'display-dropdown' : ''
          }`}
        >
          <div>{benchmarksList}</div>
        </div>
      </div>
    </StyledDropdown>
  )
}

export default Dropdown

import { FC, useEffect, useRef, useState } from 'react'

import { StyledDropdown } from './typescript/dropdown.styles'

interface IDropdownProps {
  /**
   * Others test to compare with
   */
  benchmarksToCompare?: Array<string>

  /**
   * Click outside handler
   */
  onClickOutside?: () => void

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
  const [dropdownActive, setDropdownActive] = useState<boolean>(false)
  const refDropdown = useRef(null)
  const { onClickOutside } = props

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refDropdown.current && refDropdown.current !== event.target) {
        onClickOutside && onClickOutside()
        setDropdownActive(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside])

  return (
    <StyledDropdown>
      <div>
        <button
          type="button"
          className={'storybook-dropdown'}
          onClick={() => openDropdown()}
          ref={refDropdown}
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

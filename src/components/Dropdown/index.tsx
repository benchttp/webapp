import { FC, useEffect, useRef, useState } from 'react'

import { IStandardProps } from 'shared/types/common'

import { StyledDropdown } from './core/dropdown.styles'

interface IDropdownProps extends IStandardProps {
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

export const Dropdown: FC<IDropdownProps> = ({ ...props }) => {
  const [dropdownActive, setDropdownActive] = useState<boolean>(false)
  const refDropdownDiv = useRef<HTMLDivElement>(null)
  const { onClickOutside, className } = props

  function openDropdown() {
    setDropdownActive(!dropdownActive)
  }

  function compareTestWith() {
    setDropdownActive(false)
  }

  const benchmarksList = benchmarksToCompare.map((benchmarkName, index) => {
    return (
      <p
        className={'dropdown-item'}
        key={index}
        onClick={() => compareTestWith()}
      >
        {benchmarkName}
      </p>
    )
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refDropdownDiv.current &&
        !refDropdownDiv.current.contains(event.target as Node)
      ) {
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
    <StyledDropdown className={`${className || ''}`}>
      <div>
        <button
          type="button"
          className={'storybook-dropdown'}
          onClick={() => openDropdown()}
        >
          + Compare with another test
        </button>

        <div
          className={`dropdown-menu ${
            dropdownActive ? 'display-dropdown' : ''
          }`}
          ref={refDropdownDiv}
        >
          <div>{benchmarksList}</div>
        </div>
      </div>
    </StyledDropdown>
  )
}

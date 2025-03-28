import { fireEvent, render } from '@testing-library/react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'

describe('Collapsible', () => {
  it('should render the Collapsible component', () => {
    const { getByTestId } = render(<Collapsible data-testid="collapsible" />)
    const collapsible = getByTestId('collapsible')
    expect(collapsible).toBeInTheDocument()
  })
})

describe('CollapsibleTrigger', () => {
  it('should render the CollapsibleTrigger component', () => {
    const { getByTestId } = render(
      <Collapsible>
        <CollapsibleTrigger data-testid="collapsible-trigger">Toggle</CollapsibleTrigger>
      </Collapsible>
    )
    const trigger = getByTestId('collapsible-trigger')
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveTextContent('Toggle')
  })
})

describe('CollapsibleContent', () => {
  it('should render the CollapsibleContent component when expanded', () => {
    const { getByTestId } = render(
      <Collapsible>
        <CollapsibleTrigger data-testid="collapsible-trigger">Toggle</CollapsibleTrigger>
        <CollapsibleContent data-testid="collapsible-content">Content</CollapsibleContent>
      </Collapsible>
    )

    const trigger = getByTestId('collapsible-trigger')
    const content = getByTestId('collapsible-content')

    expect(content).not.toBeVisible()

    fireEvent.click(trigger)

    expect(content).toBeVisible()
    expect(content).toHaveTextContent('Content')
  })
})

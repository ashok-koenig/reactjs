import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../components/Counter"

describe("Counter Component", ()=>{

    it("should display the intial count", ()=>{
        render(<Counter />)
        expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0')
    })

    it("should increment the count when increment button is clicked", ()=>{
        render(<Counter />)
        const button = screen.getByText("Increment")
        fireEvent.click(button)
        expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1')
        fireEvent.click(button)
        expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 2')
    })
})
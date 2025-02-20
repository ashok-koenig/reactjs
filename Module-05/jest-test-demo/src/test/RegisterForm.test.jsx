import { fireEvent, render, screen } from "@testing-library/react"
import RegisterForm from "../components/RegisterForm"

describe("RegisterFrom Component", ()=>{
    it("should allow the user to input name and email", ()=>{
        render(<RegisterForm submitData={()=>{}} />)
        const nameInput = screen.getByTestId('name-input')
        const emailInput = screen.getByTestId('email-input')

        fireEvent.change(nameInput, {target: {value: 'john'}})
        fireEvent.change(emailInput, {target: {value: 'john@email.com'}})

        expect(nameInput).toHaveValue('john')
        expect(emailInput).toHaveValue('john@email.com')
    })

    it("should allow the user to input name and email and submit the data", ()=>{
        const submitData = jest.fn()
        render(<RegisterForm submitData={submitData} />)
        const nameInput = screen.getByTestId('name-input')
        const emailInput = screen.getByTestId('email-input')

        fireEvent.change(nameInput, {target: {value: 'john'}})
        fireEvent.change(emailInput, {target: {value: 'john@email.com'}})

        fireEvent.click(screen.getByRole('button'))

        expect(submitData).toHaveBeenCalledWith('john', 'john@email.com')
    })
})
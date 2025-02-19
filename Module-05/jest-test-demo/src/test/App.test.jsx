import { render, screen } from "@testing-library/react"
import App from "../App"

describe("App Component", ()=> {
    it('Should render the welcome message', ()=>{
        render(<App />)
        const welcomeMessage = screen.getByText(/Welcome to Unit Testing with Jest/i)
        expect(welcomeMessage).toBeInTheDocument();
    })
})
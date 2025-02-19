import { render, screen } from "@testing-library/react"
import Greeting from "../components/Greeting"

describe("Geeting component", ()=>{
    it("Should display the correct greeting message", ()=>{
        render(<Greeting name="John"/>)
        expect(screen.getByText("Hello, John")).toBeInTheDocument()
    })
})
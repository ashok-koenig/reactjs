import { render, screen, waitFor } from "@testing-library/react"
import ProductDetail from "../components/ProductDetail"

beforeEach(()=>{
    global.fetch = jest.fn()
})

afterEach(()=>{
    jest.resetAllMocks()
})

describe("ProductDetail Componnet", ()=>{
    it("Shold display product data after fetching", async ()=>{
        // global.fetch = jest.fn() // moved to beforeEach

        global.fetch.mockResolvedValue({
            json: async ()=> ({title: "HP Laptop"})
        })

        render(<ProductDetail productId={1}/>)

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await waitFor(()=>{
            expect(screen.getByText('Title: HP Laptop')).toBeInTheDocument()
        })
        // jest.resetAllMocks() // moved to afterEach
    })

    it("Shold display product not found for invlid product id", async ()=>{
        // global.fetch = jest.fn() // moved to beforeEach

        global.fetch.mockResolvedValue({
            json: async ()=> (null)
        })

        render(<ProductDetail productId={100}/>)

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await waitFor(()=>{
            expect(screen.getByText('Product not found')).toBeInTheDocument()
        })
        // jest.resetAllMocks() // moved to afterEach
    })
})
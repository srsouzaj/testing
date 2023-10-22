import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button Component", () => {
    it('should render with red background if disabled', () => {
        render(<Button disabled>Click me</Button>);

        const button = screen.getByRole("button", { name: 'Click me' })

        expect(button).toHaveStyle({ backgroundColor: "red" })
    })
})
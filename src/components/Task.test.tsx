import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Tasks from "./Task"
import { rest } from 'msw'
import { setupServer } from "msw/node"

describe('Tasks components', () => {
    const worker = setupServer(
        rest.get("https://jsonplaceholder.typicode.com/posts/1/comments", async (req, res, ctx) => {
            return res(
                ctx.json({
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                }
                )
            )
        })
    )
    beforeAll(() => {
        worker.listen()
    })

    it("should fetch and show tasks on button click", async () => {
        render(<Tasks />);
        const button = screen.getByText(/get tasks from api/i)

        fireEvent.click(button);

        await waitFor(() => screen.findByText("laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"))
    })
})

export { }
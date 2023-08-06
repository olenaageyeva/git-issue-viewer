import { expect, it, describe, vi } from "vitest";
import axios from 'axios';
import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Search } from "../src/components/Search/search";
import { Provider } from "../src/components/Context/provider";

vi.mock('axios');

describe('Search', () => {
    beforeEach(() => {
        render(
            <Provider>
                <Search />
            </Provider>);
    })

    it('should return a default search terms', () => {
        const userInput = screen.getByTestId('user');
        expect(userInput.value).toBe('');
    });

    it('should change search terms on user input', async () => {
        const userInput = screen.getByTestId('user')

        fireEvent.change(userInput, { target: { value: 'mock-user' } })

        expect(userInput.value).toEqual('mock-user');

    })

    it('should fetch issues on submit', async () => {
        const userInput = screen.getByTestId('user')
        const repoInput = screen.getByTestId('repo')

        fireEvent.change(userInput, { target: { value: 'mock-user' } })
        fireEvent.change(repoInput, { target: { value: 'mock-repo' } })

        await userEvent.click(screen.getByTestId('submit'));
        expect(axios.get).toHaveBeenCalledOnce();
        expect(axios.get).toHaveBeenCalledWith("/api/express_backend", { params: { open: "open", user: "mock-user", repo: "mock-repo" } });

    })
});
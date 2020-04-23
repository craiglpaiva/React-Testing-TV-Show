import React from "react";
import { render, fireEvent, wait } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock("./api/fetcShow");
console.log(mockFetchShow);

test("App fetches show data and renders data", () => {
    // mockFetchShow
    const mockData = { data: [{ show_id: 'id1', show_name: 'mission one'] }
    mockFetchShow.mockResolvedValueOnce(mockData);

    const { getByText, queryByText } = render(<App />);
    const button = getByText(/get data/i);
    fireEvent.click(button);


    getByText(/we are fetching data/i);
    await wait(() => {
        expect(queryByText(/show one/i)).toHaveLength(1)
    });

    expect(0).toBeCloseTo(0);
})
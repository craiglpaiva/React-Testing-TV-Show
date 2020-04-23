import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episodes renders", () => {
    render(<Episodes episodes={} />);
})

test("Episodes renders with valid Missions", () => {
    const mockData = [{}];
    const { queryAllByText, rerender } = render(<Episodes missions={[]} />);

    let allEpisodes = queryAllByText(/mission/i);
    expect(allEpisodes).toHaveLength(0);
    expect(allEpisodes).toStrictEqual([]);

    rerender(<Episodes episodes={mockData} />);
    allEpisodes = queryAllByText(/mission/i);
    expect(allEpisodes).toHaveLength(1);
    // expect(allEpisodes.toStrictEqual([]));
})
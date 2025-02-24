import { Well } from "../redux/types";
import { computeDataToPlot } from "./dataUtil";

describe("Data Util", () => {
    const testStratigraphy = [
        {
            name: "zone1",
            color: "#c9f",
        },
        {
            name: "zone2",
            color: "#a9b",
        },
        {
            name: "zone3",
            color: "#fde",
        },
        {
            name: "zone4",
            color: "#c9e",
        },
        {
            name: "zone5",
            color: "#dde",
        },
        {
            name: "zone6",
            color: "#f8d",
        },
        {
            name: "zone7",
            color: "#9dc",
        },
        {
            name: "zone8",
            color: "#cce",
        },
        {
            name: "zone9",
            color: "#bdd",
        },
        {
            name: "zone10",
            color: "#8ea",
        },
        {
            name: "zone11",
            color: "#ded",
        },
        {
            name: "zone12",
            color: "#eb9",
        },
        {
            name: "zone13",
            color: "#bdf",
        },
        {
            name: "zone14",
            color: "#aca",
        },
    ];
    const testWells = [
        {
            name: "RWI_3",
            completions: {
                zone1: {
                    t: [5],
                    open: [0.5],
                    shut: [0.5],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone2: {
                    t: [5],
                    open: [0.5],
                    shut: [0.5],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone3: {
                    t: [5],
                    open: [0.5],
                    shut: [0.5],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone4: {
                    t: [5],
                    open: [0.5],
                    shut: [0.5],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone5: {
                    t: [5],
                    open: [0.5],
                    shut: [0.5],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone6: {
                    t: [1, 2, 5],
                    open: [1.0, 0.125, 0],
                    shut: [0.0, 0.875, 1],
                    khMin: [100, 200, 300],
                    khMax: [200, 200, 400],
                    khMean: [150, 200, 350],
                },
                zone7: {
                    t: [1, 2, 5],
                    open: [1.0, 0.125, 0],
                    shut: [0.0, 0.875, 1],
                    khMin: [100, 200, 300],
                    khMax: [200, 200, 400],
                    khMean: [150, 200, 350],
                },
                zone8: {
                    t: [5],
                    open: [1.0],
                    shut: [0.0],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone9: {
                    t: [3],
                    open: [1.0],
                    shut: [0.0],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone10: {
                    t: [5],
                    open: [1.0],
                    shut: [0.0],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone11: {
                    t: [5],
                    open: [1.0],
                    shut: [0.0],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone12: {
                    t: [5],
                    open: [1.0],
                    shut: [0.0],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone13: {
                    t: [5],
                    open: [1.0],
                    shut: [0.0],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
                zone14: {
                    t: [5],
                    open: [1.0],
                    shut: [0.0],
                    khMin: [100],
                    khMax: [200],
                    khMean: [150],
                },
            },
            earliestCompDateIndex: 1,
            attributes: { type: "Producer", region: "Region 2" },
        } as Well,
    ];
    it("test computeDataToPlot", () => {
        //Display single time step
        expect(
            computeDataToPlot(
                testStratigraphy,
                testWells,
                [0, 0],
                "First Step",
                false
            )
        ).toEqual({
            stratigraphy: testStratigraphy,
            wells: [
                {
                    name: "RWI_3",
                    completions: [
                        {
                            khMax: 0,
                            khMean: 0,
                            khMin: 0,
                            open: 0,
                            shut: 0,
                            zoneIndex: 0,
                        },
                    ],
                    earliestCompDateIndex: 1,
                    attributes: {
                        region: "Region 2",
                        type: "Producer",
                    },
                },
            ],
        });
        //Well with zero completions is filtered out
        expect(
            computeDataToPlot(
                testStratigraphy,
                testWells,
                [0, 0],
                "First Step",
                true
            )
        ).toEqual({
            stratigraphy: testStratigraphy,
            wells: [],
        });
        //Display range first step
        expect(
            computeDataToPlot(
                testStratigraphy,
                testWells,
                [2, 6],
                "First Step",
                false
            )
        ).toEqual({
            stratigraphy: testStratigraphy,
            wells: [
                {
                    name: "RWI_3",
                    completions: [
                        {
                            khMax: 0,
                            khMean: 0,
                            khMin: 0,
                            open: 0,
                            shut: 0,
                            zoneIndex: 0,
                        },
                        {
                            khMax: 200,
                            khMean: 200,
                            khMin: 200,
                            open: 0.125,
                            shut: 0.875,
                            zoneIndex: 5,
                        },
                        {
                            khMax: 0,
                            khMean: 0,
                            khMin: 0,
                            open: 0,
                            shut: 0,
                            zoneIndex: 7,
                        },
                    ],
                    earliestCompDateIndex: 1,
                    attributes: {
                        region: "Region 2",
                        type: "Producer",
                    },
                },
            ],
        });
        //Display range average
        expect(
            computeDataToPlot(
                testStratigraphy,
                testWells,
                [2, 6],
                "First Step",
                false
            )
        ).toEqual({
            stratigraphy: testStratigraphy,
            wells: [
                {
                    name: "RWI_3",
                    completions: [
                        {
                            khMax: 0,
                            khMean: 0,
                            khMin: 0,
                            open: 0,
                            shut: 0,
                            zoneIndex: 0,
                        },
                        {
                            khMax: 200,
                            khMean: 200,
                            khMin: 200,
                            open: 0.125,
                            shut: 0.875,
                            zoneIndex: 5,
                        },
                        {
                            khMax: 0,
                            khMean: 0,
                            khMin: 0,
                            open: 0,
                            shut: 0,
                            zoneIndex: 7,
                        },
                    ],
                    earliestCompDateIndex: 1,
                    attributes: {
                        region: "Region 2",
                        type: "Producer",
                    },
                },
            ],
        });
        //with filtered stratigraphy
        const filteredStratigraphy = testStratigraphy.slice(2, 5);
        expect(
            computeDataToPlot(
                filteredStratigraphy,
                testWells,
                [2, 6],
                "Max",
                false
            )
        ).toEqual({
            stratigraphy: filteredStratigraphy,
            wells: [
                {
                    name: "RWI_3",
                    completions: [
                        {
                            khMax: 200,
                            khMean: 150,
                            khMin: 100,
                            open: 0.5,
                            shut: 0.5,
                            zoneIndex: 0,
                        },
                    ],
                    earliestCompDateIndex: 1,
                    attributes: {
                        region: "Region 2",
                        type: "Producer",
                    },
                },
            ],
        });
    });
});

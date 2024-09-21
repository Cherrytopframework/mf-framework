// import React from "react";
// import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import ConfirmProvider from "./ConfirmProvider";
import { useConfirm } from "./ConfirmProvider";


describe("ConfirmProvider", () => {
    it("should render", () => {
        // const { result } = renderHook(() => useConfirm());
        // expect(result.current.open).toBe(false);
        expect(useConfirm().open).toBe(false);
    });
})
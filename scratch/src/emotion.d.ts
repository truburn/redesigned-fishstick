import "@emotion/react"
import type { ColorVariants, SizeOptions } from "@styles/types";

declare module "@emotion/react" {
    export interface Theme {
        color: ColorVariants & {
            primary: ColorVariants;
            secondary: ColorVariants;
            muted: ColorVariants;
            info: ColorVariants;
            success: ColorVariants;
            warning: ColorVariants;
            error: ColorVariants;
        };
        border: {
            color: string;
            width: SizeOptions;
            radius: {
                square: number;
                round: number | string;
                none: 0,
            };
        };
        spacing: SizeOptions;
    }
}
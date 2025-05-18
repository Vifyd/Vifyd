import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from './TextField';
const meta = {
    title: 'Components/Molecular/TextField/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        Wrapper: {
            control: 'select',
            options: ['red', 'black', 'chip'],
            mapping: {
                red: ({ children }) => (_jsx("span", { style: { backgroundColor: 'red' }, children: children })),
                black: ({ children }) => (_jsx("span", { style: { backgroundColor: 'black' }, children: children })),
                chip: ({ children }) => (_jsx("span", { style: { borderRadius: '8px', backgroundColor: 'yellow' }, children: children })),
            },
        },
        error: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
};
export default meta;
export const Primary = {
    args: {
        error: false,
    },
};

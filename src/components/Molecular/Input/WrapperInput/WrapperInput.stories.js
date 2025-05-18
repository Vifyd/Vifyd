import { jsx as _jsx } from "react/jsx-runtime";
import { WrapperInput } from './WrapperInput';
const meta = {
    title: 'Components/Molecular/Input/WrapperInput',
    component: WrapperInput,
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
        placeholder: {
            control: 'text',
        },
        disabled: {
            control: 'boolean',
        },
    },
};
export default meta;
export const WrapperInputTest = {
    args: {
        placeholder: '입력해 주세요',
    },
};

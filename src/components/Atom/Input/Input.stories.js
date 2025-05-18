import { Input } from './Input';
const meta = {
    title: 'Components/Atom/Input/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        inputSize: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
export const InputTest = {
    args: {
        inputSize: 'md',
        placeholder: '입력해 주세요',
        error: false,
    },
};

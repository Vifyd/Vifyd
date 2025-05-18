import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Input } from '@/components/Atom/Input/Input';
export const WrapperInput = ({ Wrapper, ...rest }) => {
    return (_jsx(_Fragment, { children: Wrapper ? (_jsx(Wrapper, { children: _jsx(Input, { ...rest }) })) : (_jsx(Input, { ...rest })) }));
};

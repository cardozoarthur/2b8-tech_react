import React from 'react';
import { Global } from '../../styles';

export function Container({children}) {
    return (
        <div>
            <Global />
            <Component>
                {children}
            </Component>
        </div>
    );
};

export function Component({children}) {
    return (
        <div>
            {children}
        </div>
    );
}
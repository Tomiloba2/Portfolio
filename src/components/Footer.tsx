import * as React from 'react';

export interface IFooterProps {
}

export function Footer(props: IFooterProps) {
    const date=new Date()
    return (
        <div className='text-center'>
            Tomiloba2@{date.getFullYear()}
        </div>
    );
}

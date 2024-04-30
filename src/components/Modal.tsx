import * as React from 'react';
import { Modal as ReactModal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

export interface IModalProps {
    children: React.ReactNode
    open:boolean;
    onCloseModal:()=>void
}

export function Modal(props: IModalProps) {
    return (
        <div>
            <ReactModal open={props.open} onClose={props.onCloseModal} center>
                {props.children}
            </ReactModal>
        </div>
    );
}

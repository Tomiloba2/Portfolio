import * as React from 'react';
import { Modal as ReactModal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

export interface IModalProps {
    open: boolean;
    onCloseModal: () => void
    src: string
}

export function Modal(props: IModalProps) {
    return (
        <div>
            <ReactModal open={props.open} onClose={props.onCloseModal} center>
                <video height={50} width={320} controls>
                    <source src={props.src} type='video/mp4' />
                </video>
            </ReactModal>
        </div>
    );
}

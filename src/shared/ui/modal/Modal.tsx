import { useEffect, type FC, type ReactNode } from 'react';
import scss from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type PropsModal = {
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
};

const Modal: FC<PropsModal> = ({ children, isOpen, onClose }) => {
	useEffect(() => {
		if (!isOpen) return;

		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = prevOverflow;
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return createPortal(
		<div onClick={onClose} role='presentation' className={scss.Modal}>
			<div
				onClick={(e) => e.stopPropagation()}
				role='dialog'
				aria-modal='true'
				className={scss.modalContent}
			>
				<button className={scss.close} onClick={onClose}>
					<X />
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal-root')!,
	);
};

export default Modal;

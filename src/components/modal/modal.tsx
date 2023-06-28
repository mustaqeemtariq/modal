import clsx from "clsx"
import { XMarkIcon } from "@heroicons/react/24/outline"

import { Button } from "components/button/button"

import styles from "./modal.module.scss"

interface ModalProps {
    title?: string
    showCrossIcon?: boolean
    className?: string
    showModal?: boolean
    showFooter?: boolean
    onClose?: () => void
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = (props) => {
  const {title, showCrossIcon = true, showModal = false, showFooter = true, onClose, children, className} = props
  return (
    <div className={clsx(styles.modal, className, !showModal && styles.hidden)}>
      <div className={clsx(styles["modal-content"])}>
        <div className={clsx(styles["modal-header"])}>
          {title && <h3>{title}</h3>}
          {showCrossIcon && <XMarkIcon onClick={onClose} className={clsx(styles["modal-icon"])} />}
        </div>
        <div className={clsx(styles["modal-body"])}>
          {children}
        </div>
       {showFooter && <div className={clsx(styles["modal-footer"])}>
          <Button onClick={onClose} variant="neutral">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>}
      </div>
    </div>
  )
}

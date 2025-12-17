import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router'
import { X } from 'lucide-react'
import Button from './Button'

type ModalProps = {
    children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
    const navigate = useNavigate()
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                e.preventDefault()
            }
        }

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') navigate(-1)
        }

        if (modalRef.current) {
            modalRef.current.focus()
        }

        document.addEventListener('keydown', handleTabKey)
        document.addEventListener('keydown', handleEscape)

        return () => {
            document.body.style.overflow = 'auto'
            document.removeEventListener('keydown', handleTabKey)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [navigate])

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4 backdrop-blur-xs"
            onClick={(e) => {
                if (e.target === e.currentTarget) navigate(-1)
            }}>
            <div
                ref={modalRef}
                tabIndex={-1}
                className="relative w-fit max-w-5xl overflow-auto rounded-xl bg-white shadow-2xl outline-none"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex w-full justify-end p-1">
                    <Button
                        onClick={() => navigate(-1)}
                        autoFocus
                        className="rounded-full bg-transparent text-black">
                        <X size={20} />
                    </Button>
                </div>

                <div className="max-h-[90vh] overflow-x-auto px-6">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('portal')!,
    )
}

'use client'

import { Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter, ModalCloseButton, useDisclosure } from "@chakra-ui/react"
import { Form } from "./form"

export const StartButtons = () => {
    return (
        <div className="flex gap-x-2 items-center justify-center">
            <button className="btn" onClick={() => alert('Hello World')}>Get Started</button>
            <button className="btn" onClick={() => alert('I have already said Hello world')}>Log In</button>
        </div>
    )
}
export const AddButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <button className="btn" onClick={onOpen}>+ Add</button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent backgroundColor={'#1D1E26'}>
                    <ModalHeader>
                        <h1 className="text-brand-white text-3xl font-semibold">Add link</h1>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className="flex flex-col">
                        <Form />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export const EditButton = ({ fun }: { fun: Function }) => {
    return (
        <button className="btn absolute bottom-3 right-3" onClick={() => fun()}>Edit</button>
    )
}
export const SaveButton = ({ fun }: { fun: Function }) => {
    return (
        <button className="btn absolute bottom-3 right-3" onClick={() => fun()}>Save</button>
    )
}
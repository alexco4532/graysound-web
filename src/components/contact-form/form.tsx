import React, { useCallback, useState } from 'react'
import FormSelect from './formSelect'
import { toast } from 'react-toastify';
import useChatwootStore from '@/hooks/use-chatwoot-store';
import servicesList from '@/data/services-list';
import EmailInput from './email-input';
import MessageInput from './message-input';
import SubmitButton from './submit-button';
import LiveChatButton from './live-chat-button';

type Service = { name: string; index: number }

function Form() {
    const chatwootIsReady = useChatwootStore((state) => state.isReady);
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [selected, setSelected] = useState<Service>(servicesList[0]);
    const [isSending, setIsSending] = useState<boolean>(false);

    // Form submit function
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        const data = { type: selected.name, email: email, message: message };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(data)
            });

            if (response.status !== 200) {
                throw new Error("Failed to send message");
            }

            // On successful message sending, reset the form fields and the sending flag
            setEmail("");
            setMessage("");
            setIsSending(false);
            // Display a success toast message
            return toast.success("Udało się wysłać wiadomość! Postaramy się odpowiedzieć jak najszybciej");
        } catch (error) {
            // Reset the sending flag and log the error
            setIsSending(false);
            console.error("There was an error sending the message", error);
            // Display an error toast message
            return toast.error("Wystąpił błąd podczas wysyłania wiadomości");
        }
    }

    // Function to open Live Chat
    const openLiveChat = () => {
        if (!chatwootIsReady) return;
        (window as any).$chatwoot.toggle("open");
    }


    // Callback to handle service selection
    const handleSelect = useCallback(
        (plan: Service) => {
            setSelected(plan);
        },
        [],
    )

    return (
        <form className='max-w-[480px]' onSubmit={onSubmit}>
            <p className='mt-[32px]'>Typ projektu</p>
            <FormSelect services={servicesList} selected={selected} setSelect={(service) => handleSelect(service)} />
            <EmailInput value={email} onChange={setEmail} />
            <MessageInput value={message} onChange={setMessage} />
            <div className='md:flex md:items-center md:justify-between md:mt-[32px]'>
                <div className='mt-[32px] md:mt-0'>
                    <SubmitButton isSending={isSending} />
                </div>
                <div className='mt-[24px] md:mt-0'>
                    <LiveChatButton openLiveChat={openLiveChat} />
                </div>
            </div>
        </form>
    )
}

export default Form;
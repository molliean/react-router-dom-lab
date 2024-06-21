
import { useParams } from 'react-router-dom';

export default function MailboxDetails({ mailboxes }) {
    const { mailboxId } = useParams();
    const singleBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    if(!singleBox){
        return <h2>Mailbox not found.</h2>
    }
    return (
        <>
            <h2>Mailbox {singleBox._id}</h2>
            <h3>Details</h3>
            <p>Box Holder: {singleBox.boxholder}</p>
            <p>Box Size: {singleBox.boxSize}</p>
        </>
    )
}
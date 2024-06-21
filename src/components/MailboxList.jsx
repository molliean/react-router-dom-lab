import {Link} from 'react-router-dom';

export default function MailboxList({ mailboxes }) {
    return (
        <>
            <h2>Mailbox List</h2>
            <ul>
                {mailboxes.map((currentMailbox) => (
                    <li className="mail-box "key={currentMailbox._id}>
                        <Link to={`/mailboxes/${currentMailbox._id}`}>
                            Mailbox {currentMailbox._id}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
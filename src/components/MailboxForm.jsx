import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    boxSize: '',
    boxholder: '',
};

export default function MailboxForm(props) {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox(formData);
        // console.log(formData)
        setFormData(initialState);
        navigate('/mailboxes');
    }
    const handleNewBox = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    }

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Enter a Box Holder: </label>
                <input type="text" id="boxholder" name="boxholder" value={formData.boxholder} onChange={handleNewBox} />
                <label htmlFor="boxSize">Select a Box Size: </label>
                <select name="boxSize" id="boxSize" value={formData.boxSize} onChange={handleNewBox}>
                    <option value="">Choose size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <button type='submit'>Add Mailbox</button>
            </form>
        </main>
    )
}
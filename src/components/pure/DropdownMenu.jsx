import React from 'react';

const DropdownMenu = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button onClick={handleOpen}>Dropdown</button>
            {open ? (
                <ul className="menu">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            ) : null}
            {open ? <div>Is Open</div> : <div>Is Closed</div>}
        </div>
    );
}

export default DropdownMenu;

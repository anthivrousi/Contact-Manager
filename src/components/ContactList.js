import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props);

const deleteContactHandler = (id) =>{
    props.getContactId(id);
}

const renderContactList = props.contacts.map((contact) =>{
    return(
        <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
    );
});
 

    return (
        <div className="ui celled list">
        {/* gia na to kanw reference to pairnw apo const panw kai to fernw edw to renderContactList */}
            {renderContactList}
        </div>
    );
};

export default ContactList;
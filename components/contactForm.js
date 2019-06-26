var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <form className={'contactForm'}>
                <label htmlFor='inputFirstName'>Imię </label>
                <input type={'text'} placeholder={'John F.'} value={this.props.contact.firstName} id='inputFirstName'></input>
                <label htmlFor='inputLastName'>Nazwisko </label>
                <input type={'text'} placeholder={'Kennedy'} value={this.props.contact.lastName} id={'inputLastName'}></input>
                <label htmlFor='inputEmail'>Email </label>
                <input type={'email'} placeholder={'jfk@whitehall.com'} value={this.props.contact.email} id={'inputEmail'}></input>
                <button type={'submit'}>{'Dodaj kontakt'}</button>
            </form>
        )
    },
})
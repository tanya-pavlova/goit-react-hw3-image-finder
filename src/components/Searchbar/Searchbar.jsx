import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.css';

class SearchForm extends Component {
    state = { qwery: '' };

    handleChange = event => {
        this.setState({ qwery: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.qwery);
        this.setState({ qwery: '' });
    };

    render() {
        return (
            <header className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchFormButton}>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

SearchForm.protoType = {
    qwery: PropTypes.string,
};

export default SearchForm;
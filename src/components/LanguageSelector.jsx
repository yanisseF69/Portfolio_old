import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';

function LanguageSelector(props) {
  const { onClick } = props;
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    onClick();
  };

  const handleKeyDown = (event, language) => {
    if (event.key === 'Enter') {
      handleLanguageChange(language);
    }
  };

  return (
    <AppContext.Consumer>
      {() => (
        <div style={{ marginBottom: 8 }}>
          {/* Drapeau Français */}
          <button
            type="button"
            onClick={() => handleLanguageChange('fr')}
            onKeyDown={(e) => handleKeyDown(e, 'fr')}
            style={{
              padding: 0,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              marginRight: 10,
            }}
          >
            <img
              src="images/fr_flag.png"
              alt="French Flag"
              style={{ width: 30, height: 'auto' }}
            />
          </button>
          {/* Drapeau Anglais */}
          <button
            type="button"
            onClick={() => handleLanguageChange('en')}
            onKeyDown={(e) => handleKeyDown(e, 'en')}
            style={{
              padding: 0,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src="images/en_flag.png"
              alt="English Flag"
              style={{ width: 30, height: 'auto' }}
            />
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
}

LanguageSelector.propTypes = {
  onClick: PropTypes.func,
};
LanguageSelector.defaultProps = {
  onClick: () => {},
};

export default LanguageSelector;

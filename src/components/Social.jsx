import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const { i18n } = useTranslation();
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(endpoints(i18n.language).social);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching social data:', error);
      }
    };

    loadData();
  }, [i18n.language]);

  return (
    <div className="social">
      {data ? data.social.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      )) : null}
    </div>
  );
}

export default Social;

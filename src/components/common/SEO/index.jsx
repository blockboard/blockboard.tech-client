import React from 'react';
import Helmet from 'react-helmet';
import {
  address,
  contact,
  defaultDescription,
  defaultTitle,
  foundingDate,
  legalName,
  logo,
  social,
  socialLinks,
  url,
} from 'data/config';

import Thumbnail from '../../../assets/thumbnail/thumbnail.png';

export const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      {/* <meta name="image" content={Thumbnail} /> */}

      <meta property="og:image" content={Thumbnail} />
      <meta property="og:image:secure" content={Thumbnail} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="1024" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.blockboard.tech/" />
      <meta property="og:title" content="Blockboard" />
      <meta property="og:description" content="Building Decentralized Applications on the Blockchain." />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image:src" content={Thumbnail} /> */}
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.google} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

import React, { useState } from 'react';

import Footer from '../footer';

import TopNav from '../header/with-store-mega-menu';

export default function StyleGuide() {
  return (
	<div style={{minHeight: '100vh'}}>
		<TopNav />
		<Footer />
	</div>
	);
}

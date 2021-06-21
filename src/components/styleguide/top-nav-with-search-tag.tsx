import React, { useState } from 'react';

import Footer from '../footer';

import TopNav from '../header/header-with-search-tag';

export default function StyleGuide() {
  return (
	<div style={{minHeight: '100vh'}}>
		<TopNav />
		<Footer />
	</div>
	);
}

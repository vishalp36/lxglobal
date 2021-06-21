import React, { useState } from 'react';
import BottomNav from '../bottom-nav';

import Footer from '../footer';

import TopNav from '../header';

export default function StyleGuide() {
  return (
	<div style={{minHeight: '100vh'}}>
		<TopNav />
		<Footer />
		<BottomNav />
	</div>
	);
}

import React, { useState } from 'react';
import BottomNav from '../bottom-nav';



import TopNav from '../header/with-mega-menu';

export default function StyleGuide() {
  return (
	<div style={{minHeight: '100vh'}}>
		<TopNav />
		<BottomNav />
	</div>
	);
}

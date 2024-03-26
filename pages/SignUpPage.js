// Import required modules and components
import React from 'react';
import { SignUp } from '@clerk/nextjs';

// Define the Page component
export default function Page() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Adjust the height as needed
      }}
    >
      {/* Render the SignUp component */}
      <SignUp />
    </div>
  );
}

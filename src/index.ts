import React from 'react';
import { Composition, registerRoot } from 'remotion';
const MedicalReel: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#07111f',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: 60,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          fontSize: 32,
          color: '#72d5e8',
          marginBottom: 36,
        }}
      >
        SAĞLIK NOTLARI
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          marginBottom: 18,
        }}
      >
        Vücudunuzun
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          marginBottom: 18,
        }}
      >
        sinyallerini dinleyin
      </div>
      <div
        style={{
          width: 500,
          height: 4,
          backgroundColor: '#72d5e8',
          marginTop: 30,
        }}
      />
      <div
        style={{
          fontSize: 30,
          color: '#b8c4d8',
          marginTop: 30,
        }}
      >
        Sağlığınız hakkında doğru bilgiler
      </div>
    </div>
  );
};
const Root: React.FC = () => (
  <Composition
    id="MedicalReel"
    component={MedicalReel}
    durationInFrames={300}
    fps={30}
    width={1080}
    height={1920}
  />
);
registerRoot(Root);
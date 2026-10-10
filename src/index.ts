
import {registerRoot} from 'remotion';
import {Composition} from 'remotion';
import React from 'react';

const MedicalReel: React.FC = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#0b1220',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    }}
  >
    <div style={{color: '#65d6c4', fontSize: 28, letterSpacing: 6}}>
      SAĞLIK NOTLARI
    </div>
    <div style={{fontSize: 68, fontWeight: 700, margin: 36}}>
      Vücudunuzun<br />sinyallerini dinleyin
    </div>
    <div style={{fontSize: 30, color: '#b8c4d8'}}>
      Sağlığınız hakkında doğru bilgiler
    </div>
  </div>
);

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

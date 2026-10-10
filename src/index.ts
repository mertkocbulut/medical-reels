
import React from 'react';
import {registerRoot, Composition, useCurrentFrame, useVideoConfig, interpolate, Easing} from 'remotion';

const MedicalReel: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });

  const titleOpacity = interpolate(frame, [12, 35, 245, 285], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const pulse = 1 + Math.sin(frame / 10) * 0.025;
  const lineWidth = interpolate(frame, [10, 100], [0, 560], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const scene = Math.floor(frame / 100);
  const headline =
    scene === 0
      ? 'SAĞLIK NOTLARI'
      : scene === 1
      ? 'Vücudunuzun\\nsinyallerini dinleyin'
      : 'Sağlığınız hakkında\\ndoğru bilgiler';

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#07111f',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          border: '1px solid rgba(87,190,220,0.16)',
          transform: `scale(${pulse})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 520,
          height: 520,
          borderRadius: '50%',
          border: '1px solid rgba(87,190,220,0.22)',
          transform: `scale(${1 + Math.sin(frame / 13) * 0.035})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 230,
          color: '#72d5e8',
          fontSize: 25,
          letterSpacing: 9,
          fontWeight: 600,
          opacity: fadeIn,
        }}
      >
        MEDICAL • EDUCATION
      </div>

      <div
        style={{
          zIndex: 1,
          textAlign: 'center',
          padding: '0 70px',
          opacity: titleOpacity,
          transform: `translateY(${interpolate(frame, [0, 35], [35, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })}px)`,
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 7,
            color: '#72d5e8',
            marginBottom: 35,
            fontWeight: 600,
          }}
        >
          {scene === 0 ? 'BİLGİLENDİRME SERİSİ' : 'SAĞLIK REHBERİ'}
        </div>

        <div
          style={{
            fontSize: scene === 0 ? 68 : 64,
            lineHeight: 1.35,
            fontWeight: 700,
            whiteSpace: 'pre-line',
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
          }}
        >
          {headline.replace('\\n', '\n')}
        </div>

        <div
          style={{
            height: 4,
            width: lineWidth,
            maxWidth: '100%',
            background: '#72d5e8',
            margin: '45px auto 35px',
            borderRadius: 4,
          }}
        />

        <div
          style={{
            fontSize: 29,
            color: '#b8c4d8',
            lineHeight: 1.5,
          }}
        >
          Bilinçli sağlık, güçlü yaşam.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 150,
          fontSize: 22,
          letterSpacing: 5,
          color: '#91a4bd',
          opacity: fadeIn,
        }}
      >
        SAĞLIK NOTLARI
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 90,
          left: 90,
          right: 90,
          height: 3,
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 5,
        }}
      >
        <div
          style={{
            width: `${(frame / 299) * 100}%`,
            height: '100%',
            background: '#72d5e8',
            borderRadius: 5,
          }}
        />
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

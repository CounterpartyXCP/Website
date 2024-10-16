import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const BLOCK_TARGET = 866000;
const AVERAGE_BLOCK_TIME = 600; // 10 minutes in seconds

const BlockCountdown: React.FC = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchCurrentBlock = async () => {
      try {
        const response = await fetch('https://mempool.space/api/blocks/tip/height');
        const currentBlock = await response.json();
        const blocksLeft = BLOCK_TARGET - currentBlock;
        if (blocksLeft <= 0) {
          setIsLive(true);
        } else {
          const secondsLeft = blocksLeft * AVERAGE_BLOCK_TIME;
          const targetDate = new Date(Date.now() + secondsLeft * 1000);
          setTargetDate(targetDate);
        }
      } catch (error) {
        console.error('Error fetching current block:', error);
      }
    };

    fetchCurrentBlock();
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      setIsLive(true);
      return null;
    } else {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <FlipUnit label="hours" value={hours} />
          <FlipUnit label="minutes" value={minutes} />
          <FlipUnit label="seconds" value={seconds} />
        </div>
      );
    }
  };

  if (isLive) {
    return (
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '15px', color: '#293C70', fontSize: '1.5rem' }}>
          Counterparty v2.0 is Live!
        </h3>
      </div>
    );
  }

  if (!targetDate) {
    return <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>Loading...</div>;
  }

  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <h3 style={{ marginBottom: '15px', color: '#293C70', fontSize: '1.5rem' }}>
        Counterparty v2.0 live at block 866000 in
      </h3>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

const FlipUnit: React.FC<{ label: string; value: number }> = ({ label, value }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#293C70',
        borderRadius: '5px',
        width: '60px',
        height: '80px',
        perspective: '200px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          color: 'white',
          fontSize: '36px',
          fontWeight: 'bold',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '5px'
        }}>
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <p style={{
        marginTop: '5px',
        fontSize: '12px',
        color: '#293C70',
        textTransform: 'uppercase'
      }}>
        {label}
      </p>
    </div>
  );
};

export default BlockCountdown;
